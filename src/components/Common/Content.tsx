import styled from "styled-components";

const Content = styled.main`
  max-width: ${(props) => props.theme.common.width};
  width: calc(
    100% - ${(props) => props.theme.common.gap} -
      ${(props) => props.theme.common.gap}
  );
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.theme.common.gap} 0;
  gap: ${(props) => props.theme.common.gap};
`;

export default Content