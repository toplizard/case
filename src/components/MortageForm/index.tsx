import React, {useEffect, useState} from 'react'
import {Input} from "../input/input";
import {Label} from "../label/label";
import {getOptions} from "../rates";
import {Select} from "../select";
import {Paragraph} from "../paragraph";
import Compare from "../../foundations/images/svg/Compare.svg";
import {Heading} from "../heading";
import {Image} from "../image";
import './index.scss'

export const MortageForm = () => {
    const componentClass = 'sbab-form'
    /**
     * I probably don't need 3 different states, but instead one state with objects
     */
    const [inputValue, setInputValue] = useState<number>(0);
    const updateValue = (value: number):void => {
        setInputValue(value)
    }

    /**
     * I cleaner solution on the initial state could be to to get the actual value of a pre selected option
     */
    const [selectValue, setSelectValue] = useState<number>(2.92);
    const updateSelectValue = (value: number):void => {
        setSelectValue(value)
    }

    const [options, setOptions] = useState([]);
    useEffect(() => {
        (async () => {
            await getOptions().then(data => setOptions(data.mortgage_rates));
        })();

    }, []);

    /**
     * I guess a cleaner solution could be to do the calculation in forms change event instead
     * @constructor
     */
    const RenderSum = () => {
        const interest = selectValue / 100
        const tot = Math.floor((inputValue * interest) / 12)

        if(selectValue && inputValue) {
            return <div className={componentClass + '__results'} aria-live="polite" aria-atomic="true" aria-label={'Din räntekostnad med' + selectValue + '% ränta blir' + tot + 'kronor i månaden'}>
                <Paragraph size={'lg'}>Din räntekostnad - {selectValue}%</Paragraph>
                <div className={componentClass + '__results--total'}>
                    <Image src={Compare} alt=" " />
                    <Paragraph size={'lg'} >{tot} kr / mån</Paragraph>
                </div>
            </div>
        } else {
            return null
        }
    }

    return <form className={componentClass} onChange={(e: React.SyntheticEvent) => { e.preventDefault()}}>
        <Heading size={'md'} tag={'h2'}>Få fram din räntekostnad direkt </Heading>
        <div className={componentClass + '__main'}>
            <Label name={'Önskat lånebelopp'}><Input value={200000} updateValue={updateValue}/></Label>
            <Label name={'Välj bindningstid'}><Select options={options} value={selectValue} updateSelectValue={updateSelectValue} /></Label>
        </div>
        <RenderSum />
    </form>

}
