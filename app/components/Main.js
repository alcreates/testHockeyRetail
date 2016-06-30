// Include React and React-Router dependencies
var React = require('react');
var Router = require('react-router')
import {browserHistory} from 'react-router'
// Create the Main component
var Main = React.createClass({

	render: function(){

		return(
			/*We can only render a single div. So we need to group everything inside of this main-container one*/
			<div className="main-container">


				<div className="container">
					{/*Navbar*/}
					


					{/*Here we will load the sub components (Search or Saved */}
					{/*These sub-components are getting passed as this.props.children*/}
					{this.props.children}

					<footer>
						<hr />
						<p className="pull-right"><i className="fa fa-github" aria-hidden="true"></i> Proudly built using React.js</p>
					</footer>
				</div>



			</div>
		)
	}
});

// Export the module back to the route
module.exports = Main;