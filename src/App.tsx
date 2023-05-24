import { Link } from "react-router-dom";
import "./App.css";
import { Stack } from "@mui/material";

function App() {
    return (
        <div className="App">
            <Stack spacing={2} sx={{ width: "fit-content" }}>
                <Link to={"/typography"}>To Typography</Link>
                <Link to={"/button"}>To Button</Link>
                <Link to={"/textfield"}>To TextField</Link>
                <Link to={"/select"}>To Select</Link>
                <Link to={"/radiobutton"}>To RadioButton</Link>
                <Link to={"/typography"}>To Typography</Link>
            </Stack>
        </div>
    );
}

export default App;
