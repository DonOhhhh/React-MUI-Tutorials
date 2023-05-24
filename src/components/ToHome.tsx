import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const ToHome = () => {
    return (
        <Link to="/">
            <Typography variant="h4">To Home</Typography>
        </Link>
    );
};
