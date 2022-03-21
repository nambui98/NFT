import React from 'react'
import { FooterWrapper } from './Footer.style'
import logo from '../../../assets/icons/logo.svg'
import { Link } from 'react-router-dom'
import Social1 from '../../../assets/icons/social1.svg?component'
import Social2 from '../../../assets/icons/social2.svg?component'
import Social3 from '../../../assets/icons/social3.svg?component'
import Social4 from '../../../assets/icons/social4.svg?component'

type Props = {}

export default function Footer({ }: Props) {
    return (
        <FooterWrapper>
            <div className="column">
                <Link to="#" className='link'><img className='img' width={18} src={logo} alt="" /><span className='color-white text-3 fontThree'>OceanNFT</span></Link>
                <p className='text'>Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis volutpat. Cursus sed massa non nisi, placerat.</p>
                <div className="listsocial">
                    <button className="btn-icon">
                        <Social1 />
                    </button>
                    <button className="btn-icon">
                        <Social2 />
                    </button>
                    <button className="btn-icon">
                        <Social3 />
                    </button>
                    <button className="btn-icon">
                        <Social4 />
                    </button>
                </div>
            </div>
            <div className="column">
                <h4 className="text-3">Market place</h4>
                <ul>
                    <li>
                        Overview
                    </li>
                    <li>
                        Features <span className='fontFour color-secondary'>NEW</span>
                    </li>
                    <li>
                        Tutorials
                    </li>
                    <li>
                        Pricing
                    </li>
                    <li>
                        Releases
                    </li>
                </ul>
            </div>
            <div className="column">
                <h4 className="text-3">Collectibles</h4>
                <ul>
                    <li>
                        About
                    </li>
                    <li>
                        Press
                    </li>
                    <li>
                        Careers
                    </li>
                    <li>
                        Contact
                    </li>
                    <li>
                        Partners
                    </li>
                </ul>
            </div>
            <div className="column">
                <h4 className="text-3">Support</h4>
                <ul>
                    <li>
                        Help Center
                    </li>
                    <li>
                        Safety Center
                    </li>
                    <li>
                        Legal
                    </li>
                    <li>
                        Privacy policy
                    </li>
                    <li>
                        Status
                    </li>
                </ul>
            </div>
            <div className="column">
                <h4 className="text-3">Legal</h4>
                <ul>
                    <li>
                        Cookies Policy
                    </li>
                    <li>
                        Privacy Policy
                    </li>
                    <li>
                        Terms of Service
                    </li>
                    <li>
                        Law Enforcement
                    </li>
                    <li>
                        Status
                    </li>
                </ul>
            </div>
            <div className="column">
                <h4 className="text-3">Follow us</h4>
                <ul>
                    <li>
                        Facebook
                    </li>
                    <li>
                        Twitter
                    </li>
                    <li>
                        Dribbble
                    </li>
                    <li>
                        Instagram
                    </li>
                    <li>
                        LinkedIn
                    </li>

                </ul>
            </div>
            <div className="copyright">
                <p>© 2020 Landify UI Kit. All rights reserved</p>
                <ul>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Sitemap</li>
                </ul>
            </div>
        </FooterWrapper>
    )
}