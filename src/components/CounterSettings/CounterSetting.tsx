import React, {ChangeEvent} from 'react';
import s from './CounterSetting.module.css'
import {Button} from "../Button/Button";

type SettingsType = {
    maxValue: number
    startValue: number
    changeMax: (e: ChangeEvent<HTMLInputElement>) => void
    changeStart: (e: ChangeEvent<HTMLInputElement>) => void
    Set: () => void
    setReset: () => void
}


export const CounterSetting = (props: SettingsType) => {
    return (
        <div className={s.block}>
            <div className={s.frame}>
                <label className={s.labelMax}>Max Value:
                    <input type={"number"}
                           className={props.maxValue < 0 || props.maxValue === props.startValue ? s.maxValueError : s.maxValue}
                           value={props.maxValue} onChange={props.changeMax}

                    /></label>
                <label className={s.labelStart}>Start Value:
                    <input type={"number"}
                           className={props.startValue < 0 || props.startValue === props.maxValue ? s.startValueError : s.startValue}
                           value={props.startValue} onChange={props.changeStart}
                    /></label>
            </div>
            <div className={s.buttonFrame}>
                <Button title={"SET"} onClick={props.Set}
                        disabled={
                            props.startValue < 0
                            || props.maxValue <= 0
                            || props.startValue === props.maxValue
                            || props.startValue > props.maxValue}/>
                <Button title={"RESET"} onClick={props.setReset}
                        disabled={props.startValue === 0 || props.maxValue === 0}/>

            </div>
        </div>
    );
};
