function TodoFilters({ filter, onFilterChange, activeCount }) {
    const filters = [
        { value: 'all', label: 'Все' },
        { value: 'active', label: 'Активные' },
        { value: 'completed', label: 'Выполненные' },
    ];

    return (
        <div className="filters">
            <span>Осталось: <b>{activeCount}</b></span>
            <div className="filter-btns">
                {filters.map(f => (
                    <button
                        key={f.value}
                        className={`filter-btn ${filter === f.value ? 'active' : ''}`}
                        onClick={() => onFilterChange(f.value)}
                    >
                        {f.label}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default TodoFilters;
