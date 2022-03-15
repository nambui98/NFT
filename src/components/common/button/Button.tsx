import React from 'react'
import { ButtonWapper } from './Button.style'
type Props = {}

export default function Button({ }: Props) {
    return (
        <ButtonWapper>
            <div className="btn__img"></div>
        </ButtonWapper>
    )
}