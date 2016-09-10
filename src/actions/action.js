const requestData = () => {
    return {type: 'REQUEST_INITIAL_DATA'}
}

export const getData = () => {
    return (dispatch) => {
        dispatch(requestData())
        //Code Lives Here to dispatch
    }
}
