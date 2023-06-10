import styled from 'styled-components'

export const MainContent = styled.main`
  max-width: 80rem;
  padding-top: 5.875rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`

export const MainText = styled.div`
  max-width: 31.25rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    line-height: 3.875rem;
    font-size: 2.5rem;
    font-weight: 800;

    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-family: Roboto, sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.5625rem;
    color: ${(props) => props.theme['base-subtile']};
  }
`

export const Icons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  padding-top: 5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

export const LeftContent = styled.div``

export const RightContent = styled.div``

export const CoffeCatalog = styled.div`
  max-width: 80rem;
  margin: 8.75rem auto auto auto;
`

export const CatalogTitle = styled.h2`
  margin-bottom: 3.375rem;
  font-family: 'Baloo 2', sans-serif;
  color: ${(props) => props.theme['base-subtile']};
  font-weight: 800;
  font-size: 2rem;
`
