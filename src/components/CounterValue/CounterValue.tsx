import React from 'react';

import s from './CounterValue.module.css';

type CounterValuesType = {
    value: number
    Plus: () => void
    Reset: () => void

}


export const CounterValue = (props: CounterValuesType) => {
    return (
        <div className={s.block}>
            <Counter value={props.value}/>
            <div className={s.border}>
                <button disabled={props.value === 5} className={s.buttonINC} onClick={props.Plus}>INCREASE</button>
                <div className={s.buttonRES} onClick={props.Reset}>RESET</div>
            </div>
        </div>
    );
};
type CounterPropsType = {
    value: number
}

export function Counter(props: CounterPropsType) {
    const displayStyle = props.value === 5 ? {color: "gold"} : {}
    return (
        <div className={s.counter} style={displayStyle}>{props.value}</div>
    )
}
