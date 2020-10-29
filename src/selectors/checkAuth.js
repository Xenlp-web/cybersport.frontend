// export const checkAuth = (store) => {
//     const tokin = store.getState().addTokenReducer;
//     console.log(tokin);
//     if (tokin === null || !!tokin) {
//       return false;
//     } else {
//       return true;
//     }
// };

export const checkAuth = () => !!localStorage.getItem('Authorization');

// export
