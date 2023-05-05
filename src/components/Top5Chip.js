import * as React from "react";
import '../css/profile.css'
import Button from '@mui/material/Button';
import doneAll1 from "../assets/doneAll1-profile.svg";


/* eslint-disable jsx-a11y/alt-text */
function Top5Chip({ alt=false, name }) {
    if (alt)
        return (
            <Button className="chip-css-alt">
                <span className="chip-text-alt">{name}</span>
            </Button>
        );
    return (
        <Button className="chip-css" startIcon={<img src={doneAll1} />}>
            <span className="chip-text">{name}</span>
        </Button>
    );
};
export default Top5Chip;

