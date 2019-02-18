import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {View,
  TouchableHighlight,
    StyleSheet,

} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Color from '../../styles/colors/index';
import {Text} from "react-native-elements";
export  default class NextArrowBotton extends  Component{


    render() {
        const {handledBotton, disabled}= this.props;
        const opacityStyle = disabled ? {backgroundColor: 'rgba(255,255,255,0.3)'} :
            {backgroundColor: 'rgba(255,255,255,0.6)'}
        return(
            <View>
            <TouchableHighlight style={[opacityStyle, styles.button]}>
                <Icon name="angle-right" color={Color.green01} style={styles.icon}/>
            </TouchableHighlight>
            </View>
        )
    }
}


 const styles = StyleSheet.create({
     icon: {
         marginRight:-2,
         marginTop:-2
     },
     button:{
         alignItems: 'center',
         justifyContent: 'center',
         borderRadius:50,
         width: 60,
         height: 60,

     }
 })