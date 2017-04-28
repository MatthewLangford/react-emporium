import {combineReducers} from 'redux';
import user from './ducks/userDuck';
import cart from './ducks/cartDuck';

export default combineReducers({
    cart,user
})
