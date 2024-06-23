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
    const [categoryId, setCategoryId] = useState(0)
    const [sortType, setSortType] = useState({ name: 'популярности', sortProperty: 'rating' })

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true)

            const sortBy = sortType.sortProperty.replace('-', '')
            const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
            const category = categoryId > 0 ? `category=${categoryId}` : ''

            try {
                const response = await axios.get(`${API_BASE}/items?${category}&sortBy=${sortBy}&order=${order}`)
                setItems(response.data)
            } catch (err) {
                alert('Ошибка при загрузке данных')
                console.error(err)
            } finally {
                setIsLoading(false)
            }
        }
        window.scrollTo(0, 0)
        fetchData()
    }, [categoryId, sortType])
    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={id => setCategoryId(id)} />
                <Sort value={sortType} onChangeSort={id => setSortType(id)} />
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
