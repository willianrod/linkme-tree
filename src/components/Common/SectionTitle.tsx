import styled from "styled-components";

const SectionTitle = styled.span`
  color: ${props => props.theme.colors.text.primary};
  font-size: ${props => props.theme.typography.sectionTitleFontSize};
  line-height: ${props => props.theme.typography.sectionTitleLineHeight};
  font-weight: 700;
  text-transform: uppercase;
`

export default SectionTitle;
