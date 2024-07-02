'use client'

import React from 'react';
import {Button} from "reactstrap";
import styles from "./appButton.module.scss"

interface AppButtonProps {
    label: string
    onClick: () => void
}

const AppButton = ({label, onClick}: AppButtonProps) => {
    return (
        <>
            <Button className={styles.button} onClick={onClick}>
                {label}
            </Button>
        </>
    )
}

export default AppButton