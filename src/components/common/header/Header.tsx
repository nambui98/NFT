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
                {/* <div className='nav--mobile'> */}
                <input type="checkbox" name="check" id="check" />
                <label htmlFor="check" className="humberger__button" >
                    <span className="humberger__icon">&nbsp;</span>
                </label>
                {/* </div> */}
                <ul className='nav--mobile'>
                    <li className="nav--mobile__item">
                        <Link to="#" className='nav--mobile__link btn-primary fontThree'>Market</Link>
                    </li>
                    <li className="nav--mobile__item">
                        <Link to="#" className='nav--mobile__link btn-primary fontThree'>Features</Link>
                    </li>
                    <li className="nav--mobile__item">
                        <Link to="#" className='nav--mobile__link btn-primary fontThree'>Community</Link>
                    </li>
                    <div className="group-btn">


                        <li className="nav--mobile__item">
                            <Link to="#" className='btn-text'><Cart /></Link>
                        </li>
                        <li className="nav--mobile__item">
                            <Link to="#" className='btn-text'><User /></Link>
                        </li>
                    </div>
                </ul>
            </ul>

        </HeaderWrapper>
    )
}