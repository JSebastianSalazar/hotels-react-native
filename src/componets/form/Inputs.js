import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
    View} from "react-native";
import Color from '../../styles/colors/index'


export default class  InputsField extends  Component {

    render() {
        const {labelText, labelSize, labelColor, textColors, borderBotton, inputType, customStyle} = this.props;
        const fontSize = labelSize || 14;
        const color = labelColor || Color.white ;
        const textColor = textColors || Color.white;
        const borderBottonColor = borderBotton || 'transparent';
        return(
            <View style={[customStyle, styles.wrapper]}>
                <Text style={[{fontSize: fontSize, color: color },styles.label]}>{labelText}</Text>
                <TextInput secureTextEntry={inputType === 'password' ? true : false}   autoCorrect={false}
                             style={[{color: textColor, borderBottomColor: borderBottonColor},styles.input]}/>
            </View>
        );
    }

}
InputsField.protoType = {
    labelText: PropTypes.string,
    labelSize: PropTypes.number,
    labelColor: PropTypes.string,
    textColors: PropTypes.string,
    borderBotton: PropTypes.string,
    inputType: PropTypes.string,
    customStyle: PropTypes.object
};

const styles = StyleSheet.create({
    wrapper:{
        display: 'flex',

    }, label: {
        fontWeight: '700',
        marginBottom: 10
    },
    input:{
        borderBottomWidth: 1,
        paddingTop: 5,
        paddingBottom: 5,

    }
});