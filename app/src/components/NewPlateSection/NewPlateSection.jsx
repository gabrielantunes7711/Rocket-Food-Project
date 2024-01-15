import React, { useEffect, useState } from "react";
import { Container, ButtonsWrapper } from "./styles";
import { Input } from "../../components/form/Input/Input";
import { Textarea } from "../../components/form/Textarea/Textarea";
import { Button } from "../../styles/Button";
import { UploadImage } from "../../components/UploadImage/UploadImage";
import { ReactSelect } from "../../components/form/ReactSelect/ReactSelect";
import { NewOptions } from "../../components/NewOptions/NewOptions";
import { api } from "../../services/api";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export const NewPlateSection = ({ data }) => {
  const [plateImage, setPlateImage] = useState(null);
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [categoriesOptions, setCategoriesOptions] = useState([]);
  const platePlaceholderImg = `${api.defaults.baseURL}/files/platePlaceholder.jpg`;

  const { id } = useParams();
  const navigate = useNavigate();

  function populateFields() {
    if (!data) return;
    const categoriesToArray = data.categories.split(",");
    const categoriesToNumber = categoriesToArray.map((str) => Number(str));

    if (data.image !== null) {
      setPlateImage(`${api.defaults.baseURL}/files/${data.image}`);
    }

    setName(data.name);
    setCategories(categoriesToNumber);
    setIngredients(data.ingredients);
    setPrice(`R$ ${data.price.replace(".", ",")}`);
    setDescription(data.description);
  }

  async function getCategories() {
    const response = await api.get("/categories");
    const options = [];

    response.data.map(({ name, id }) =>
      options.push({ value: id, label: name })
    );

    setCategoriesOptions(options);
  }

  async function savePlate() {
    if (!name || !categories || !ingredients || !price || !description) {
      return new Swal({
        icon: "error",
        title: "Informe todos os campos obrigatórios",
        confirmButtonText: "Ok",
      });
    }

    const data = {
      name,
      price,
      ingredients,
      description,
      image: plateImage,
      categories,
    };

    try {
      await api.post("/menu", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      new Swal({
        icon: "success",
        title: "Prato cadastrado com sucesso!",
        confirmButtonText: "Ok",
      });
    } catch (error) {
      if (error.response) {
        new Swal({
          icon: "error",
          title: error.response.data.message,
          confirmButtonText: "Ok",
        });
      } else {
        new Swal({
          icon: "error",
          title: error,
          confirmButtonText: "Ok",
        });
      }
    }
  }

  async function updatePlate() {
    if (!name || !categories || !ingredients || !price || !description) {
      return new Swal({
        icon: "error",
        title: "Informe todos os campos obrigatórios",
        confirmButtonText: "Ok",
      });
    }

    const data = {
      name,
      price,
      ingredients,
      description,
      image: plateImage,
      categories,
    };

    try {
      await api.put(`/menu/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      new Swal({
        icon: "success",
        title: "Prato atualizado com sucesso!",
        confirmButtonText: "Ok",
      });
    } catch (error) {
      if (error.response) {
        new Swal({
          icon: "error",
          title: error.response.data.message,
          confirmButtonText: "Ok",
        });
      } else {
        new Swal({
          icon: "error",
          title: error,
          confirmButtonText: "Ok",
        });
      }
    }
  }

  async function deletePlate() {
    try {
      const confirmation = await Swal.fire({
        title: "Você deseja excluir este prato?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sim, excluir",
        cancelButtonText: "Cancelar",
        reverseButtons: true,
      });

      if (confirmation.isConfirmed) {
        await api.delete(`/menu/${id}`);

        Swal.fire({
          icon: "success",
          title: "Prato deletado com sucesso!",
          confirmButtonText: "Ok",
          preConfirm: () => navigate("/"),
        });
      }
    } catch (error) {
      if (error.response) {
        Swal.fire({
          icon: "error",
          title: error.response.data.message,
          confirmButtonText: "Ok",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: error,
          confirmButtonText: "Ok",
        });
      }
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    populateFields();
  }, [data]);

  return (
    <Container>
      <h1>{id ? "Editar prato" : "Adicionar prato"}</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (id) {
            updatePlate();
          } else {
            savePlate();
          }
        }}
      >
        <UploadImage
          image={plateImage || platePlaceholderImg}
          setImage={setPlateImage}
        />

        <Input
          id="name"
          label="Nome"
          placeholder="Ex.: Salada Ceasar"
          setValue={setName}
          value={name}
        />

        <ReactSelect
          options={categoriesOptions}
          placeholder="Selecione uma categoria"
          label="Categorias"
          setValue={setCategories}
          value={categories}
          isMulti
        />

        <NewOptions
          title={"Ingredientes"}
          options={ingredients}
          setOptions={setIngredients}
        />

        <Input
          id="price"
          label="Preço"
          placeholder="R$ 00,00"
          setValue={setPrice}
          value={price}
        />

        <Textarea
          id="descrição"
          placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
          label="Descrição"
          setValue={setDescription}
          value={description}
        />

        <ButtonsWrapper>
          {id && (
            <Button $secondary type="button" onClick={deletePlate}>
              Excluir prato
            </Button>
          )}
          <Button>Salvar alterações</Button>
        </ButtonsWrapper>
      </form>
    </Container>
  );
};

export const NewPlateSectionSkeleton = () => {
  return (
    <Container>
      <h1>Editar Prato</h1>

      <form>
        <Skeleton width="20rem" height="20rem" borderRadius="50%" />

        <Skeleton width="100%" height="4.8rem" />

        <Skeleton width="100%" height="4.8rem" />

        <Skeleton width="100%" height="4.8rem" />

        <Skeleton width="100%" height="4.8rem" />

        <Skeleton width="100%" height="17.6rem" />

        <ButtonsWrapper>
          <Skeleton width="14.2rem" height="4.8rem" />
          <Skeleton width="17.2rem" height="4.8rem" />
        </ButtonsWrapper>
      </form>
    </Container>
  );
};
