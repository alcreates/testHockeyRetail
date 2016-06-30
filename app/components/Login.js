// Include React and React-Router dependencies
var React = require('react');
var Router = require('react-router');
var axios = require('axios');
var ControlRoom = require('./ControlRoom');

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import Chip from 'material-ui/Chip';

var styles = {
  errorStyle: {
    color: orange500,
    
  },
  underlineStyle: {
    borderColor: orange500,
    
  },
  floatingLabelStyle: {
    color: orange500,
    left:12,
    
  },
  floatingLabelFocusStyle: {
    color: blue500,
    
  },
  button:{
  	margin:12,
  },
  chip: {
    margin: 4,
  },

};


// Create the Main component
var Login = React.createClass({

	/*Here we set the initial state variables (this allows us to propagate the variables for maniuplation by the children components*/
	/*Also note the "resuls" state. This will be where we hold the data from our results*/
	getInitialState: function(){
		return { 
			userName: "",
			passWord: "",
			authenticated: false,
			attempt: 0,
			open: true,
		}
	},
	submit: function(){
		var user = this.refs.userName.getValue();
		var password = this.refs.passWord.getValue();
		this.setState({userName: user, passWord: password ,attempt:1 });
		console.log("attempts" + this.state.attempt)
    this.authenticate();
	},
 
  
  authenticate: function(){
    
    

    var loginInfo = {user: this.state.userName, password: this.state.passWord};
    console.log(" loginInfo " + loginInfo.password);
    return axios.post('/authenticate', loginInfo)
      .then(function(results){
        console.log(results.data)
        
          this.setState({
          authenticated: results.data,
          
        });
       

        console.log("results data " + results.data);
        
      }.bind(this));

  },


	
	handleToggle: function(){
		console.log("current state " + this.state.open)
		this.setState({open: !this.state.open});
	},

	
	render: function(){
		console.log("Render Results", this.state.results)
		console.log("current state " + this.state.open)
		console.log("password " + this.state.passWord)
		console.log("user name " + this.state.userName)
		
    if(this.state.attempt > 0 && this.state.authenticated == false){
    return (
 			 <MuiThemeProvider>
          <div>
              <Drawer open={this.state.open}>
                        <div>
                        
                        <p>wrong password</p>
                        <TextField
                      	ref="userName"
                        floatingLabelText="User Name"
                        floatingLabelStyle={styles.floatingLabelStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        />
                        <TextField
                        	ref ="passWord"
                          floatingLabelText="Password"
                          floatingLabelStyle={styles.floatingLabelStyle}
                          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        />
                        </div>
                     <div>
                      <Chip style={styles.chip}>Wrong User Name or Password </Chip>
            	         <RaisedButton label="Sign in" primary={true} style={styles.button} onClick={this.submit} />
                     </div>
             </Drawer>
         </div>
       </MuiThemeProvider>
    );
	}
  else if (this.state.attempt == 0 && this.state.authenticated == false){
    return (
       <MuiThemeProvider>
          <div>
              <Drawer open={this.state.open}>
                        <div>
                        
                        <TextField
                        ref="userName"
                        floatingLabelText="User Name"
                        floatingLabelStyle={styles.floatingLabelStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        />
                        <TextField
                          ref ="passWord"
                          floatingLabelText="Password"
                          floatingLabelStyle={styles.floatingLabelStyle}
                          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        />
                        </div>
                     <div>
                       <RaisedButton label="Sign in" primary={true} style={styles.button} onClick={this.submit} />
                     </div>
             </Drawer>
         </div>
       </MuiThemeProvider>
    );
  }
  else if(this.state.authenticated == true){
    return(
      <div>
      <ControlRoom/>
      </div>
      )
  }


  }



});

// Export the module back to the route
module.exports = Login;