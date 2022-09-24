import styled from "styled-components";

const Container = styled.div`
  background: ${(props) => props.theme.colors.primary};
  min-height: 100vh;
  text-align: center;
`;

export default Container