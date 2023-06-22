import styled from 'styled-components'

export const CoffeWrapper = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  max-width: 16rem;
  height: 19.375rem;
  display: flex;
  flex-direction: column;
  margin-bottom:2.5rem;
  justify-content: center;
  border-radius: 6px 36px 6px 36px;
 
`

export const CoffeInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.25rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['base-subtile']};
    font-size: 1.25rem;
    font-weight: 800;
    margin-bottom: -5px;
  }

  p{
    font-family: Roboto, sans-serif;
    color: ${(props) => props.theme['base-label']};
    font-size: 14px;
    width: 13.5rem;
    text-align: center;
    margin-bottom: 2.0625rem;
   

  }

  img {
    width: 7.5rem;
    margin-top: -4rem;
    margin-bottom: 0.75rem;
  }
`

export const CoffeQuantity = styled.div`
  display: flex;
  align-items: center;
  gap:1.4375rem;


  div{
    display: flex;
    align-items: center;
    gap:0.5rem;
    justify-content: center;
  }

`

export const ButtonControls =styled.div`
    background-color: ${(props) => props.theme['base-button']};
    width: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    border-radius: 6px;
    


    button{
      cursor: pointer;
      border: none;
      color:${(props) => props.theme['purple-dark']};
      background-color: ${(props) => props.theme['base-button']};
    }
`

export const Icon = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 4px;
  background-color: ${(props) => props.theme['purple-dark']};
` 

export const CoffeType = styled.span`
  font-family: Roboto, sans-serif;
  font-size: 0.625rem;
  font-weight: 700;
  font-style: normal;
  text-transform: uppercase;
  background-color: ${(props) => props.theme['yellow-light']};
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  color: ${(props) => props.theme['yellow-dark']};

`

export const Price = styled.span`
   font-family: 'Baloo 2', sans-serif;
   font-weight: 800;
   color: ${(props) => props.theme['base-text']};
   font-size: 1.5rem;

   &::before {
    content: 'R$';
    padding-right: 0.2rem;
    
    font-size: 0.875rem;
    font-weight: 400;
   }
  `


