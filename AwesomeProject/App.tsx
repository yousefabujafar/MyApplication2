import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayText: '',
    };
  }

  displayInfo = () => {
    // Replace 'Your Name' and 'Your University ID' with your actual name and university ID.
    this.setState({ displayText: 'Yousef AbuJafar - 127023' });
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, marginBottom: 20 }}>{this.state.displayText}</Text>
        <Button title="Display Info" onPress={this.displayInfo} />
      </View>
    );
  }
}

export default App;
