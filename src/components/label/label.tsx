import React  from 'react';
import './index.scss'

type LabelProps = {
    name: string,
    children: React.ReactNode
}

export const Label: React.FunctionComponent<LabelProps> = ({name, children}) => (
    <label className={'sbab-label'}>
        <span>{name}</span>
        {children}
    </label>
)
