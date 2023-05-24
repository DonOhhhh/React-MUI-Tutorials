import { Outlet } from "react-router-dom";
import "./App.css";
import { Stack } from "@mui/material";
import { ToHome } from "./components/ToHome";

function App() {
    return (
        <div className="App">
            <Stack spacing={4} marginBottom={2}>
                <ToHome />
            </Stack>
            <Outlet />
        </div>
    );
}

export default App;
