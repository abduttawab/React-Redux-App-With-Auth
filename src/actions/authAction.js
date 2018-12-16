


import {SIGN_IN} from './types'



export const signIn = (postData) => dispatch =>{

    fetch("http://localhost:54800/sign-in", {

    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(response => response.json())
    .then(data =>  dispatch({
        type:SIGN_IN,
        payload:data
    }));

}