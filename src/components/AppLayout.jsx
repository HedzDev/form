import styled from "styled-components";

const StyledApp = styled.main`
  background-color: var(--color-green-200);
  min-height: 100vh;
  padding: 4rem;
`;

function AppLayout({ children }) {
  return <StyledApp>{children}</StyledApp>;
}

export default AppLayout;
