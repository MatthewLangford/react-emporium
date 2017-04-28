
const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';
const initialState ={
    username: '',
    email: '',
    loggedIn: false
};

export default function user(state = initialState, action) {
    if(action.type === LOGIN){
        return Object.assign({}, action.user, {loggedIn: true});
    }
    else if(action.type === LOGOUT){
        return initialState;
    }else{
        return state;
    }
}

export function login (user) {
    return {type: LOGIN, user};
}

export function logout() {
    return {type: LOGOUT};
}