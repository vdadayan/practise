import styled from "styled-components";

export const TextFieldWrapperStyled = styled.div`
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`

export const TextFieldInputStyled = styled.input.attrs((props) =>
    props
)`
  padding: 4px 12px;
  height: 50px;
  border-radius: 8px;
  outline: 0;
  margin: 0;
`