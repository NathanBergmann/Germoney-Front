'use client'

import { Input, InputGroup, InputGroupText } from "reactstrap";
import styles from "./moneyInput.module.scss";
import { useState } from "react";

interface MoneyInputProps {
    onValueChange: (value: number) => void;
}

const MoneyInput = ({onValueChange}: MoneyInputProps) => {
    const [value, setValue] = useState('');
    const [isValid, setIsValid] = useState(true);

    const handleChange = (value: { target: { value: any; }; }) => {
        const newValue = value.target.value;
        setValue(newValue);
        validateValue(newValue);
        onValueChange(newValue);
    };

    const validateValue = (value: string) => {
        const parsedValue = parseFloat(value);
        if (!isNaN(parsedValue) && parsedValue > 0) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    };

    return (
        <div className={styles.inputContainer}>
            <InputGroup className={styles.inputValue}>
                <InputGroupText>
                    $
                </InputGroupText>
                <Input
                    type="number"
                    value={value}
                    placeholder="Insira o valor de Germoneys"
                    onChange={handleChange}
                    className={isValid ? '' : styles.invalid}
                />
            </InputGroup>
            {!isValid && <div className={styles.error}>Por favor, insira um valor válido.</div>}
        </div>
    );
};

export default MoneyInput;