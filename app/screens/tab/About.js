/*==========================================================================================*/
// Welcome - Display options to select
//         - Login with FSP
//         - Guest Login
/*==========================================================================================*/

import React, { Component } from 'react';
import { Dimensions, Image, View, Text, StatusBar, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native'
import User from '../../user/User';

const { width, height } = Dimensions.get('window');
console.disableYellowBox = true


export default class About extends Component {
    static navigationOptions = {
        header: null    
    };

    constructor(props) {
        super(props);      
    }

   componentDidMount() {    
        StatusBar.setBackgroundColor('#111E6C', true)        
    }
    
    render() {
        return (  
            <SafeAreaView>  
                <View style = {{justifyContent:'center', width: width, height: height, backgroundColor:"#acb"}}>
        <Text style = {{textAlign:'center', fontSize: 18, fontWeight:'bold'}}>Id: <Text style = {{fontWeight:'normal'}}>{User.id}</Text></Text>
        <Text style = {{textAlign:'center', fontSize: 18, fontWeight:'bold'}}>Email: <Text style = {{fontWeight:'normal'}}>{User.email}</Text></Text>

                </View>   
            </SafeAreaView>  
        )
    };
}

const styles = StyleSheet.create({
    buttonStyle:{
        backgroundColor:'#111E6C', width: width-60, height: 44, justifyContent:'center', alignSelf:'center', margin:10, borderRadius: 5
    },
    buttonText:{
        color:'white', fontSize: 18, textAlign: 'center', fontWeight: 'bold'
    }
    
})