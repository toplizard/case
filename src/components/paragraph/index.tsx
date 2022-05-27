import React  from 'react';
import './index.scss'

type sizesTypes = 'lg' | 'md'
type ParagraphProps = {
    size: sizesTypes,
    children: React.ReactNode
}

export const Paragraph: React.FC<ParagraphProps> = ({size, children}) => {
    const componentClass = 'sbab-paragraph';

    return <p className={`${componentClass} ${componentClass}--${size}`}>{children}</p>
}
