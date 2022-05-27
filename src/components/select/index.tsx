import './index.scss'
import React, {useEffect, useState} from 'react'

type Item = {
    binding_period_in_months: string | number,
    mortgage_rate: string | number
}

type OptionValue = number | Array<Item>;

type Props<Value extends OptionValue> = {
    value: number;
    updateSelectValue: (arg: number) => void;
    options: readonly Value[];
}

export const Select: React.FC<Props<OptionValue>> = ({value, options, updateSelectValue}) => {
    // eslint-disable-next-line
    const [selectValue, setInputValue] = useState<number>(0)
    useEffect(() => {
        setInputValue(value)
    }, [value])


    const renderOptions = () => {
        if(options.length > 1) {
            return (options ?? []).map(({mortgage_rate, binding_period_in_months}: any, index) => (
                <option key={index} value={mortgage_rate} aria-label={binding_period_in_months + ' månader med' + mortgage_rate + '% ränta'}>
                    {binding_period_in_months} mån - {mortgage_rate}%
                </option>
            ))
        }else {
            return <option>Error</option>
        }
    }

    return <select
        className={'sbab-select'}
        value={value}
        onChange={(event: React.FormEvent<HTMLSelectElement>) =>
            updateSelectValue(parseFloat(event.currentTarget.value)) }
    >
        {renderOptions()}
    </select>
}
