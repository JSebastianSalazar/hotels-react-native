import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Color from '../styles/colors/index';
import {View,
    Text,
    ScrollView,
    StyleSheet,
    KeyboardAvoidingView,
    Nex
    } from "react-native";
import InputsField from '../componets/form/Inputs'
export  default class Login extends  Component{

    render() {
        return(
            <KeyboardAvoidingView style={styles.containerWrapper}>
                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.loginHeaderText}>
                            Log In
                        </Text>
                        <InputsField textColors={Color.white}
                                     labelText="EMAIL ADDRESS" labelSize={14}
                                     labelColor={Color.white} inputType="email"
                                     borderBotton={Color.white} customStyle={{marginBottom: 30}}/>
                        <InputsField inputType="password" textColors={Color.white} labelText="PASSWORD"
                                     labelSize={14} labelColor={Color.white}  customStyle={{marginBottom: 30}}
                                     borderBotton={Color.white}/>
                    </ScrollView>
                    <Nex
                </View>

            </KeyboardAvoidingView>
        )
    }

}
const styles = StyleSheet.create({
    containerWrapper: {
        display: 'flex',
        flex: 1,
        backgroundColor: Color.green01
    },
    scrollViewWrapper: {
        marginTop: 70,
        flex: 1
    },
    scrollView: {
        paddingLeft:30,
        paddingRight: 30,
        paddingTop: 30,
        flex:1
    },
    loginHeaderText:{
        fontSize: 30,
        color: Color.white,
        fontWeight: '400',
        marginBottom: 40
    },
})