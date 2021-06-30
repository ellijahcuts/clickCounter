import React from 'react';
import s from './Button.module.css';
type ButtonPropsType = {
    title: string
    onClick: () => void
    disabled: boolean
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button
            className={s.button}
            disabled={props.disabled}
            onClick={() => props.onClick()}

        >{props.title}</button>
    );
};


