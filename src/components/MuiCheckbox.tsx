import { Bookmark, BookmarkBorder } from "@mui/icons-material";
import {
    Box,
    FormControlLabel,
    Checkbox,
    FormControl,
    FormLabel,
    FormGroup,
    FormHelperText,
} from "@mui/material";
import React, { useState } from "react";

export const MuiCheckbox = () => {
    const [acceptInc, setAcceptInc] = useState(false);
    const [skills, setSkills] = useState<string[]>([]);
    console.log({ acceptInc });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptInc(event.target.checked);
    };
    console.log({ skills });
    const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(event.target.value);
        if (index === -1) {
            setSkills([...skills, event.target.value]);
        } else {
            setSkills(skills.filter((skill) => skill !== event.target.value));
        }
    };
    return (
        <Box>
            <Box>
                <FormControlLabel
                    label="I accept terms and conditions"
                    control={
                        <Checkbox
                            size="small"
                            color="secondary"
                            checked={acceptInc}
                            onChange={handleChange}
                        />
                    }
                />
            </Box>
            <Box>
                <Checkbox
                    icon={<BookmarkBorder />}
                    checkedIcon={<Bookmark />}
                    checked={acceptInc}
                    onChange={handleChange}
                />
            </Box>
            <Box>
                <FormControl error>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup row>
                        <FormControlLabel
                            label="HTML"
                            control={
                                <Checkbox
                                    value="html"
                                    checked={skills.includes("html")}
                                    onChange={handleSkillChange}
                                />
                            }
                        />
                        <FormControlLabel
                            label="CSS"
                            control={
                                <Checkbox
                                    value="css"
                                    checked={skills.includes("css")}
                                    onChange={handleSkillChange}
                                />
                            }
                        />
                        <FormControlLabel
                            label="Javascript"
                            control={
                                <Checkbox
                                    value="javascript"
                                    checked={skills.includes("javascript")}
                                    onChange={handleSkillChange}
                                />
                            }
                        />
                    </FormGroup>
                    <FormHelperText>Invalid Selection</FormHelperText>
                </FormControl>
            </Box>
        </Box>
    );
};
