import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{
    background: ${({ theme }) => theme.surface1};
    color: ${({ theme }) => theme.text1};
    font-size: clamp(1rem, 8vw, 1.3rem);
    > * {
      transition: 0.25s ease all;
    }
  }
  h1{
    font-size: clamp(1.2rem, 8vw, 2.8rem);
  }
`;

export const MainApp = styled.main`
  h2.question-text {
    display: flex;
    justify-content: center;
    font-size: clamp(1.2rem, 6vw, 3rem);
  }
  }
  @media screen and (min-width: 980px) {
    place-items: center;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  /* padding: ${({ theme }) => theme.padding}; */
  :last-child {
    margin-bottom: 4rem;
  }
  @media screen and (min-width: 980px) {
    min-block-size: 50rem;
    inline-size: 40rem;
  }
`;

export const BasicGrid = styled.div`
  display: grid;
  gap: 1rem;
  margin: 1rem 0;
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: ${({ theme }) => theme.transition};
  color: ${({ theme }) => theme.text1};
  border: 0px solid ${({ theme }) => theme.primary};
  padding: 1rem 2.2rem;
  font-size: clamp(1rem, 2vw, 1.3rem);
  text-transform: capitalize;
  font-weight: 500;
  width: 100%;
  /* disabled styles */
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  background: ${({ disabled, theme }) => (disabled ? theme.disabled : "")};
  &.ans {
    background: ${({ theme }) => theme.success};
    color: ${({ theme }) => theme.textDark1};
  }
  &.secondary {
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.textDark1};
    background: ${({ disabled, theme }) => (disabled ? theme.disabled : "")};
  }
  @media screen and (min-width: 1080px) {
    :hover {
      filter: brightness(1.2);
    }
  }

  :active {
    transform: scaleX(0.9);
  }
  &.selected {
    background: orangered;
  }
`;
