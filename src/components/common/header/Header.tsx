import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderWrapper } from './Header.style'
import { Cart } from 'akar-icons';
import logo from '../../../assets/icons/logo.svg'
import User from '../../../assets/icons/user.svg?component'

type Props = {}

export default function Header({ }: Props) {
    return (
        <HeaderWrapper>
            <ul className="nav">
                <li className="nav__item">
                    <Link to="#" className='nav__link fontThree'><img className='nav__img' width={18} src={logo} alt="" />Ocean<span className='color-white'>NFT</span></Link>
                </li>
                <li className="nav__item">
                    <Link to="#" className='nav__link fontThree'>Market</Link>
                </li>
                <li className="nav__item">
                    <Link to="#" className='nav__link fontThree'>Features</Link>
                </li>
                <li className="nav__item">
                    <Link to="#" className='nav__link fontThree'>Community</Link>
                </li>
                <li className="nav__item">
                    <Link to="#" className='nav__link'><Cart /></Link>
                </li>
                <li className="nav__item">
                    <Link to="#" className='nav__link'><User /></Link>
                </li>
            </ul>
        </HeaderWrapper>
    )
}