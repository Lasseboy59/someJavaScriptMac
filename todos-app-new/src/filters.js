
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

// const setFilters = ({ searchText, completed }) => {
//     if(typeof searchText === 'string') {
//         filters.searchText = searchText
//     }
//     if(typeof completed === 'boolean') {
//         filters.completed = completed
//     }
// }

export { getFilters, setFilters }
