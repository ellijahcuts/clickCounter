import React, {useState} from 'react';
import  s from './App.module.css';
import {CounterValue} from "./components/CounterValue/CounterValue";
import {CounterSetting} from "./components/CounterSettings/CounterSetting";



export function App() {

    const [value, setValue] = useState<number>(0)
    let Plus = () => {
        if (value < 5)
            setValue(value + 1)
    }
    let Reset = () => {
        setValue(0)
    }

    return (
        <div className={s.Core}>
            <CounterValue
                value={value}
                Plus={Plus}
                Reset={Reset}
            />
            <CounterSetting/>
        </div>
    )

}

export default App;
