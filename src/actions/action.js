const displayData = (data) => {
    data = JSON.parse(data)
    return {
        type: 'DATA_RECEIVED',
        data
    }
}

export const getData = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/data/', {
          mode: 'cors',
          method: 'GET'
        })
          .then(r => r.text())
          .then(data => dispatch(displayData(data)))
    }
}
