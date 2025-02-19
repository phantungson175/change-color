import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      backgroundColor: '00ccff',
    };
  }

  handleButtonClick = (newMessage, newColor) => {
    this.setState({ message: newMessage, backgroundColor: newColor });
  };

  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.state.backgroundColor }]}>
        <ButtonComponent
          backgroundColor="green"
          message="Green button clicked!"
          onClick={this.handleButtonClick}
          colorChange="#32CD32" // limegreen
          
        />
        <ButtonComponent
          backgroundColor="red"
          message="Red button clicked!"
          onClick={this.handleButtonClick}
          colorChange="#FF6347" // tomato
        />
        
        <ButtonComponent
          backgroundColor="black"
          message="Black button clicked"
          onClick={this.handleButtonClick}
          colorChange="#110000"
        />
        <ButtonComponent
          backgroundColor="blue"
          message="Blue button clicked"
          onClick={this.handleButtonClick}
          colorChange="blue"
        />
        <ButtonComponent
          backgroundColor="yellow"
          message="Yellow button clicked"
          onClick={this.handleButtonClick}
          colorChange="#ffcc00"
        />
        {this.state.message && <Text style={styles.message}>{this.state.message}</Text>}
      </View>
    );
  }
}

class TitleComponent extends Component {
  render() {
    const { title, color } = this.props;
    return <Text style={[styles.title, { color: color }]}>{title}</Text>;
  }
}

class ButtonComponent extends Component {
  render() {
    const { backgroundColor, message, onClick, colorChange } = this.props;
    return (
      <TouchableOpacity
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onClick(message, colorChange)}
      >
        <Text style={styles.buttonText}>{backgroundColor}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green', // Nền xanh lá cây
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white', // Chữ màu trắng
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginVertical: 10,
    width: 200,
    alignItems: 'center',

  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'white'
  },
  message: {
    marginTop: 20,
    fontSize: 18,
    color: 'gray',
  },
  blue: {
    backgroundColor: 'blue',
  },
  brown: {
    backgroundColor: 'brown',
  },
  yellow: {
    backgroundColor: 'yellow',
  },
  red: {
    backgroundColor: 'red',
  },
  black: {
    backgroundColor: 'black',
  },
  textWhite: {
    color: 'white',
  },
  textBlack: {
    color: 'black',
  },
});


export default App;
