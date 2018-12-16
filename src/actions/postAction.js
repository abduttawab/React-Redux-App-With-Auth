import {FETCH_POSTS,NEW_POST} from './types';

export const fetchPosts = () => dispatch =>{

        console.log('Fetchingggggggggggg');
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(posts => dispatch({
            type:FETCH_POSTS,
            payload:posts
        }))
  
}

export const addPosts = (postData) => dispatch =>{
    console.log('addPosts called');
    fetch("https://jsonplaceholder.typicode.com/posts", {

    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(response => response.json())
    .then(data =>  dispatch({
        type:NEW_POST,
        payload:data
    }));

}