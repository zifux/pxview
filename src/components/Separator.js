import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  separatorContainer: {
    paddingHorizontal: 10,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});

const Separator = props => (
  <View style={styles.separatorContainer}>
    <View style={styles.separator} />
  </View>
);

export default Separator;
