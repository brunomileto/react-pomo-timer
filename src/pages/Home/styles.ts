import styled from "styled-components";

export const HomeContainer = styled.main`
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
const BaseCountDownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-weight: bold;

  cursor: pointer;

  background: ${(props) => props.theme.green500};
  color: ${(props) => props.theme.gray100};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme.green700};
  }
`;

export const StartCountDownButton = styled(BaseCountDownButton)`
  background: ${(props) => props.theme.green500};
  &:not(:disabled):hover {
    background: ${(props) => props.theme.green700};
  }
`;
export const StopCountDownButton = styled(BaseCountDownButton)`
  background: ${(props) => props.theme.red500};
  &:not(:disabled):hover {
    background: ${(props) => props.theme.red700};
  }
`;
