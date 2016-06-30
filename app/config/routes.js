// Inclue the React library
var React = require('react');

// Include the Router
var Router = require('react-router');
var Route = Router.Route;


//  Include the IndexRoute (catch-all route)
var IndexRoute	= Router.IndexRoute;

// Reference the high-level components
var Main = require('../components/Main');
var Login= require('../components/Login');
var ControlRoom = require('../components/ControlRoom');

// Export the Routes
module.exports = (

	/*High level component is the Main component*/
	<Route path='/' component={Main}>

		{/* If user selects Search or Saved show the appropriate component*/}
		
		<Route path='Login' component={Login} />
		<Route path='ControlRoom' component={ControlRoom} />

		{/*If user selects any other path... we get the Home Route*/}
		<IndexRoute component={Login} />

	</Route>


);