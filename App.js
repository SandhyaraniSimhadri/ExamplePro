
import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput } from 'react-native';

import Child from './Child';
class App extends Component {
constructor (props) {
super(props);
this.state = { text: '' };
this.state={text1:''};
}
onPress = () => {
  console.log(this.state.text);
  console.log(this.state.text1);
  };

render () {
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
<Child text='Click Me' onPress={() => this.onPress()} />
</View>
</View>
);
}
}

const styles = StyleSheet.create({
container : {
// flex : 1,
backgroundColor : '#fff',
alignItems : 'center',
justifyContent : 'center'
}
});
export default App;