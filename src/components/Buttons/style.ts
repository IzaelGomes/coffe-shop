import { styled } from "styled-components";

export const ButtonWrapper = styled.div`
   button{
    display: flex;
    align-items: center;
    width: 11.1669rem;
    gap:0.7rem;
    border: none;
    background-color: ${props => props.theme["base-button"]};
    padding: 1rem;
    font-size: 0.75rem;
    border-radius: 6px;
    font-family: Roboto;
    text-transform: uppercase;
    color:${props => props.theme["base-text"]};
    cursor: pointer;

    &:hover{
        background-color: ${props => props.theme["base-hover"]};
    }
   } 
`