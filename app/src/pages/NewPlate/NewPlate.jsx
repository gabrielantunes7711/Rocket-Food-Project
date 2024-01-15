import React, { useEffect, useState } from "react";
import PageDefault from "../../components/PageDefault/PageDefault";
import { Container } from "./styles";
import { ReturnBtn } from "../../components/ReturnBtn/ReturnBtn";
import Grid from "../../styles/Grid";

import {
  NewPlateSection,
  NewPlateSectionSkeleton,
} from "../../components/NewPlateSection/NewPlateSection";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";

export const NewPlate = () => {
  const [plateData, setPlateData] = useState(null);
  const { id } = useParams();

  async function getPlateData() {
    const response = await api.get(`/menu/${id}`);

    setPlateData(response.data);
  }

  useEffect(() => {
    if (id) {
      getPlateData();
    }
  }, []);

  return (
    <PageDefault>
      <Container>
        <Grid>
          <ReturnBtn />

          {plateData || !id ? (
            <NewPlateSection data={plateData} />
          ) : (
            <NewPlateSectionSkeleton />
          )}
        </Grid>
      </Container>
    </PageDefault>
  );
};
