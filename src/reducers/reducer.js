export function reducer(
    state = {

            fbkey: '',
            twittername: '',
            loading: false,
            refresh_complete: {},
            refresh_error: {},
    
    }, action) {


    switch (action.type) {
        case "FBTOKEN": {
            return {
                ...state,
                fbkey: action.payload
            }
        }
        case "TWITTERNAME" : {
            return {
                ...state,
                twittername: action.payload
            }
        }
        case "LOADING" : {
            return {
                ...state,
                loading: true
            }
        }
        case "REFRESH_COMPLETE" : {
            return {
                ...state, 
                refresh_complete: action.payload
            }
        }
        case "REFRESH_ERROR" : {
            return {
                ...state, 
                refresh_error: action.payload
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}