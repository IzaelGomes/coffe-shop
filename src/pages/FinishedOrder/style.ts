import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  max-width: 80rem;
  padding-inline: 2rem;
  margin: 2.4rem auto;
  gap: 1.3rem;
`;

export const OrderComformedInfor = styled.div`
  margin-top: 7rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  .image-order {
    margin-top: 8rem;
  }

  h1 {
    color: ${(props) => props.theme["yellow-dark"]};
    font-family: "Baloo 2";
    font-size: 2rem;
    line-height: 0.25rem;
  }

  p {
    font-family: Roboto;
    color: ${(props) => props.theme["base-subtile"]};
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
  }
`;

export const OrderInfor = styled.div`
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  width: 32.875rem;
  padding: 2.5rem;
  border: 1px solid ${(props) => props.theme["yellow-dark"]};
  border-radius: 6px 36px;

  .order-details-wrapper {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    &:nth-child(1) {
      margin-bottom: 2rem;
    }

    &:nth-child(2) {
      margin-bottom: 2rem;
    }

    .order-details {
      color: ${(props) => props.theme["base-text"]};
      font-family: Roboto;
      font-size: 1rem;
      h3 {
        line-height: 0.2rem;
        font-weight: 400;
        line-height: 0;
      }

      span {
        font-weight: 800;
      }
    }
  }
`;

export const Icon = styled.div<{ $color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme[props.$color]};
  width: 2rem;
  padding: 0.1rem;
  height: 2rem;
  border-radius: 100px;
`;
