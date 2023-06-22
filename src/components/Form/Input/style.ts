import { styled } from "styled-components";


export const FormInput = styled.div<{$width:string}>`
    input {
        background-color: ${props => props.theme["base-input"]};
        border: none;
        padding: 0.75rem;
        margin-bottom: 0.2rem;
        border-radius: 0.25rem;
        outline: none;
        border: 1px solid ${props => props.theme["base-button"]};
        width:${props =>  props.$width};

        &::placeholder{
            font-family: Roboto, sans-serif;
            font-size: 0.875rem;
        }

        &:focus{
            border: 1px solid ${props => props.theme["yellow-dark"]};
        } 
    }

`
