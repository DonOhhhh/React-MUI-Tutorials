import { Send } from "@mui/icons-material";
import { Stack, Button, IconButton, ButtonGroup } from "@mui/material";

export const MuiButton = () => {
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction={"row"}>
                <Button
                    variant="text"
                    href="https://google.com"
                    target="_blank"
                >
                    Text
                </Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
            <Stack spacing={2} direction={"row"}>
                <Button variant="contained" color="primary">
                    Primary
                </Button>
                <Button variant="contained" color="secondary">
                    Secondary
                </Button>
                <Button variant="contained" color="warning">
                    Warning
                </Button>
                <Button variant="contained" color="info">
                    Info
                </Button>
                <Button variant="contained" color="success">
                    Success
                </Button>
            </Stack>
            <Stack display={"block"} spacing={2} direction={"row"}>
                <Button variant="contained" size="small">
                    Small
                </Button>
                <Button variant="contained" size="medium">
                    medium
                </Button>
                <Button variant="contained" size="large">
                    large
                </Button>
            </Stack>
            <Stack spacing={2} direction={"row"}>
                <Button
                    variant="contained"
                    startIcon={<Send />}
                    disableRipple
                    onClick={() => alert("Clicked!")}
                >
                    Send
                </Button>
                <Button variant="contained" endIcon={<Send />} disableElevation>
                    Send
                </Button>
                <IconButton aria-label="send" color="success" size="small">
                    <Send />
                </IconButton>
            </Stack>
            <Stack direction={"row"}>
                <ButtonGroup
                    variant="contained"
                    orientation="vertical"
                    size="small"
                    color="secondary"
                    aria-label="alignment button group"
                >
                    {/* onClick prop must be specified on the individual button. */}
                    <Button onClick={() => alert("Left Clicked!")}>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>
        </Stack>
    );
};
