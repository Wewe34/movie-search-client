import { Box, Drawer } from "@mui/material";
import React, { Dispatch, SetStateAction, useState } from "react";


interface IHamburgerDrawerProps {
    isOpen: boolean,
    closeDrawer: Dispatch<SetStateAction<boolean>>
}

function HamburgerDrawer(props: IHamburgerDrawerProps) {

    const {isOpen, closeDrawer} = props;

    return (
        <>
            <Drawer
                anchor="left"
                open={isOpen}
                onClose={() => closeDrawer(false)}
                >
                Hello
            </Drawer>
        </>
    )
}

export default HamburgerDrawer;