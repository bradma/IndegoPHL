import Immutable from 'immutable';

const IndegoData = (state, action) => {
    state = Immutable.fromJS(state) || Immutable.Map()
    switch (action.type) {
        case 'REQUEST_INITIAL_DATA':
            //var newState = state.set()
            console.log('In Request Initial')
            console.log(state.toJS())
            return state.toJS()
    default:
        return state.toJS()
    }
}

export default IndegoData
