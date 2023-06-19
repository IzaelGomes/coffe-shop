import { styled } from "styled-components";

export const OrderWrapper = styled.div`

    display: flex;
    width: 80rem;
    margin: 0 auto;
    //padding-top: 2.5rem;
    gap: 1.3rem;

`

export const InforBox = styled.div`
    max-width: 40rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
   
    

    h2{
        font-size: 1.125rem;
        font-family: 'Baloo 2', sans-serif;
        color: ${props => props.theme["base-subtile"]};
        font-weight: 700;
    }

`

export const FormContainer = styled.div`
    display: flex;
    gap:0.75rem;
    flex-wrap: wrap;
`

export const AddressForm = styled.div`
    background-color:${props => props.theme["base-card"]} ;
    padding: 2.2rem;
   // width: 100%;
    border-radius: 6px;
  
  
`

export const FormTitle = styled.div`
   font-family: 'Baloo 2', sans-serif;
   
    h3{
        color: ${props => props.theme["base-subtile"]};
        font-size: 1rem;
    }

    p{
        margin-top: -20px;
        margin-left: 30px;
        font-size: 0.875rem;
        color: ${props => props.theme["base-text"]};
    }
`

export const Title = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    h3{
        font-weight: 400;
    }


`

export const Cart = styled.div`
    h2{
        font-size: 1.125rem;
        font-family: 'Baloo 2', sans-serif;
        color: ${props => props.theme["base-subtile"]};
        font-weight:700;
    }

`

export const PaymentTypes = styled.div`
    display: flex;
    gap: 0.75rem;
`