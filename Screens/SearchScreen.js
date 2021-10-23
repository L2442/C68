import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native' ;

export default class SearchScreen extends React.Component{
  render(){
    return(
        <View style = {styles.viewStyle}> 
        <Text>Search screen</Text> 
        </View>
    )
  }
}



const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

