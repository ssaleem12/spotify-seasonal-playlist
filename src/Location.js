import React from 'react';
import'./location.css';

class Location extends React.Component{

	constructor(props){
		super(props);

		this.state = {lat: null, errorMessage:"Sorry! I can't locate you!"};
	}



	render(){
		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				this.setState({lat: position.coords.latitude});
			},
			error => {
				this.setState({errorMessage: error.message})
			}
		);
		function locationClick(){
			console.log("Letssss goo!")
		}

		return(
			<div className="locate">
				<button onClick={locationClick} className="button">Locate me</button>
				<div> Lat:{this.state.lat}</div>
				<div> Error:{this.state.errorMessage}</div>
			</div>
		);
	}
}

export default Location;