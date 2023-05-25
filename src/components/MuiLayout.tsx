import { Box, Divider, Stack } from "@mui/material";

export const MuiLayout = () => {
    return (
        <Stack
            sx={{ border: "1px solid" }}
            direction={"row"}
            spacing={2}
            divider={<Divider orientation="vertical" flexItem />}
        >
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
                width="200px"
                bgcolor={"success.light"}
                p={2}
            ></Box>
        </Stack>
    );
};
