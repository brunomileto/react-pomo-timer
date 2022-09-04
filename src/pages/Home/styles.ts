import styled from "styled-components";

export const HomeContainer = styled.main`
  height: 100%;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;

export const FormContainer = styled.form`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  color: ${(props) => props.theme.gray100};

  font-size: 1.125rem;
  font-weight: bold;
`;

export const CountDownContainer = styled.div`
  font-family: "Roboto Mono", monospace;
  font-size: 10rem;
  line-height: 8rem;

  color: ${(props) => props.theme.gray100};

  display: flex;
  gap: 1rem;

  span {
    background: ${(props) => props.theme.gray700};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`;

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme.green500};

  width: 4rem;
  overflow: hidden;

  display: flex;
  justify-content: center;
`;
