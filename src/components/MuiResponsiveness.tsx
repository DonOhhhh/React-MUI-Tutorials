import { Box, styled } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
    height: "250px",
    width: "250px",
    backgroundColor: theme.palette.neutral?.darker,
}));

export const MuiResponsiveness = () => {
    return (
        <>
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
                    bgcolor: "secondary.dark",
                    transition: "width 0.5s ease-out",
                }}
            />
            <StyledBox />
        </>
    );
};
