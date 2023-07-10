import { Routers } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/theme/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { CartContextProvider } from "./contexts/cartContext";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <Routers />
        </ThemeProvider>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
