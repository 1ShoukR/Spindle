const initialState = {
    user: null
}


export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload,
                isAuth: true,
            }
        default:
            return state
    }
}
