import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function RequestWrScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <View style={styles.content}></View>
            <View style={styles.footer}>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cdd8d4'
    },
    header: {
        flex: 0.1,
        backgroundColor: 'green',
    },
    content: {
        flex: 1,
        backgroundColor: 'red',
    },
    footer: {
        flex: 0.1,
        backgroundColor: 'yellow',
    }
});