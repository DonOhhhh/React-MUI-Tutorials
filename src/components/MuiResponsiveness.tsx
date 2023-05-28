import { Box } from "@mui/material";

export const MuiResponsiveness = () => {
    return (
        <Box
            sx={{
                height: 300,
                width: {
                    xs: 100, // 0px above
                    sm: 200, // 600px above
                    md: 300, // 900px above
                    lg: 400, // 1200px above
                    xl: 500, // 1536px above
                },
                bgcolor: "primary.main",
                transition: "width 0.5s ease-out",
            }}
        ></Box>
    );
};
