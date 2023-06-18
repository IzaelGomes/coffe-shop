import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  max-width: 80rem;
  margin: 0 auto;
`

export const ContentHeader = styled.div`
  display: flex;
  padding-top: 2rem;
  justify-content: space-between;
  align-items: center;
`

export const InforHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: Roboto, sans-serif;

  div {
    display: flex;
    align-items: center;
    gap: 0.465rem;
    padding: 0.5rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme['purple-light']};

    span {
      color: ${(props) => props.theme['purple-dark']};
      font-weight: 400;
    }
  }
`

export const IconCart = styled.span`
  padding: 0.5rem;
  background-color: ${(props) => props.theme['yellow-light']};
  border-radius: 6px;
  cursor: pointer;
`
