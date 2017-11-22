import React, { Component } from 'react'
import { Navigator }        from 'react-native'

import Login 				from './Login'
import SignUp               from './SignUp'
import Mood                 from './Mood'
import Feeling              from './Feeling'
import Dashboard            from './Dashboard'

export default class AppNavigator extends Component {

	_renderScene = ( route , navigator ) => {
		
		switch ( route.name ) {
			
			case 'Login':
				return <Login 		{ ...this.props } 	navigator={ navigator }/>;
            
            case 'SignUp':
                return <SignUp 		{ ...this.props } 	navigator={ navigator }/>;

            case 'Mood':
                return <Mood 		{ ...this.props } 	navigator={ navigator }/>;
            
            case 'Feeling':
                return <Feeling	    { ...this.props } 	navigator={ navigator }/>;
            
            case 'Dashboard':
                return <Dashboard    { ...this.props } 	navigator={ navigator }/>;

    }
  }

	render() {
		return (
			<Navigator			
				//configureScene={ (route) => ({ ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight }) }
				initialRoute={ { name: 'Login' } }
				renderScene={ (route , navigator ) => this._renderScene( route , navigator )}
				style={ { flex: 1 } }
			/>		
		)
	}
}