import styled from "styled-components"

interface ILinkButton {
  fillColor?: string;
}

const LinkButton = styled.a<ILinkButton>`
  background-color: ${props => props.fillColor || props.theme.colors.accent}0D;
  border-color: ${props => props.fillColor || props.theme.colors.accent};
  border-width: 1px;
  border-style: solid;
  padding: ${props => props.theme.common.gap};
  border-radius: 4px;
  color: ${props => props.theme.colors.text.primary} !important;
  &:hover {
    background-color: ${props => props.fillColor || props.theme.colors.accent}1F;
  }
`

const Link: React.FC<ILinkItem> = ({ title, color, url }) => {
  return <LinkButton href={url} rel="noopener noreferrer" target="_blank" fillColor={color} >{title}</LinkButton>
}

export default Link
