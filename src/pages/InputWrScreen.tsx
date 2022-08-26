import React, { useState, useEffect } from "react";
import { Text, StyleSheet, TouchableOpacity, View, Button, Pressable, Alert } from 'react-native';
import moment from "moment";
import { RadioButton } from "react-native-paper";
import Icon from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker'
import { FilledButton } from "../components/FilledButton";
import Input from "../components/Input";

//Create Container 
import MainContainer from "../components/MainContainer";
import MainContent from "../components/MainContent";
import MainFooter from "../components/MainFooter";
import MainHeader from "../components/MainHeader";

//QR CODE Scanner
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';



export function InputWrScreen() {
    const [date, setDate] = useState(new Date())
    const [opendate, setOpendate] = useState(false)
    const [time, setTime] = useState(new Date())
    const [opentime, setOpentime] = useState(false)

    const [value, setValue] = React.useState('first');


    // useEffect(() => {
    //     Alert.alert(moment(date).format('YYYY-MM-DD'))
    // }, [date]);


    return (
        <MainContainer>
            <MainHeader>
                <View style={styles.mainheader}>
                    <TouchableOpacity>
                        <Icon name="md-arrow-back-outline" size={30} color={'white'} style={{ margin: 17 }} />
                    </TouchableOpacity>
                    <Text style={styles.text}>Request WR Online</Text>
                </View>
            </MainHeader>
            <MainContent>

                <View style={styles.maincontent}>
                    <Text>NIK</Text>
                    <Input style={{ width: 10 }} placeholder="Input NIK" />
                    <Input placeholder="Input Machine ID" editable={false} />
                    <TouchableOpacity onPress={() => setOpendate(true)}>
                        <Input placeholder="Input Failure Date" editable={false}
                            pointerEvents="none" value={moment(date).format('YYYY-MM-DD')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setOpentime(true)}>
                        <Input placeholder="InputFailure Time" editable={false}
                            pointerEvents="none" value={moment(time).format('HH:mm:ss')} />
                    </TouchableOpacity>
                    <Input placeholder="Problem" editable={true} />
                    <Text>Type Problem</Text>
                    <View>

                        <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                            <RadioButton.Item label="Emergency Stop" value="Emergency Stop" />
                            <RadioButton.Item label="Machine Mulfunction" value="Machine Mulfunctionsecond" />
                            <RadioButton.Item label="Plan" value="Plan" />
                            <RadioButton.Item label="Other" value="Other" />
                        </RadioButton.Group>
                    </View>

                </View>
                <DatePicker
                    androidVariant="iosClone"
                    locale="en"
                    textColor="red"
                    confirmText="set date"
                    theme="light"
                    mode="date"
                    modal
                    open={opendate}
                    date={date}
                    onConfirm={(date) => {
                        setOpendate(false),
                            setDate(date)

                    }}
                    onCancel={() => {
                        setOpendate(false)
                    }}
                />

                <DatePicker
                    androidVariant="iosClone"
                    locale="en"
                    textColor="red"
                    confirmText="set time"
                    theme="light"
                    mode="time"
                    modal
                    open={opentime}
                    date={time}
                    is24hourSource={'device'}
                    onConfirm={(date) => {
                        setOpentime(false),
                            setTime(date)

                    }}
                    onCancel={() => {
                        setOpentime(false)
                    }}
                />

            </MainContent>
            <MainFooter>
                <FilledButton title="Send WR to Maintenance" style={styles.button} />
            </MainFooter>
        </MainContainer>

    )
}

const styles = StyleSheet.create({
    mainheader: {
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    maincontent: {
        width: '90%',
        margin: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: '400',
        color: 'white',
        margin: 20
    },
    button: {
        backgroundColor: '#2a4858',
        marginHorizontal: 20,
        marginTop: 2,
        width: '90%',
        borderRadius: 40
    }
})