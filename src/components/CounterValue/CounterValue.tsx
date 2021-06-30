import React from 'react';

import s from './CounterValue.module.css';
import {Button} from "../Button/Button";

type CounterValuesType = {
    value: number
    maxValue: number
    Plus: () => void
    Reset: () => void
    Changes: boolean
    startValue:number

}


export const CounterValue = (props: CounterValuesType) => {
    return (
        <div className={s.block}>
            {props.Changes
                ? <div className={s.counterEnter}>Enter value and press 'set'</div>
                : <div className={props.value === props.maxValue ? s.counterError : s.counter}>{props.value}</div>
            }
            <div className={s.border}>
                <Button title={"INCREASE"} onClick={props.Plus} disabled={props.value === props.maxValue}/>
                <Button title={"RESET"} onClick={props.Reset} disabled={props.value === props.startValue}/>
            </div>
        </div>
    );
};
