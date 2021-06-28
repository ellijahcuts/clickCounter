import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './App.module.css';
import {CounterValue} from "./components/CounterValue/CounterValue";
import {CounterSetting} from "./components/CounterSettings/CounterSetting";


export function App() {

    const [valueCounter, setValueCounter] = useState<number>(0)
    const [maxValueCounter, setMaxValueCounter] = useState<number>(0)
    const [maxValueSetting, setMaxValueSetting] = useState<number>(0)
    const [startValueSetting, setStartValueSetting] = useState<number>(0)
    const [changes, setChanges] = useState<boolean>(false)


    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValueCounter(newValue)
        }
    }, [])
    useEffect(() => {
        let maxValueString = localStorage.getItem('maxValueSetting')
        if (maxValueString) {
            let newMaxValue = JSON.parse(maxValueString)
            setMaxValueSetting(newMaxValue)
        }
    }, [])
    useEffect(() => {
        let startValueString = localStorage.getItem('startValueSetting')
        if (startValueString) {
            let newStartValue = JSON.parse(startValueString)
            setStartValueSetting(newStartValue)
        }
    }, [])


    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(valueCounter))
    }, [valueCounter])
    useEffect(() => {
        localStorage.setItem('maxValueSetting', JSON.stringify(maxValueSetting))
    }, [maxValueSetting])
    useEffect(() => {
        localStorage.setItem('startValueSetting', JSON.stringify(startValueSetting))
    }, [startValueSetting])


    let Plus = () => {
        if (valueCounter < maxValueCounter)
            setValueCounter(valueCounter + 1)
    }
    let Reset = () => {
        let getStartValue = localStorage.getItem("startValueSetting")
        if (getStartValue) {
            setValueCounter(JSON.parse(getStartValue))
        }
    }
    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValueSetting(JSON.parse(e.currentTarget.value));
        setChanges(true)
    };
    const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValueSetting(JSON.parse(e.currentTarget.value));
        setChanges(true)
    };
    let Set = () => {
        if (startValueSetting >= 0 && maxValueSetting > 0) {
            setMaxValueCounter(maxValueSetting)
            setValueCounter(startValueSetting)
            setChanges(false)
        }
    }

    return (
        <div className={s.Core}>
            <CounterValue
                value={valueCounter}
                maxValue={maxValueCounter}
                Plus={Plus}
                Reset={Reset}
                Changes={changes}
            />
            <CounterSetting
                maxValue={maxValueSetting}
                startValue={startValueSetting}
                changeMax={changeMaxValue}
                changeStart={changeStartValue}
                set={Set}
            />
        </div>
    )

}

export default App;
