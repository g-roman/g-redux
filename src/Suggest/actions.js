export const FOCUS = 'SUGGEST.FOCUS';
export const VALUE_UPDATE = 'SUGGEST.VALUE.UPDATE';

export const onFocus = () => ({
	type: FOCUS
});

export const onValueUpdate = (value) => ({
	type: VALUE_UPDATE,
	payload: value
});

