import React, {ChangeEvent} from 'react';
import s from './CounterSetting.module.css'

type SettingsType ={
    maxValue:number
    startValue:number
    changeMax:(e: ChangeEvent<HTMLInputElement>)=>void
    changeStart:(e: ChangeEvent<HTMLInputElement>)=>void
    set:()=>void
}


export const CounterSetting = (props:SettingsType) => {
    return (
        <div className={s.block} >
            <div className={s.frame}>
                <label className={s.labelMax}>Max Value:
                    <input type={"number"} className={s.maxValue}
                           value={props.maxValue} onChange={props.changeMax}

                    /></label>
                <label className={s.labelStart}>Start Value:
                    <input type={"number"} className={s.startValue}
                           value={props.startValue} onChange={props.changeStart}

                    /></label>
            </div>
            <div className={s.buttonFrame}>
                <div className={s.buttonSet} onClick={props.set}>SET</div>
            </div>
        </div>
    );
};
