import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight
} from 'react-native';
import Color from '../../styles/colors/index';
export default class RoundedButton extends Component{

    render() {
        const {text, textColor, background, handleOnPress, icon} = this.props;
        const backgroundColor = background || 'transparent';
        const color = textColor || Color.black;
        return(
         <TouchableHighlight  style={[styles.wrapper, {backgroundColor}]}
         onPress={handleOnPress}>
             <View style={styles.buttonTextWrapper}>
                 {icon}
               <Text style={[styles.buttonText, {color}]}>{text}  </Text>
             </View>
         </TouchableHighlight>
        )
    }
    
}

RoundedButton.propTypes  =  {
    text: PropTypes.string,
    textColor: PropTypes.string,
    background: PropTypes.string,
    name: PropTypes.string,
    icon: PropTypes.object,
    handleOnPress: PropTypes.func.isRequired

}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        padding: 15,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: Color.white,
        marginBottom: 15,
        alignItems: 'center'
    },
    buttonTextWrapper: {
       flexDirection: 'row',
       justifyContent: 'flex-end',

    },
    buttonText:{
        fontSize: 16,
        width: '100%',
        textAlign: 'center',
        fontWeight: '400'
    }
})