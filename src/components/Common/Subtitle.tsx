import styled from "styled-components"

const Subtitle = styled.span`
  color: ${props => props.theme.colors.text.accent};
  font-size: ${props => props.theme.typography.subtitleFontSize};
  font-weight: 400;
`

export default Subtitle
