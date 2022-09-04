import "styled-components";
import { defaultTheme } from "../styles/themes/default";

type ThemeType = typeof defaultTheme;

// Toda vez que vai importar styled-components, vai pegar daqui de baixo
// Se não tivesse importado na linha 1, ia sobrescrever a tipagem dele
declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
