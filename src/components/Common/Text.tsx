import styled from "styled-components";

const Text = styled.div`
  color: ${props => props.theme.colors.text.secondary};
  line-height: ${props => props.theme.typography.textLineHeight};
  font-size: ${props => props.theme.typography.textFontSize};
  margin-top: calc(${props => props.theme.common.gap} / 2);
`

export default Text