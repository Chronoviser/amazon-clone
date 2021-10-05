import { db } from '../../firebase';

export const initialState = {
    cart: [],
    amount: 0,
    user: null,
    category: "All",
    userInfo: null
};

const reducer = (state, action) => {

    function updateInfoInDb(cartData, amountData) {
        if (state.user !== null) {
            console.log(cartData, " : ", amountData);
            db
                .collection('users')
                .doc(state.user?.uid)
                .collection('info')
                .doc('info')
                .set({
                    userInfo: state.userInfo,
                    cart: cartData,
                    amount: amountData
                });
        }
    }

    switch (action.type) {
        case 'ADD_TO_CART':
            let newCart = [...state.cart, action.item];
            let newAmount = state.amount + parseInt(action.item.price.split('.')[0].replace(/,/g, ''));
            //
            updateInfoInDb(newCart, newAmount);
            //
            return {
                ...state,
                cart: newCart,
                amount: state.amount + parseInt(action.item.price.split('.')[0].replace(/,/g, ''))
            }

        case 'REMOVE_FROM_CART':
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );

            newCart = [...state.cart];
            newAmount = state.amount;

            if (index >= 0) {
                newAmount -= parseInt(newCart[index].price.split('.')[0].replace(/,/g, ''));
                newCart.splice(index, 1);
            }
            //
            updateInfoInDb(newCart, newAmount);
            //
            return {
                ...state,
                cart: newCart,
                amount: newAmount
            }

        case 'SET_CART':
            return {
                ...state,
                cart: action.cart,
                amount: action.amount,
                userInfo: action.userInfo
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