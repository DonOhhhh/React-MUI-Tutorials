import { CopyAll, Edit, Print, Share } from "@mui/icons-material";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";

export const MuiSpeedDial = () => {
    return (
        <SpeedDial
            ariaLabel="Navigation speed dial"
            sx={{ position: "absolute", bottom: 16, right: 16 }}
            icon={<SpeedDialIcon openIcon={<Edit />} />}
        >
            <SpeedDialAction
                icon={<CopyAll />}
                tooltipTitle="Copy"
                tooltipOpen
            ></SpeedDialAction>
            <SpeedDialAction
                icon={<Print />}
                tooltipTitle="Print"
            ></SpeedDialAction>
            <SpeedDialAction
                icon={<Share />}
                tooltipTitle="Share"
            ></SpeedDialAction>
        </SpeedDial>
    );
};
