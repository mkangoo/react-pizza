import axios from 'axios'
import { useState, useEffect } from 'react'
import ContentLoader from 'react-content-loader'

import Categories from './components/Categories'
import Header from './components/Header'
import PizzaBlock from './components/PizzaBlock'
import Sort from './components/Sort'

import './scss/app.scss'

function App() {
    const API_BASE = process.env.REACT_APP_API_BASE_URL

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${API_BASE}/items`)
                setItems(response.data)
                setIsLoading(false)
            } catch (err) {
                alert('Ошибка при загрузке данных')
                console.error(err)
            }
        }
        fetchData()
    }, [])

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories />
                        <Sort />
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        {isLoading ? (
                            <>
                                <ContentLoader
                                    speed={2}
                                    width={400}
                                    height={460}
                                    viewBox="0 0 400 460"
                                    backgroundColor="#f3f3f3"
                                    foregroundColor="#ecebeb"
                                >
                                    <rect x="0" y="0" rx="150" ry="150" width="260" height="260" />
                                    <rect x="0" y="270" rx="5" ry="5" width="280" height="24" />
                                    <rect x="0" y="313" rx="10" ry="10" width="280" height="86" />
                                    <rect x="0" y="428" rx="10" ry="10" width="90" height="27" />
                                    <rect x="125" y="418" rx="25" ry="25" width="155" height="45" />
                                </ContentLoader>
                                <ContentLoader
                                    speed={2}
                                    width={400}
                                    height={460}
                                    viewBox="0 0 400 460"
                                    backgroundColor="#f3f3f3"
                                    foregroundColor="#ecebeb"
                                >
                                    <rect x="0" y="0" rx="150" ry="150" width="260" height="260" />
                                    <rect x="0" y="270" rx="5" ry="5" width="280" height="24" />
                                    <rect x="0" y="313" rx="10" ry="10" width="280" height="86" />
                                    <rect x="0" y="428" rx="10" ry="10" width="90" height="27" />
                                    <rect x="125" y="418" rx="25" ry="25" width="155" height="45" />
                                </ContentLoader>{' '}
                                <ContentLoader
                                    speed={2}
                                    width={400}
                                    height={460}
                                    viewBox="0 0 400 460"
                                    backgroundColor="#f3f3f3"
                                    foregroundColor="#ecebeb"
                                >
                                    <rect x="0" y="0" rx="150" ry="150" width="260" height="260" />
                                    <rect x="0" y="270" rx="5" ry="5" width="280" height="24" />
                                    <rect x="0" y="313" rx="10" ry="10" width="280" height="86" />
                                    <rect x="0" y="428" rx="10" ry="10" width="90" height="27" />
                                    <rect x="125" y="418" rx="25" ry="25" width="155" height="45" />
                                </ContentLoader>
                            </>
                        ) : (
                            items.map(obj => <PizzaBlock key={obj.id} {...obj} />)
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
