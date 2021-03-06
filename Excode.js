import React, { Component } from 'react';  
import { AppRegistry, StyleSheet,Text, TextInput, View, TouchableOpacity,} from 'react-native';  
import Child from './Child';

class Excode extends Component {  
    constructor(props) {  
        super(props);  
        this.state = {text: ''};  
        this.state={text1:''};
        
    }  
  
    render() {   
        const onPress = () => <Child text={this.state.text}></Child>  
        return (  
          <View>
            <View style={{padding: 10}}>  
                <TextInput  
                    style={{height: 40,backgroundColor: 'azure', fontSize: 20}}  
                    placeholder="Username"  
                    onChangeText={(text) => this.setState({text})}  
                />  
            </View>  
            <View style={{padding: 10}}>  
                <TextInput  
                    secureTextEntry={true}
                    style={{height: 40,backgroundColor: 'azure', fontSize: 20}}  
                    placeholder="Password"  
                    onChangeText={(text1) => this.setState({text1})}  
                />  
            </View>  

            <View style={styles.container}>
       <Child	text="Click Me"	onPress={() => {this.state.text	}}/>
      </View>
        </View>
       

        );  
    }  
}  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Excode;