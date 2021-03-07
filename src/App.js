import { ThemeProvider } from "styled-components";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

import theme from "./style/theme";
import GlobalStyle from "./style/GlobalStyle";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <Home />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
