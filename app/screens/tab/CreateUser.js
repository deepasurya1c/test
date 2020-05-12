/*==========================================================================================*/
// Welcome - Display options to select
//         - Login with FSP
//         - Guest Login
/*==========================================================================================*/

import React, { Component } from 'react';
import { Dimensions, Image, View, Text, StatusBar, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native'
import { FormInput } from '../../components/FormInput';
import Loader from '../../components/Loader'

const { width, height } = Dimensions.get('window');
console.disableYellowBox = true


export default class CreateUser extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            name:'',
            job: ''
        }
    }

    componentDidMount() {
        StatusBar.setBackgroundColor('#111E6C', true)
    }

    handleChange = (evt, value) => {
        this.setState(() => ({ [value]: evt }), () => {
        });
    }

    onPressCreate= () => {
        const { name, job } = this.state
        if (name.length == 0) {
            alert("Please enter name")
        } else if (job.length == 0) {
            alert("Please enter job")
        } else {
            // alert("Call api")
            this.setState({ isLoading: true }, () =>{
                let data = {
                    method: 'POST',
                    credentials: 'same-origin',
                    mode: 'same-origin',
                    body: JSON.stringify({
                        name: name,
                        job: job
                    }),
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
                }
                console.log("data", data)
                return fetch('https://reqres.in/api/users', data)
                    .then(response => response.json())  // promise
                    .then(json => {
                        this.setState({ isLoading: false })
                        console.log("response", json)
                    })
                    .catch(error => {
                        this.setState({ isLoading: false })
                        console.log("error", error)
                    });
        
         })
        }
    }






    render() {
        return (
            <SafeAreaView>
                <View style={{ justifyContent: 'flex-start', width: width, height: height, padding: 60 }}>
                    <FormInput
                        placeholdertext={"Name"}
                        placeholderTextColor={"#ccc"}
                        keyboardType='default'
                        onChange={(text) => this.handleChange(text, "name")}
                        onSubmitEditing={() => {
                            this.job.focus()
                        }}
                        value={this.state.name}
                        returnKeyType='next'
                        autoCapitalize="none"
                    />

                    <FormInput
                        refer={(input) => this.job = input}
                        placeholdertext={"Job"}
                        placeholderTextColor={"#ccc"}
                        keyboardType='default'
                        onChange={(text) => this.handleChange(text, "job")}
                        onSubmitEditing={() => {
                            this.submitForm()
                        }}
                        value={this.state.password}
                        returnKeyType='next'
                        autoCapitalize="none"
                    />

<TouchableOpacity style={styles.buttonStyle} onPress={() => this.onPressCreate()}>
                        <Text style={styles.buttonText}>Create User</Text>
                    </TouchableOpacity>

                    {
                        this.state.isLoading
                        &&
                        <Loader />
                    }


                </View>
            </SafeAreaView>
        )
    };
}

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: '#111E6C', width: width - 60, height: 44, justifyContent: 'center', alignSelf: 'center', margin: 20, borderRadius: 5
    },
    buttonText: {
        color: 'white', fontSize: 18, textAlign: 'center', fontWeight: 'bold'
    }

})