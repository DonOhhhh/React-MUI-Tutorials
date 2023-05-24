import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

export const Links = () => {
    const links = [
        { link: "/typography", text: "Typography" },
        { link: "/button", text: "Button" },
        { link: "/textfield", text: "TextField" },
        { link: "/select", text: "Select" },
        { link: "/radiobutton", text: "RadioButton" },
        { link: "/checkbox", text: "Checkbox" },
    ];

    return (
        <Stack spacing={2} sx={{ width: "fit-content" }}>
            {links.map(({ link, text }) => (
                <Link to={link}>To {text}</Link>
            ))}
        </Stack>
    );
};
