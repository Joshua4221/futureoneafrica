import { useState, useCallback } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../lib/GlobalStyle/global.style";
import { theme } from "../lib/theme";
import "../styles/globals.css";
import Nav from "../universal-components/Nav";
import { SubNavArray } from "../utils/SubNav";
import { NavArray } from "../utils/Nav";
import Modal from "../universal-components/Modal";
import { modalArray } from "../utils/Modal";

function MyApp({ Component, pageProps }) {
  const [state, setState] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const current = state ? theme.ColorDarkMode : theme.ColorLightMode;

  const HandleThemeProvider = useCallback(() => {
    setState(!state);
  }, [state]);

  const HandleSearch = useCallback(() => {
    setShowSearch(!showSearch);
  }, [showSearch]);

  const HandleSearchReturn = useCallback(() => {
    setShowSearch(false);
  }, []);

  const HandleModal = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);

  const HandleModalReturn = useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <ThemeProvider theme={current}>
      <GlobalStyles />
      {showModal && (
        <Modal modalArray={modalArray} handleModalReturn={HandleModalReturn} />
      )}
      <Nav
        NavArray={NavArray}
        onclick={HandleThemeProvider}
        handleSearch={HandleSearch}
        handleModal={HandleModal}
        state={state}
        showSearch={showSearch}
        nav={"nav1"}
      />
      <Nav NavArray={SubNavArray} nav={"nav2"} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
