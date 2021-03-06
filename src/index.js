import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import Todo from './components/Todo'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Todo title='Estudar GoNative' />
        <Todo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
})
