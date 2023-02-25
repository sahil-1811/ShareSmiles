import * as api from '../api'
 

// Action Creators

export const getPosts = () => async (dispatch)=>{
    try {
        const {data} = api.fetchPosts()
        dispatch({type: 'FETCH_ALL', payload:data})
    } catch (error) {
     console.log(error.message)   
    }
}