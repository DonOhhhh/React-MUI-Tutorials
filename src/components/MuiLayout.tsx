import { Box } from "@mui/material";

export const MuiLayout = () => {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: "primary.main",
                    color: "white",
                    width: "200px",
                    height: "100px",
                    padding: "16px",
                    "&:hover": {
                        backgroundColor: "primary.light",
                        transition: "background-color 0.5s ease",
                    },
                    transition: "background-color 0.5s ease",
                }}
            >
                Codevolution
            </Box>
            <Box
                display="flex"
                height="100px"
                width="100px"
                bgcolor={"success.light"}
                p={2}
                m={2}
            ></Box>
        </>
    );
};
