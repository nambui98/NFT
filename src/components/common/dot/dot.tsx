import React from 'react'
import { DotWrapper } from './dot.style'

type Props = {
    bg?: string,
    top?: string,
    left?: string,
    size?: string,
}

export default function
    (props: Props) {
    return (
        <DotWrapper {...props}>

        </DotWrapper>
    )
}