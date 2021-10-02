export const initialState = {
    cart: [],
    amount: 0,
    user: null,
    category: "All"
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item],
                amount: state.amount + parseInt(action.item.price.split('.')[0].replace(/,/g, ''))
            }

        case 'REMOVE_FROM_CART':
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );

            let newCart = [...state.cart];
            let newAmount = state.amount;

            if (index >= 0) {
                newAmount -= parseInt(newCart[index].price.split('.')[0].replace(/,/g, ''));
                newCart.splice(index, 1);
            }

            return {
                ...state,
                cart: newCart,
                amount: newAmount
            }

        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        case 'EMPTY_CART':
            return {
                ...state,
                cart: [],
                amount: 0
            }

        case 'SET_CATEGORY':
            return {
                ...state,
                category: action.category
            }
        default:
            return state
    }
}

export default reducer;