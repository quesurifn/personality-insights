import axios from 'axios'
import { push } from 'react-router-redux';
import store from '../stores/store'

export function setFaceBookToken(token) {
    return {
        type: "FBTOKEN",
        payload: token
    }
}
export function itIsLoading(bool) {
    return {
        type:'LOADING',
        payload: bool
    }
}

export function setTwitterUsername(username) {
    return {
        type: "TWITTERNAME",
        payload: username
    }
}

export function ajaxResponse(payload) {
    return {
        type: 'AJAXRESPONSE',
        payload: payload
    }
}


export function startTheMachine() {
    console.log('start two')

    return(dispatch, getState) => {
        dispatch(itIsLoading(true))

        axios.post('http://localhost:3001/client', {
            twitter: store.getState().reducer.twittername,
            token: store.getState().reducer.fbkey.accessToken,
            userid: store.getState().reducer.fbkey.id
        })
        .then( r => {
            dispatch(ajaxResponse(r))
        })
        .catch( e => {
            console.log(e)
        })
        .then(() => {
            dispatch(push('/results'))
        })


        dispatch(itIsLoading(false))
    }

        

}

