import React from 'react';
import reducer from './reducer';
import {initialState} from './model';

import * as Suggest from '../Suggest';

const Container = (props) => (
	<Suggest.Container/>
);

export {Container, reducer, initialState};