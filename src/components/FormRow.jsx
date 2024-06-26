import styled, { css } from "styled-components";

const StyledFormRow = styled.div`
  display: grid;
  position: relative;
  align-items: flex-end;
  padding: 0.8rem 0;
  margin: 0 5px;

  ${(props) =>
    props.type === "fullRow" &&
    css`
      grid-column: 1/3;
    `}
  ${(props) =>
    props.type === "specialFullRow" &&
    css`
      display: flex;
      grid-column: 1/3;
      flex-direction: row-reverse;
      justify-content: flex-end;
      align-items: center;
    `};
`;

const Label = styled.label`
  font-weight: 500;
  cursor: pointer;
`;

const Error = styled.span`
  font-size: 0.8rem;
  color: var(--color-red);
  position: absolute;
  bottom: -5px;

  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`;

const ColoredStar = styled.span`
  color: var(--color-green-600);
`;

function FormRow({ label, children, error, type }) {
  return (
    <StyledFormRow type={type}>
      {label && (
        <Label htmlFor={children.props?.id}>
          {label} <ColoredStar>*</ColoredStar>
        </Label>
      )}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
