import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "../Styles/navigation.module.css";
import Slider from "@mui/material/Slider";
import { useDispatch } from "react-redux";
import SearchAction from "../store/actions/SearchAction";
import FilterActions from "../store/actions/FilterAction";

type Props = {};

function valuetext(value: number) {
    return `Rs ${value}`;
}

const Navigation: React.FC<Props> = ({}) => {
    const dispatch = useDispatch();

    const [priceRange, setPriceRange] = useState<number | number[]>([0, 50000]);

    const priceHandleChange = async (
        event: any,
        newValue: number | number[]
    ) => {
        await setPriceRange(newValue);
        console.log(priceRange);

        dispatch(FilterActions.addPrice(newValue));
    };

    return (
        <>
            <div className={styles.navContainer}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Price</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div>
                            <Typography id="range-slider" gutterBottom>
                                Price range
                            </Typography>
                            <Slider
                                getAriaLabel={() => "range-slider"}
                                max={50000}
                                value={priceRange}
                                onChangeCommitted={priceHandleChange}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                            />
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
        </>
    );
};

export default Navigation;
