# Redux Notes

## Patterns

1. Create a Store
2. Declare initial state and reducer
3. Define action and action creators
4. Subscribe to the store
5. Dispatch actions to update the store
6. Unsubscribe to the changes

## Async Actions

- You need axios to fetch from an end point
- You need to redux-thunk to define async action creators
- redux-thunk is middleware, and its the standard way to using redux thunk

## Redux and Redux Tool Kit

- One of the biggest concerns is that it requires a lot of boilerplate code
- For each state transition we need to:
  - Define an action type constant
  - Define an action object
  - Define an action creator
  - Then we use that action type in a reduce using switch statements
- We also need to install a lot of packages to work with redux
  - Redux-thunk for async actions
  - Immer to concise reducer code
  - Redux-devtools to see a visual of each state transition before and after
- This is why Redux Toolkit was created, to reduce a lot of boilerplate and make it easier for the developer

## Redux Tool Kit Process:

- The recommendation is to group together the reducer logic and actions for a single feature in single file.
- The file should contain slice as a suffix
- The entire application state i split into slices and managed individually
- 
