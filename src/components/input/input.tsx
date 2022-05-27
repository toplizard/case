import React, {useEffect, useState} from 'react';
import './index.scss'

interface InputTypes {
    value: number
    updateValue: (arg: number) => void
}

//The input type and pattern could of course have been dynamic as well

export const Input: React.FC<InputTypes> = ({value,updateValue}) => {
    const [inputValue, setInputValue] = useState<number>(0)
    useEffect(() => {
        setInputValue(value)
    }, [value])

    return <input type={'number'} pattern={'/^\\d+$/'} onBlur={(e: React.ChangeEvent<HTMLInputElement>) => updateValue(parseFloat(e.target.value))} className={'sbab-input'}/>
}
