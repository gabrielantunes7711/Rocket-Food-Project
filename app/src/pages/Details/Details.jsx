import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import PageDefault from "../../components/PageDefault/PageDefault";
import Grid from "../../styles/Grid";
import { ReturnBtn } from "../../components/ReturnBtn/ReturnBtn";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";
import {
  PlateDetailsSection,
  PlateDetailsSectionSkeleton,
} from "../../components/PlateDetailsSection/PlateDetailsSection";

export const Details = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  async function getPlateData() {
    const { data } = await api.get(`/menu/${id}`);

    setData(data);
  }

  useEffect(() => {
    getPlateData();
  }, []);

  return (
    <PageDefault>
      <Container>
        <Grid>
          <ReturnBtn />

          {data !== null ? (
            <PlateDetailsSection data={data} />
          ) : (
            <PlateDetailsSectionSkeleton />
          )}
        </Grid>
      </Container>
    </PageDefault>
  );
};
