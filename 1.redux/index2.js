const {createStore} = require('redux');

const initialState = {
  user: null,
  posts: [],
};

const reducer = (prevState, action) => {
  switch(action.type) {
    case 'LOG_IN': {
      return {
        ...prevState,
        user: action.data,
      };
    }
    case 'LOG_OUT': {
      return {
        ...prevState,
        user: null,
      }
    }
    case 'ADD_POST': {
      return {
        ...prevState,
        posts: [...prevState.posts, action.data]
      }
    }
    default: {
      return {
        ...prevState,
      }
    }
  }
};

const store = createStore(reducer, initialState);

const logIn = (data) => {
  return {
    type: 'LOG_IN',
    data,
  }
};

const logOut = () => {
  return{
    type: 'LOG_OUT',
  }
};

const addPost = (data) => {
  return{
    type: 'ADD_POST',
    data,
  }
};

console.log(store.getState());
store.dispatch(logIn({id: 1, name: 'Woogler', admin: true}));
console.log(store.getState());
store.dispatch(addPost({userId: 1, id: 1, content:'Hello, Redux'}));
console.log(store.getState());
store.dispatch(addPost({userId: 1, id: 2, content:'Second Redux'}));
console.log(store.getState());
store.dispatch(logOut());
console.log(store.getState());
