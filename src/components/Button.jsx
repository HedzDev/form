import styled, { css } from "styled-components";

const StyledButton = styled.button`
  border: 1px solid var(--color-grey-500);
  background-color: var(--color-green-600);
  color: var(--color-white);
  font-weight: semi-bold;
  letter-spacing: 2px;
  font-size: 16px;
  border-radius: 10px;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  gap: 30px;
  cursor: pointer;
  transition: background-color 200ms ease-in;
  margin-top: 30px;

  &:hover {
    background-color: var(--color-grey-900);
  }

  ${(props) =>
    props.type === "fullRow" &&
    css`
      grid-column: 1/3;
    `};
`;

// const RadioInput = styled.input`
//   justify-content: flex-start;
// `;

function Button({ children, type }) {
  return <StyledButton type={type}>{children}</StyledButton>;
}

export default Button;
