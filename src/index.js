import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import indegoStore from './stores/indegoStore';
import App from './components/app.jsx';

render(
    <Provider store={indegoStore}>
        <App />
    </Provider>,
    document.getElementById('data')
)
