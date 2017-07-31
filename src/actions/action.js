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