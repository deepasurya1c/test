/*==========================================================================================*/
// Welcome - Display options to select
//         - Login with FSP
//         - Guest Login
/*==========================================================================================*/

import React, { Component } from 'react';
import { Dimensions, Image, View, Text, StatusBar, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native'

const { width, height } = Dimensions.get('window');
console.disableYellowBox = true


export default class Welcome extends Component {
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
                <View style = {{justifyContent:'center', width: width, height: height}}>
                    <TouchableOpacity style = {styles.buttonStyle} onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style = {styles.buttonText}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.buttonStyle} onPress={() => this.props.navigation.navigate('Signup')}>
                        <Text style = {styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                
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