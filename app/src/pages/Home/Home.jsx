import React, { useEffect, useState } from "react";
import { Container, MainBanner } from "./styles";
import MainBannerImg from "../../../public/images/main-banner.png";
import {
  FoodsSection,
  FoodsSectionSkeleton,
} from "../../components/FoodsSection/FoodsSection";

import Grid from "../../styles/Grid";
import { api } from "../../services/api";
import PageDefault from "../../components/PageDefault/PageDefault";
import { useLocation } from "react-router-dom";

export const Home = () => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const location = useLocation();
  const queryString = new URLSearchParams(location.search);
  const queryParam = queryString.get("search");

  async function getMenuData() {
    const response = await api.get("/menu/byCategories");

    setData(response.data);
  }

  useEffect(() => {
    getMenuData();
  }, []);

  useEffect(() => {
    if (data === null) return;

    if (queryParam) {
      let filteredData = data.map(({ category, plates }) => {
        const filteredPlates = plates.filter((plate) =>
          Object.values(plate).some(
            (value) =>
              typeof value === "string" &&
              value.toLowerCase().includes(queryParam.toLowerCase())
          )
        );

        return {
          category,
          plates: filteredPlates,
        };
      });

      filteredData = filteredData.filter((obj) => obj.plates.length > 0);

      setFilteredData(filteredData);
    } else {
      setFilteredData(data);
    }
  }, [location, data]);

  return (
    <PageDefault>
      <Container>
        <MainBanner>
          <Grid>
            <img src={MainBannerImg} alt="Banner Principal" />
          </Grid>
        </MainBanner>

        {data !== null
          ? filteredData &&
            filteredData.map(({ category, plates }, i) => (
              <FoodsSection title={category} data={plates} key={i} />
            ))
          : [...Array(3)].map((_, i) => <FoodsSectionSkeleton key={i} />)}
      </Container>
    </PageDefault>
  );
};
