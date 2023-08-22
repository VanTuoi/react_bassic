const initState = {
    users: [
        { id: 1, name: 'Tuoi' },
        { id: 2, name: 'Van Tuoi' },
        { id: 3, name: 'Van Tuoi 2' },
        { id: 4, name: 'Van Tuoi 3' },
    ],
    posts: []
}
const rootReducer = (state = initState, action) => {

    switch (action.type) {
        case 'DELETE_USER':
            console.log('>> run into delete user', action)
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id);
            return {
                ...state, users
            };
            break;
        case 'CREATE_USER':
            console.log('>> run into create');
            let id = Math.floor(Math.random() * 10000)
            let user = { id: id, name: `random - ${id}` }
            return {
                ...state, users: [...state.users, user]
            }
        default:
            return state;
    }
    return state;
}

export default rootReducer;