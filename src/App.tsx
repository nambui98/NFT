import { useState } from 'react'
import logo from './logo.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import { ThemeProvider } from 'styled-components'
import { Home } from './pages/Home'
import Mainlayout from './components/layout/Mainlayout'
import Market from './pages/Market'

const theme = {
  primaryColor: 'salmon',
  fontFamily: 'Bebas',
};
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mainlayout />}>
          <Route index element={<Home />} />
          <Route path='market' element={<Market />} />
          {/* <Route path='service' element={<Service />} />
          <Route path='contact' element={<Contact />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
