import styled from "styled-components";

const FooterContainer = styled.footer`
  background: ${(props) => props.theme.colors.card.background};
  border-style: solid;
  border-width: ${(props) => props.theme.common.borderSize};
  border-color: ${(props) => props.theme.colors.card.border};
  color: ${(props) => props.theme.colors.text.primary};
  padding: 8px 0;
  font-size: ${(props) => props.theme.typography.textFontSize};
`;

const Footer = () => {
  return (
    <FooterContainer>
      <a
        href="https://github.com/willianrod/linkme-tree"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by LinkMeTree
      </a>
    </FooterContainer>
  );
};

export default Footer;
