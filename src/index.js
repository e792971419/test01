import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import App from './App'
import 'antd/dist/antd.css'
import './assets/css/global.css'

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
)
    , document.getElementById('root'))