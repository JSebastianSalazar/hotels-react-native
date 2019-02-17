import React, {Component} from 'react';
import {Image, View, StyleSheet, Text, TouchableHighlight} from 'react-native';
import Colors from '../styles/colors/index';
import RoundedButton from '../componets/buttons/RoundedButton'
import Color from "../styles/colors";
import Icon from 'react-native-vector-icons/FontAwesome';
export default class LoggedOut extends Component {
    constructor(props) {
        super(props);

    }

    onFacebookLogin() {
        alert('Facebook button')

    }

    onCreateAccount() {
        alert('create account')
    }

    onMoreOption() {
        alert('More option')
    }

    render() {
        return (
            <View  style={styles.wrapper}>
                <View style={styles.welcome}>
                    <Image style={styles.logo}
                           source={require('../img/logo.png')}
                    />
                    <Text style={styles.welcomeText}>Hotel ready when you need</Text>
                    <RoundedButton background={Colors.white}
                                   icon={<Icon size={20} name="facebook-square" style={styles.facebookButtonIcon}
                                               color={Color.green01}> </Icon>}
                                   handleOnPress={this.onFacebookLogin}
                                   textColor={Colors.green01}  text={'Continue with Facebook'}/>

                    <RoundedButton   handleOnPress={this.onCreateAccount}
                                   textColor={Colors.white}  text={'Create account'}/>
                                   <TouchableHighlight onPress={this.onMoreOption} style={styles.moreOptionsButton}>
                                       <Text style={styles.moreOptionText}>More options</Text>
                                   </TouchableHighlight>
                    <View style={styles.termsContent}>
                        <Text style={styles.termsText}>
                            By sebastian salazar 2019, Create account or more
                        </Text>
                        <Text style={styles.termsText}>
                            application for you to find the ideal hotel
                        </Text>
                        <Text style={styles.linkText}>
                            TERMS AND CONDITIONS
                        </Text>
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        display: 'flex',
        backgroundColor: Colors.green01,
    },  welcome: {
        flex: 1,
        display: 'flex',
        marginTop: 30,
        padding:40
    },
    logo: {
        width: 50,
        height: 50,
        marginTop:30,
        marginBottom:20
    },
    welcomeText: {
        fontSize: 25,
        color: Colors.white,
        fontWeight: '300',
        marginBottom: 40

    },
    facebookButtonIcon: {
        color: Color.green01,
        position: 'relative',
        left: 25,
        zIndex:1
    },
    moreOptionsButton: {
        marginTop: 15
    },
    moreOptionText: {
        color: Color.white,
        fontSize: 16
    },
    termsContent: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginTop: 30,
    },
    termsText: {
        color: Color.white,
        fontSize: 13,
        fontWeight: '600'
    },
    linkText: {
        borderBottomWidth: 1,
        borderBottomColor: Color.white,
        color: Color.white,
        fontSize: 13,
        fontWeight: '600'
    }

    });