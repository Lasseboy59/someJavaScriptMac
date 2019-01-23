
const filters = {
    searchText: '',
    completed: false
}

const getFilters = () => filters

const setFilters = (updates) => {
    if(typeof updates.searchText === 'string') {
        filters.searchText = updates.searchText
    }

    if(updates.completed === false){
        filters.completed = false
    } else {
        filters.completed = true
    }
}

export { getFilters, setFilters }
