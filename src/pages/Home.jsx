import Categories from '../components/Categories'
import PizzaBlock from '../components/PizzaBlock'
import { Skeleton } from '../components/PizzaBlock/Skeleton'
import Sort from '../components/Sort'
import Pagination from '../components/Pagination'

import axios from 'axios'

import { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../App'

const API_BASE = process.env.REACT_APP_API_BASE_URL

function Home() {
    const { searchValue } = useContext(SearchContext)

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [categoryId, setCategoryId] = useState(0)
    const [sortType, setSortType] = useState({ name: 'популярности', sortProperty: 'rating' })

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true)

            const sortBy = sortType.sortProperty.replace('-', '')
            const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
            const category = categoryId > 0 ? `category=${categoryId}` : ''

            try {
                const response = await axios.get(
                    `${API_BASE}/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}`,
                )
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
    }, [categoryId, sortType, searchValue, currentPage])

    const skeletons = [...Array(4)].map((_, index) => <Skeleton key={index} />)
    const pizzas = items
        .filter(obj => obj.title.toLowerCase().includes(searchValue.toLowerCase()))
        .map(obj => <PizzaBlock key={obj.id} {...obj} />)

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={id => setCategoryId(id)} />
                <Sort value={sortType} onChangeSort={id => setSortType(id)} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">{isLoading ? skeletons : pizzas}</div>
            <Pagination onChangePage={number => setCurrentPage(number)} />
        </div>
    )
}

export default Home
