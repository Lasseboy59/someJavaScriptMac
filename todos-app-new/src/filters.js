
const filters = {
    searchText: '',
    completed: false
}

const getFilters = () => filters

const setFilters = (updates) => {
    if(typeof updates.searchText === 'string') {
        filters.searchText = updates.searchText
    }
    if(typeof updates.completed === false){
        filters.completed = false
    } else if (updates.completed !== false){
        filters.completed = true
    }
}

export { getFilters, setFilters }
