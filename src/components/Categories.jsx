function Categories({ value, onChangeCategory }) {
    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
    return (
        <div className="categories">
            <ul>
                {categories.map((categoryName, index) => (
                    <li key={categoryName} onClick={() => onChangeCategory(index)} className={value === index ? 'active' : ''}>
                        {categoryName}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Categories
