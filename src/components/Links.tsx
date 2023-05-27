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
        { link: "/rating", text: "Rating" },
        { link: "/autocomplete", text: "Autocomplete" },
        { link: "/layout", text: "Layout" },
        { link: "/card", text: "Card" },
        { link: "/accordion", text: "Accordion" },
        { link: "/imagelist", text: "ImageList" },
        { link: "/navbar", text: "Navbar" },
        { link: "/link", text: "Link" },
        { link: "/breadcrumbs", text: "Breadcrumbs" },
        { link: "/drawer", text: "Drawer" },
        { link: "/speeddial", text: "SpeedDial" },
        { link: "/bottomnavigation", text: "Bottom Navigation" },
        { link: "/avatar", text: "Avatar" },
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
