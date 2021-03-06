
const ADD_PRODUCT = 'cart/ADD_PRODUCT';
const REMOVE_PRODUCT = 'cart/REMOVE_PRODUCT';
const CHECKOUT = 'cart/CHECKOUT';

const initialState = {
    productsInCart: [],
    runningTotal: 0
};

export default function cart(state = initialState, action) {
    switch (action.type){
        case ADD_PRODUCT:
            return {
                productsInCart: [...state.productsInCart, action.product],
                runningTotal: state.runningTotal + action.product.price
            };
        case REMOVE_PRODUCT:
            return {productsInCart: state.productsInCart.filter(val => product_id !== action.product_id),
                    runningTotal: state.runningTotal - action.product.price
            };
        case CHECKOUT:
            return initialState;
        default:
            return state;
    }
}

export function addProduct(product) {
    return {type: ADD_PRODUCT, product};
}
export function removeProduct(product) {
    return {type: REMOVE_PRODUCT, product};
}
export function checkout() {
    return {type: CHECKOUT};
}