import styled from "styled-components"

const Title = styled.span`
  color: ${props => props.theme.colors.text.primary};
  font-size: ${props => props.theme.typography.titleFontSize};
  font-weight: 700;
`

export default Title
