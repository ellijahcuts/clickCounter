import React from 'react';

import s from './CounterValue.module.css';

type CounterValuesType = {
    value: number
    maxValue: number
    Plus: () => void
    Reset: () => void
    Changes: boolean

}


export const CounterValue = (props: CounterValuesType) => {
    return (
        <div className={s.block}>
            {props.Changes
                ? <div className={s.counterEnter}>Enter value and press 'set'</div>
                : <div className={props.value === props.maxValue ? s.counterError : s.counter}>{props.value}</div>
            }
            <div className={s.border}>
                <button disabled={props.value === props.maxValue} className={s.buttonINC}
                        onClick={props.Plus}>INCREASE
                </button>
                <div className={s.buttonRES} onClick={props.Reset}>RESET</div>
            </div>
        </div>
    );
};
