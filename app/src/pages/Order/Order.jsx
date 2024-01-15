import React from "react";
import { Container, TotalOrderValue, OrderWrapper } from "./styles";
import PageDefault from "../../components/PageDefault/PageDefault";
import Grid from "../../styles/Grid";
import { OrderCard } from "../../components/OrderCard/OrderCard";
import { useSelector } from "react-redux";

export const Order = () => {
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);
  const { totalValue } = useSelector((rootReducer) => rootReducer.cartReducer);

  return (
    <PageDefault>
      <Container>
        <Grid>
          <div>
            <h2>Meu pedido</h2>

            {products.length > 0 ? (
              <>
                <OrderWrapper>
                  {products.map((product, i) => (
                    <OrderCard data={product} key={i} />
                  ))}
                </OrderWrapper>

                <TotalOrderValue>
                  Total: R$ {String(totalValue.toFixed(2)).replace(".", ",")}
                </TotalOrderValue>
              </>
            ) : (
              <span>
                Opa, parece que seu carrinho está vazio &nbsp;&nbsp;: (
              </span>
            )}
          </div>
        </Grid>
      </Container>
    </PageDefault>
  );
};
