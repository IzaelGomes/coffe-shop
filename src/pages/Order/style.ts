import { styled } from "styled-components";

export const OrderWrapper = styled.div`
  display: flex;
  max-width: 80rem;
  margin: 2.4rem auto;
  gap: 1.3rem;
`;

export const InforBox = styled.div`
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h2 {
    font-size: 1.125rem;
    font-family: "Baloo 2", sans-serif;
    color: ${(props) => props.theme["base-subtile"]};
    font-weight: 700;
  }
`;

export const FormContainer = styled.div`
  flex-wrap: wrap;
  max-width: 35rem;
`;

export const AddressForm = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  padding: 2.2rem;

  border-radius: 6px;

  form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    div {
      display: flex;
      gap: 0.5rem;
    }
  }
`;

export const FormTitle = styled.div`
  font-family: "Baloo 2", sans-serif;

  h3 {
    color: ${(props) => props.theme["base-subtile"]};
    font-size: 1rem;
  }

  p {
    margin-top: -20px;
    margin-left: 30px;
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const PaymentTypes = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  h3 {
    font-weight: 400;
  }
`;

export const Cart = styled.div`
  h2 {
    font-size: 1.125rem;
    font-family: "Baloo 2", sans-serif;
    color: ${(props) => props.theme["base-subtile"]};
    font-weight: 700;
  }

  .cart-box {
    background-color: ${(props) => props.theme["base-card"]};
    padding: 2.2rem;
    border-radius: 6px;
    border-radius: 6px 36px 6px 36px;
    display: flex;
    flex-direction: column;
  }

  .order-prices {
    display: flex;
    margin-top: 1.5rem;
    flex-direction: column;
    gap: 0.75rem;

    div {
      display: flex;
      justify-content: space-between;

      .total-items-text,
      .total-items-price,
      .shipping-tax,
      .shipping-tax-price {
        color: ${(props) => props.theme["base-text"]};
        font-family: "Roboto", sans-serif;
      }

      .total-items-text,
      .shipping-tax {
        font-size: 0.875rem;
      }

      .shipping-tax-price,
      .total-items-price {
        font-size: 1rem;
      }

      .total,
      .total-price {
        font-family: "Roboto", sans-serif;
        color: ${(props) => props.theme["base-subtile"]};
        font-weight: 700;
        font-size: 1.25rem;
      }
    }
  }
`;

export const ButtonConfirm = styled.button`
  background-color: ${(props) => props.theme.yellow};
  margin-top: 1.5rem;
  color: #fff;
  font-weight: 700;
  padding: 0.75rem 0.5rem;
  border-radius: 6px;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }
`;
