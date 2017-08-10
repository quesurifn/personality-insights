import axios from 'axios'

export function setFaceBookToken(token) {
    return {
        type: "FBTOKEN",
        payload: token
    }
}

export function setTwitterUsername(username) {
    return {
        type: "TWITTERNAME",
        payload: username
    }
}
export function refresh() {
    return function(dispatch) {
        dispatch(type: "LOADING") 
        axios.get('https://personality-insight.herokuapp.com/refresh')
        .then((response) => {
            dispatch({type: "REFRESH_COMPLETE", payload: response}) 
        })
        .catch((err) => {
            dispatch({type: "REFRESH_ERROR", payload: err})
        }) 
    }
}