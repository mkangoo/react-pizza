import Categories from '../components/Categories'
import PizzaBlock from '../components/PizzaBlock'
import { Skeleton } from '../components/PizzaBlock/Skeleton'
import Sort from '../components/Sort'

import axios from 'axios'
import { useEffect, useState } from 'react'

const API_BASE = process.env.REACT_APP_API_BASE_URL

function Home() {
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
        window.scrollTo(0, 0)
        fetchData()
    }, [])
    return (
        <div className="container">
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? [...Array(6)].map((_, index) => <Skeleton key={index} />)
                    : items.map(obj => <PizzaBlock key={obj.id} {...obj} />)}
            </div>
        </div>
    )
}

export default Home
