1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    .map .filter .find
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Actions are objects that contain a type and data. Actions are sent to the reducers to process the data into the store. The store is all of your apps state and should be the 'single source of truth' for all state data.
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state is the highest level state for the whole application, component state is help on the compononet itself. A change handler could be a good use for component state, but, especially with Redux, we want to keep most of our data in the Application state.
1.  What is middleware?
    Middleware is a function that intercepts actions that have been dispatched before the reach the reducers.
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    Redux-thunk is middleware. It lets us call action creators that return a function instead of an action object.
1.  Which `react-redux` method links up our `components` with our `redux store`?
    connect
