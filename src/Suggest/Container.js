import React from 'react';
import {connect} from 'react-redux';

import Input from '../Input';

export const Component = ({input, onFocus}) => (
	<div>
		<Input value={input.value} onFocus={onFocus}/>
	</div>
);

const mapStateToProps = (state) => ({
	input: {
		value: state.input.value
	}
});

const mapDispatchToProps = (dispatch) => ({
	onFocus: () => dispatch({type: 'INPUT_FOCUS'})
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Component);