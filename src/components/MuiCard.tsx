import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import React from "react";

export const MuiCard = () => {
    return (
        <Box width="300px">
            <Card>
                <CardMedia
                    component={"img"}
                    height={140}
                    image="https://picsum.photos/200"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component={"div"}>
                        React
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        React is a JavaScript library for building user
                        interfaces. React can be used as a base in the
                        development of single-page or mobile applications.
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "right" }}>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn more</Button>
                </CardActions>
            </Card>
        </Box>
    );
};
