import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as App from './App';

const store = createStore(App.reducer, App.initialState);

render(
	<Provider store={store}>
		<App.Container/>
	</Provider>
	,
	document.getElementById('app')
);