import { styled } from "styled-components";


export const OrderWrapper = styled.div`
    display: flex;
    max-width: 80rem;
    margin: 2.4rem auto;
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
    flex-wrap: wrap;
    max-width:35rem;
`



export const AddressForm = styled.div`
    background-color:${props => props.theme["base-card"]} ;
    padding: 2.2rem;
    

    border-radius: 6px;
  
    form{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        
        div{
            display: flex;
            gap: 0.5rem;
        }
    }
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

    .cart-box{
        background-color:${props => props.theme["base-card"]} ;
        padding: 2.2rem;
        border-radius: 6px;
        border-radius: 6px 36px 6px 36px;
    }

    .cart-item{
        display: flex;
        align-items: center;
        padding-bottom: 1rem;


        h3{
            font-size: 15px;
        }

        .cart-infor{
            display: flex;
            //align-items: center;
            justify-content: center;
            gap: 1rem;
            img{
                width: 4rem;
            }

            span{
                padding-top: 0.8rem;
            }

        }

        .buttons{
           
            display: flex;
            align-items: center;
            gap: 0.4rem;
            .buttonControls{
                background-color: ${(props) => props.theme['base-button']};
                width: 3rem;
                height: 1rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0.5rem;
                border-radius: 6px;
                span{
                     padding: 0;
                 }

                button{
                cursor: pointer;
                border: none;
                height: 2rem;
                color:${(props) => props.theme['purple-dark']};
                background-color: ${(props) => props.theme['base-button']};
                }
            }

            .remove-item-button{
                display: flex;
                padding: 0.5rem;
                border: none;
                border-radius: 6px;
                background-color: ${(props) => props.theme['base-button']};
                height: 2rem;
                cursor: pointer;

                span{
                    padding-top: 0.1rem;
                    color: ${(props) => props.theme["base-text"]};
                }
            }
            
        }
    }

`

export const PaymentTypes = styled.div`
    display: flex;
    gap: 0.75rem;
`