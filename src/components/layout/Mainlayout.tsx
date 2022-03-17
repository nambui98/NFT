import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../common/footer/Footer'
import Header from '../common/header/Header'
import { Bg, Bg2, MainlayoutWrapper } from './Mainlayout.style'

type Props = {}

export default function Mainlayout({ }: Props) {
    return (
        <MainlayoutWrapper>
            <Bg />
            <Bg2 />
            <Header />
            <div className="main-container">
                <div className="content">
                    <Outlet />
                </div>
            </div>
            {/* <Footer /> */}
        </MainlayoutWrapper>
    )
}