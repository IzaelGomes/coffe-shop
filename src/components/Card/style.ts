import styled from 'styled-components'

export const CoffeWrapper = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  max-width: 16rem;
  height: 19.375rem;
  display: flex;
  flex-direction: column;
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
  }

  p{
    font-family: Roboto, sans-serif;
    

  }

  img {
    width: 7.5rem;
    margin-top: -1rem;
    margin-bottom: 0.75rem;
  }
`

export const CoffeQuantity = styled.div``

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
