export function reducer(
    state={

            fbkey: '',
            twittername: ''
    
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
        default: {
            return {
                ...state
            }
        }
    }
}