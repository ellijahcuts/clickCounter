import React from 'react';
import s from './CounterSetting.module.css'



export const CounterSetting = () => {
    return (
        <div className={s.block} >
            <div className={s.frame}>
                <label className={s.labelMax}>Max Value:<input type={"number"} min={'0'} className={s.maxValue}/></label>
                <label className={s.labelStart}>Start Value:<input type={"number"} className={s.startValue}/></label>
            </div>
            <div className={s.buttonFrame}>
                <div className={s.buttonSet}>SET</div>
            </div>
        </div>
    );
};
