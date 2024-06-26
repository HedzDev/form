import styled from "styled-components";

const Form = styled.form`
  background-color: var(--color-white);
  display: grid;
  grid-template-rows: 0.4fr 1.4fr 1.4fr 1.4fr 2fr 0.6fr;
  grid-template-columns: 1fr 1fr;
  padding: 2.4rem 4rem;
  border-radius: 10px;
  min-height: 80vh;
  width: 50%;
  margin: 0 auto;

  // mobile queries
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 2rem;
  }
`;

export default Form;
