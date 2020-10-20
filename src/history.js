import { createBrowserHistory, createHashHistory } from 'history';

// const history = createBrowserHistory();
const history = createHashHistory({
  hashType: 'slash',
  getUserConfirmation: (message, callback) => callback(window.confirm(message))
})
export default history;