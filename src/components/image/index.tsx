import React from "react";
import './index.scss'

type ImageTypes = 'hide-mobile' | null

// alt text has a default of empty string, that makes the image "decorative" and wont be noticed by SR

type ImageProps = {
    src: string,
    alt: string | ' ',
    variant?: ImageTypes
}

export const Image: React.FunctionComponent<ImageProps> = ({src, alt, variant}) => {
    const componentClass = 'sbab-image'

    return <img src={src} alt={alt} className={`${componentClass} ${componentClass}--${variant}`}/>
}
