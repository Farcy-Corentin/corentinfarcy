import App from "./App";
import {ThemeProvider} from "styled-components";
import lightTheme from "./styles/themes/light";
import darkTheme from "./styles/themes/dark";
import useThemeStore from "./stores/themeStore";
import GlobalStyle from "./styles/globalStyle";

function AppWrap() {

    const isDarkMode = useThemeStore((state) => state.isDarkMode)

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <GlobalStyle/>
            <App/>
        </ThemeProvider>
    )
}

export default AppWrap
