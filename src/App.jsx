import Home from './pages/Home'
import Cart from './pages/Cart'
import Header from './components/Header'
import NotFound from './pages/NotFound'

import { Routes, Route } from 'react-router-dom'
import { createContext, useState } from 'react'

import './scss/app.scss'

export const SearchContext = createContext('')

function App() {
    const [searchValue, setSearchValue] = useState('')
    return (
        <div className="wrapper">
            <SearchContext.Provider value={{ searchValue, setSearchValue }}>
                <Header />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/cart" element={<Cart />}></Route>
                        <Route path="*" element={<NotFound />}></Route>
                    </Routes>
                </div>
            </SearchContext.Provider>
        </div>
    )
}

export default App
