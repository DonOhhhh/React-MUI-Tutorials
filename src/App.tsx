import { Outlet } from "react-router-dom";
import "./App.css";
import { Stack, ThemeProvider, colors, createTheme } from "@mui/material";
import { ToHome } from "./components/ToHome";

const theme = createTheme({
    status: {
        danger: "#e53e3e",
    },
    palette: {
        secondary: {
            main: colors.orange[500],
        },
        neutral: {
            main: colors.grey[500],
            darker: colors.grey[700],
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Stack spacing={4} marginBottom={2}>
                    <ToHome />
                </Stack>
                <Outlet />
            </div>
        </ThemeProvider>
    );
}

export default App;
