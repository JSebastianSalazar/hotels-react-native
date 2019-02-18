import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Color from '../styles/colors/index';
import {View,
    Text,
    ScrollView,
    StyleSheet,
    KeyboardAvoidingView
    } from "react-native";
import InputsField from '../componets/form/Inputs';
import NextArrowBotton from '../componets/buttons/NextArrowBotton';
export  default class Login extends  Component{
    handledNextBotton() {
            alert('hola');
        }
    render() {
        return(
            <KeyboardAvoidingView style={styles.containerWrapper} behavior="padding">
                <ScrollView style={styles.scrollView}>
                <View style={styles.scrollViewWrapper}>

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

                    <View style={styles.nexBotton}>
                        <NextArrowBotton handledBotton={this.handledNextBotton()}/>
                    </View>
                </View>
                </ScrollView>
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
        paddingTop: 20,
        flex:1
    },
    loginHeaderText:{
        fontSize: 34,
        color: Color.white,
        fontWeight: '300',
        marginBottom: 40
    },
    nexBotton:{
        alignItems: 'flex-end',
        right: 20,
        bottom: 20
    }
})