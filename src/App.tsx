import React from 'react';
import { Heading } from './components/heading'
import  {Paragraph} from './components/paragraph';
import {MortageForm} from "./components/MortageForm";
import './index.scss'

import Percentage from './foundations/images/svg/Percentage.svg'
import {Image} from "./components/image";

/**
 * It would have been cleaner if I also created a page folder to keep "all" page specific code
 */

export default function App() {
    const componentClass = 'sbab-app'

    return (
        <main className={componentClass}>
            <section className={componentClass +'__section'}>
                <div className={componentClass + '__section-content'}>
                    <Heading size={'lg'} tag={'h1'}>Din räntekostnad</Heading>
                    <Paragraph size={'lg'}>Här ser du både våra aktuella boräntor och din räntekostnad per månad</Paragraph>
                </div>
                <Image src={Percentage} alt=" "  variant={'hide-mobile'}/>
            </section>
            <MortageForm />
        </main>
    );
}

