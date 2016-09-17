import Immutable from 'immutable';

const IndegoData = (state, action) => {
    state = Immutable.fromJS(state) || Immutable.Map()
    switch (action.type) {
        case 'REQUEST_INITIAL_DATA':
            var newState = state
                .set('loading', false);

            state = state.merge(state, newState)

            return state.toJS()

        case 'DATA_RECEIVED':
            var data = Immutable.fromJS(action.data)
            var newState = state
                .set('data', data);

            state = state.merge(state, newState)

            return state.toJS()

    default:
        return state.toJS()
    }
}

export default IndegoData
