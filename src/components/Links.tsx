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
        { link: "/switch", text: "Switch" },
    ];

    return (
        <Stack spacing={2} sx={{ width: "fit-content" }}>
            {links.map(({ link, text }, i) => (
                <Link to={link} key={i}>
                    To {text}
                </Link>
            ))}
        </Stack>
    );
};
