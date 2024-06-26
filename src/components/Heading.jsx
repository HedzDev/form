import styled, { css } from "styled-components";

const H1 = styled.h1`
  ${(props) =>
    props.type === "fullRow" &&
    css`
      grid-column: 1/3;
    `}
`;

function Heading({ title, type }) {
  return <H1 type={type}>{title}</H1>;
}

export default Heading;
