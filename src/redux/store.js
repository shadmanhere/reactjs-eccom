import{ createStore } from 'redux';

function basicStore(state = [], action) {
    switch (action.type) {
        case 'STORE_BASIC':
            return state.concat([action.text]);
        default:
            return state;
    }
}
const store = createStore(basicStore, ['Use Redux']);

store.dispatch({
    type: 'STORE_BASIC',
    text: 'Basic store setup'
})

console.log(store.getState());

export default store;

