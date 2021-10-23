import React from 'react';
import {TouchableOpacity, Text, View,StyleSheet} from 'react-native' ;

class TransactionScreen extends React.Component{
    render(){
        return(
            <View style = {styles.viewStyle}> 
            <Text>Transaction screen</Text> 
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


export default TransactionScreen;