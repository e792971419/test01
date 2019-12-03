import { getUserList } from "../../../api/api"

const GET_USER_INFO = "GET_USER_INFO"

const defaultState = {
    userList: []
}

export default (state=defaultState,action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case GET_USER_INFO:
            newState.userList = [...newState.userList,...action.data]
            return newState
        default :
            return state
    }

}

const getUserInfo = (data) => {
    console.log('getUserInfo')
    return {
        type: GET_USER_INFO,
        data
    }
}

export const getUserInfoAsync = () => {
    console.log("getAsync")
    return (dispatch) => {
        getUserList().then(res => {
            console.log(res.data.userList)
            dispatch(getUserInfo(res.data.userList))
        })
    }
}