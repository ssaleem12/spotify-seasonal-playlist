import React from 'react';
import ReactDOM from 'react-dom';
import'./location.css';

const Location = () => {

	function locationClick(){
		console.log("Letssss goo!")
	}

	return(
		<div className="locate">
			<button className="button" onClick={locationClick}>Locate me</button>
		</div>
	);
};

export default Location;