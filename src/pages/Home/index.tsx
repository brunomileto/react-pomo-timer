import { Play } from "phosphor-react";
import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  Separator,
} from "./styles";
export const Home = () => {
  return (
    <HomeContainer>
      <FormContainer action="">
        <div>
          <label htmlFor="task">Vou trabalhar em </label>
          <input id="task" />

          <label htmlFor="minutesAmount"> durante </label>
          <input type="number" id="minutesAmount" />

          <span> minutos</span>
        </div>

        <CountDownContainer>
          <Separator>0</Separator>
          <Separator>0</Separator>
          <Separator>:</Separator>
          <Separator>0</Separator>
          <Separator>0</Separator>
        </CountDownContainer>

        <button type="submit">
          <Play size={24} />
          Começar
        </button>
      </FormContainer>
    </HomeContainer>
  );
};
