import React from 'react';
import {TouchableOpacity, Text} from 'react-native' ;
import {createAppContainer} from 'react-navigation' ;
import {createBottomTabNavigator} from 'react-navigation-tabs';
import SearchScreen from './Screens/SearchScreen';
import TransactionScreen from './Screens/TransactionScreen';

class App extends React.Component{
  render(){
    return(
        <AppContainer/>
    )
  }
}

const tabNavigator = createBottomTabNavigator({
  Transaction:{screen: TransactionScreen},
  Search:{screen: SearchScreen}
})

const AppContainer  = createAppContainer(tabNavigator);



export default App;