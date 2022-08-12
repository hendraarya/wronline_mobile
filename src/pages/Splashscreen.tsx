import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { StackActions } from '@react-navigation/native';

class Splashscreen extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.flex1}>
          <Image source={require('../assets/images/logonmaxsmall2.png')} />
        </View>
        <View style={styles.flex2}>
          <Text style={styles.text1}>Powered By | Version 1.0 </Text>
          <Text style={styles.text2}>Technology Control ©2022</Text>
        </View>
      </View>
    );
  }
}
export default Splashscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#004e92',
    alignItems: "center",
    height: '100%'
  },

  flex1: {
    flex: 1,
    paddingTop: '50%',
    alignSelf: 'center',
    // backgroundColor: 'yellow',
  },

  flex2: {
    flex: 0.11,
    flexDirection: 'column',
    // backgroundColor: 'green',
  },

  text1: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  text2: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold'
  },

});

