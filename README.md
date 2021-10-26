# Caratflare public facing marketing site

## Getting started

To install the required dependencies simply run
`yarn`

To start the application

`yarn dev`

To run deploy command, use Bash script (git bash in windows, or download bash for windows)

`yarn deploy`

## How to get loading states for actions

dispatch(withloader('SETUSER',()=>{
getMeApiAction(data, cb)
}))

withLoader = (actionName,action) = dispatch =>{
dispatch({type:requestAction(actionName")})
dispatch(action())
dispatch({type:successAction(actionName)})
}

```jsx
// in actions.js

export const getMeApiAction = (data, cb) => async (dispatch) => {
  dispatch({ type: requestAction('getMeApiAction') });

  // do something with SET_CURRENT_USER

  dispatch({ type: successAction(SET_CURRENT_USER) });
};
```

```jsx
// in your component.jsx

const loadingSelector = createLoadingSelector([SET_CURRENT_USER]);

export default connect((state) => ({
  meLoading: loadingSelector(state),
}))(user);
```

## Setting up SSH

`
git remote set-url origin https://github.com/manjotsk/cflare-app.git
git remote set-url origin git@github.com:manjotsk/cflare-app.git

\$ git remote -v
origin git@github.com:manjotsk/cflare-app.git (fetch)
origin git@github.com:manjotsk/cflare-app.git (push)
`
