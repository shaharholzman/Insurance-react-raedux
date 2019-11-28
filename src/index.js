import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,combineReducers} from 'redux'
import {accounting,claimHistory,claimHistoryPayment,policies,policiesPayment} from './reducers'
import {Provider} from 'react-redux'

const allReducers = combineReducers({
    bagOfMoney : accounting,
    ListOfClaimHistory :claimHistory,
    ListOPolicies : policies,

})

const store = createStore(allReducers)

ReactDOM.render(<Provider store={store}> <App /> </Provider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
