import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function Input({ style, ...props }: any) {
    return (
        <TextInput {...props} style={[style, styles.columnBox]} />
    );
}

const styles = StyleSheet.create({
    columnBox: {
        backgroundColor: '#e8e8e8',
        width: '100%',
        padding: 20,
        borderRadius: 8,
    }
});