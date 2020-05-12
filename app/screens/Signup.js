/*==========================================================================================*/
// Welcome - Display options to select
//         - Login with FSP
//         - Guest Login
/*==========================================================================================*/

import React, { Component } from 'react';
import { Dimensions, Image, View, Text, StatusBar, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native'
import { FormInput } from '../components/FormInput';
import Validation from '../utilities/Validation';
import User from '../user/User';
import { CommonActions } from '@react-navigation/native';
import Loader from '../components/Loader';

const { width, height } = Dimensions.get('window');
console.disableYellowBox = true


export default class Signup extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            cPassword: '',
            emailValidated: false,
            passwordValidated: false,
            isLoading: false
        }
    }

    componentDidMount() {

    }

    handleChange = (evt, value) => {
        this.setState(() => ({ [value]: evt }));
    }

    onChangeEmail(text) {
        if (Validation.validateEmail(text)) {
            this.setState({ emailValidated: true, email: text })
        } else {
            this.setState({ emailValidated: false, email: text })
        }
    }

    onChangePassword(text) {
        const { password } = this.state
        if (Validation.validatePassword(text)) {
            this.setState({
                passwordValidated: true, password: text
            })
        } else {
            this.setState({ passwordValidated: false, password: text })
        }
    }

    onChangeConfirmPassword(text) {
        const { cPassword } = this.state
        if (Validation.validatePassword(text)) {
            this.setState({
                passwordValidated: true, cPassword: text
            })
        } else {
            this.setState({ passwordValidated: false, cPassword: text })
        }
    }

    emailSubmitted = () => {
        const { email } = this.state
        if (Validation.validateEmail(email)) {
            this.setState({ emailValidated: true })
        } else {
            this.setState({ emailValidated: false })
        }
        this.passowrd.focus()
    }

    passwordSubmitted = () => {
        const { password } = this.state
        if (Validation.validatePassword(password)) { ///*Validation.validatePassword(password)*/
            this.setState({ passwordValidated: true })
        } else {
            this.setState({ passwordValidated: false })
        }
    }

    onPressSignup = () => {
        const { email, password, cPassword, emailValidated, passwordValidated } = this.state
        if (email.length == 0) {
            alert("Please enter email")
        } else if (password.length == 0) {
            alert("Please enter password")
        } else if (!emailValidated) {
            alert("Please enter valid email")
        } else if (!passwordValidated) {
            alert("Please eneter valid password")
        } else if (password != cPassword) {
            alert("Password and Confirm password should be same")
        } else {
            // alert("Call api")
            this.setState({isLoading: true},  () => {
                this.callSignUpApi()
            })
        }

    }

    callSignUpApi = () => {
        const { email, password, cPassword, emailValidated, passwordValidated } = this.state
        let data = {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'same-origin',
            body: JSON.stringify({
              email: email,
              password: password
            }),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            }
          }
          console.log("data", data)
          return fetch('https://reqres.in/api/ register', data)
                  .then(response => response.json())  // promise
                  .then(json => {
                      this.setState({isLoading: false})
                      console.log("response",json)
                      let user = {
                          id: json.id,
                          email: json.email
                      }
                      User.setUser(user)
                      const routes = [{ name: 'Home' },];
                      this.props.navigation.dispatch(
                          CommonActions.reset({
                              routes,
                              index: 0,
                          })
                      )
          
                    })
                  .catch(error => {
                    this.setState({isLoading: false})
                    console.log("error",error)});
    }

    render() {
        return (
            <SafeAreaView>
                <View style={{ justifyContent: 'flex-start', width: width, height: height, padding: 40 }}>

                    <FormInput
                        placeholdertext={"Email"}
                        placeholderTextColor={"#ccc"}
                        keyboardType='email-address'
                        onChange={(text) => this.onChangeEmail(text)}
                        onSubmitEditing={() => {
                            this.emailSubmitted()
                        }}
                        value={this.state.email}
                        returnKeyType='next'
                        autoCapitalize="none"
                    />

                    <FormInput
                        refer={(input) => this.passowrd = input}
                        placeholdertext={"Password"}
                        placeholderTextColor={"#ccc"}
                        keyboardType='default'
                        onChange={(text) => this.onChangePassword(text)}
                        onSubmitEditing={() => {
                            this.passwordSubmitted()
                        }}
                        secureTextEntry={true}
                        value={this.state.password}
                        returnKeyType='next'
                        autoCapitalize="none"
                    />

                    <FormInput
                        refer={(input) => this.cPassword = input}
                        placeholdertext={"Confirm Password"}
                        placeholderTextColor={"#ccc"}
                        keyboardType='default'
                        onChange={(text) => this.onChangeConfirmPassword(text)}
                        onSubmitEditing={() => {
                            this.onPressSignup()
                        }}
                        secureTextEntry={true}
                        value={this.state.cPassword}
                        returnKeyType='done'
                        autoCapitalize="none"
                    />


                    <TouchableOpacity style={styles.buttonStyle} onPress={() => this.onPressSignup()}>
                        <Text style={styles.buttonText}>Sign Up</Text>
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
        backgroundColor: '#111E6C', width: width - 60, height: 44, justifyContent: 'center', alignSelf: 'center', margin: 60, borderRadius: 5
    },
    buttonText: {
        color: 'white', fontSize: 18, textAlign: 'center', fontWeight: 'bold'
    }

})