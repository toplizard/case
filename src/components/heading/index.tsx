import React from 'react'
import './index.scss'

//These could be in an "types folder" to enhance reuse and cleaner code
type headingTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type headingSizes = 'lg' | 'md'

interface CompProps {
    size: headingSizes,
    tag: headingTags
}

// Component renders the heading tag dynamically
export const Heading: React.FunctionComponent<CompProps & React.HTMLAttributes<HTMLOrSVGElement>> = ({
    tag: Wrapper = "h1",
    size,
    children,
    ...rest
}) => {
    const componentClass = 'sbab-heading';

    return <Wrapper {...rest} className={`${componentClass} ${componentClass}--${size}`}>{children}</Wrapper>;
};
