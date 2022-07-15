import React from 'react'

const ClickMeButton = ({onClick}) => {
	return (
		<div className="button" onClick={onClick}>Open Modal</div>
	)
}

export default ClickMeButton;
