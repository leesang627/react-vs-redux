const {createStore} = require('redux');
const reducer = require('./reducers');
const {logIn, logOut} = require('./actions/user');
const {addPost} = require('./actions/post');

const initialState = {
  user: {
    isLoggingIn: true,
    data: null,
  },
  posts: [],
};

const store = createStore(reducer, initialState);

store.subscribe(() => {
  console.log('state changed');
});

console.log(store.getState());
store.dispatch(logIn({id: 1, name: 'Woogler', admin: true}));
console.log(store.getState());
store.dispatch(addPost({userId: 1, id: 1, content:'Hello, Redux'}));
console.log(store.getState());
store.dispatch(addPost({userId: 1, id: 2, content:'Second Redux'}));
console.log(store.getState());
store.dispatch(logOut());
console.log(store.getState());
