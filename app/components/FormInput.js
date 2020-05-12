import React, { Component } from 'react';
import { TextInput, Dimensions, View, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export const FormInput = ({
    autoFocus, refer, placeholdertext, name, action, returnKeyType, secureTextEntry, onChange, onSubmitEditing,
    blurOnSubmit, editable, selectTextOnFocus, keyboardType, maxLength, placeholderTextColor,
    style, numberOfLines, multiline, isEyeButton, onPressEye, isEmailValidated, scanner, onPressScanner, value, autoCapitalize, textAlignVertical }) => {
    return (
        <View>
            <TextInput
                allowFontScaling={false}
                autoFocus={autoFocus}
                ref={refer}
                placeholder={placeholdertext}
                placeholderTextColor={placeholderTextColor}
                style={styles.textInputStyle}
                name={name}
                secureTextEntry={secureTextEntry}
                underlineColorAndroid='transparent'
                value={value}
                keyboardType={keyboardType}
                onChangeText={onChange}
                onSubmitEditing={onSubmitEditing}
                returnKeyType={returnKeyType}
                maxLength={maxLength}
                autoCorrect={false}
                autoCapitalize={autoCapitalize}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    textInputStyle: {
        borderWidth: 1, borderColor: "#ccc",
        borderRadius: 5, height: 45, marginTop: 10,
        width: width - 60, alignSelf: 'center', paddingHorizontal: 15,

    }

})






