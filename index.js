const initialState = 0;

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const SUM = 'SUM';
const OPEN = 'OPEN';
const CLOSE = 'CLOSE';

const increment = () =>{
    return {type: INCREMENT};
}

const decrement = () =>{
    return {type: DECREMENT};
}

const sum = (payload) =>{
    return {type: SUM, payload};
}

const open = () =>{
    return {type: close};
}

const close = () =>{
    return {type: CLOSE};
}

const counter = (state = initialState, {type, payload}) =>{
    switch(type){
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        case SUM:
            return state + payload;
        default: 
            return state;
    }
}

const modal = (state = false, {type, payload}) =>{
    switch(type){
        case 'OPEN':
            return true;
        case 'CLOSE':
            return false;
        default:
            return state
    }
}

const reducer = Redux.combineReducers({ counter, modal })
const store = Redux.createStore(reducer);

function render() {
    const { counter } = store.getState();
    const count = document.querySelector('.count')
    count.innerText = counter
};
render();

store.subscribe(() => render);

const unsubscribe = store.subscribe(render);
store.dispatch(increment(10));

unsubscribe();

const incrementButton = document.querySelector('.increment');
const decrementButton = document.querySelector('.decrement');

incrementButton.addEventListener('click', () => store.dispatch(increment(10)));
decrementButton.addEventListener('click', () => store.dispatch(decrement(10)));