var React = require('react');
var Router = require('react-router');



var ControlRoom = React.createClass({

	render: function(){

		return(
			/*We can only render a single div. So we need to group everything inside of this main-container one*/
			<div >


				<h2>ControlRoom</h2>


			</div>
		)
	}
});

// Export the module back to the route
module.exports = ControlRoom;