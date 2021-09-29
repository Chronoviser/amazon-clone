export const initialState = {
    cart: [],
    amount: 0
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item],
                amount: state.amount + parseInt(action.item.price.split('.')[0].replace(/,/g, ''))
            }

        default:
            return state
    }
}

export default reducer;