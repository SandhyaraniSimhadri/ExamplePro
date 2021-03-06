import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

class Child extends Component {
render () {
const { text, onPress } = this.props;
return (
<TouchableOpacity delayPressIn={0} style={styles.buttonStyle} onPress={() => onPress()}>
<Text style={styles.textStyle}>{text}</Text>
</TouchableOpacity>
);
}
}

Child.propTypes = {
text : PropTypes.string.isRequired,
onPress : PropTypes.func.isRequired
};

const styles = StyleSheet.create({
textStyle : {
fontSize : 20,
color : '#ffffff',
textAlign : 'center'
},

buttonStyle : {
padding : 10,
backgroundColor : '#202646',
borderRadius : 5
}
});

export default Child;