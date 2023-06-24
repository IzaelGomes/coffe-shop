import { styled } from "styled-components";




export const ItemWrapper = styled.div`
     display: flex;
    align-items: center;
    padding-bottom: 1rem;

    .cart-infor{
        display: flex;
        //align-items: center;
        justify-content: center;
        gap: 1rem;
        img{
            width: 4rem;
        }

        .price{
            padding-top: 0.8rem;
            color: ${props => props.theme["base-text"]};
            font-size: 1rem;
            font-weight: 700;
            font-family: 'Roboto', sans-serif; 
        }

        .item-infor{
            h3{
                font-family: "Roboto", sans-serif;
                font-size: 1rem;
                font-weight: 400;
            }
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

`












