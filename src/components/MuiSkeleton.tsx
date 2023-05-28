import { Avatar, Box, Skeleton, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export const MuiSkeleton = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);
    return (
        <>
            <Stack spacing={1} width="250px">
                <Skeleton animation="wave" />
                <Skeleton
                    variant="circular"
                    width={40}
                    height={40}
                    animation="wave"
                />
                <Skeleton
                    variant="rectangular"
                    width={250}
                    height={125}
                    animation="wave"
                />
                <Skeleton
                    variant="rounded"
                    width={250}
                    height={125}
                    animation="wave"
                />
            </Stack>
            <Box height={100} />
            <Box sx={{ width: "250px" }}>
                {loading ? (
                    <Skeleton
                        variant="rectangular"
                        width={256}
                        height={144}
                        animation="wave"
                    />
                ) : (
                    <img
                        src="https://picsum.photos/256/144"
                        alt="Skeleton"
                        width={256}
                        height={144}
                    />
                )}
                <Stack
                    direction={"row"}
                    spacing={1}
                    sx={{ width: "100%", mt: "12px" }}
                >
                    {loading ? (
                        <Skeleton
                            variant="circular"
                            width={40}
                            height={40}
                            animation="wave"
                        />
                    ) : (
                        <Avatar>V</Avatar>
                    )}
                    <Stack sx={{ width: "80%" }}>
                        {loading ? (
                            <>
                                <Typography variant="body1">
                                    <Skeleton
                                        variant="text"
                                        width="100px"
                                        animation="wave"
                                    />
                                </Typography>
                                <Typography variant="body2">
                                    <Skeleton
                                        variant="text"
                                        width="100px"
                                        animation="wave"
                                    />
                                </Typography>
                            </>
                        ) : (
                            <>
                                <Typography variant="body1">
                                    React MUI Tutorial
                                </Typography>
                            </>
                        )}
                    </Stack>
                </Stack>
            </Box>
        </>
    );
};
