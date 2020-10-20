// import axios from 'axios';

export const userLoginFetch = (userLogin, userPassword) => {
    return dispatch => {
      // return axios.post('http://web70.xenforce.ru/api/login', { email: userLogin, password: userPassword })
      return fetch("http://web70.xenforce.ru/api/login", {
        method: "POST",
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
          email: userLogin,
          password: userPassword
        })
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.message) {
            console.log(data)
          } else {
            localStorage.setItem("token", data.jwt)
            dispatch(loginUser(data.user))
          }
        })
    }
  };