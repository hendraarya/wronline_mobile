import React, { useState, useEffect, useContext } from "react";
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import moment from "moment";
import { RadioButton, TextInput, Divider, Dialog, Portal, Provider, Button } from "react-native-paper";
import Icon from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker'
import { FilledButton } from "../components/FilledButton";

import axios from "axios";


//Create Container 
import MainContainer from "../components/MainContainer";
import MainContent from "../components/MainContent";
import MainFooter from "../components/MainFooter";
import MainHeader from "../components/MainHeader";

//use Context(Variable Global)
import { WROnlineContext } from "../context/WROnlineContext";

//QR CODE Scanner
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';



export function InputWrScreen({ navigation }: any) {
    // Variable for get data sending Request WR Online
    const [nik, setNik] = useState('');
    const [machineid, setMachineId] = useState('');
    const [date, setDate] = useState(new Date());
    const [opendate, setOpendate] = useState(false);
    const [time, setTime] = useState(new Date());
    const [opentime, setOpentime] = useState(false);
    const [problem, setProblem] = useState('');
    const [valueproblem, setValueProblem] = React.useState('');
    const [visibleproblem, setVisibleProblem] = React.useState(false);
    const showDialog = () => setVisibleProblem(true);
    const hideDialog = () => setVisibleProblem(false);
    const [valueurgency, setValueUrgency] = React.useState('');
    const [visibleurgency, setVisibleUrgency] = React.useState(false);
    const showDialogUrgency = () => setVisibleUrgency(true);
    const hideDialogUrgency = () => setVisibleUrgency(false);

    const [users, setUsers] = useState<Array<any>>([]);

    //Access Function use Context(Variable Global)
    // const { sendwr } = useContext(WROnlineContext);

    //Function Submit WR Online
    const submitwronline = () => {
        const data = {
            snik: nik,
            smach: machineid,
            // drepair: date,
            // trepair: time,
            // sproblem: problem,
            // stype: valueproblem,
            // surgency: valueurgency,
        };
        axios
            .post(
                'http://10.202.10.42:3000/api/getnikname',
                data,
            ) /* localhost emulator harus diganti dengan ip local : 10.0.2.2, agar device tidak bingung, soalnya device use localhost */
            .then(res => {
                console.log('res:', res);
            });
    }

    // type User = {
    //     id: number,
    //     name: string,
    //     email: string,

    // };

    // type GetUsersResponse = {
    //     data: User[];
    // };

    // async function getData() {
    //     try {
    //         // 👇️ const data: GetUsersResponse
    //         const { data, status } = await axios.get<GetUsersResponse>(
    //             'http://10.202.10.42:3000/api/mesin',
    //             {
    //                 headers: {
    //                     Accept: 'application/json',
    //                 },
    //             },
    //         );

    //         console.log(JSON.stringify(data, null, 4));
    //         setUsers(data)

    //         // 👇️ "response status is: 200"
    //         console.log('response status is: ', status);

    //         return data;
    //     } catch (error) {
    //         if (axios.isAxiosError(error)) {
    //             console.log('error message: ', error.message);
    //             return error.message;
    //         } else {
    //             console.log('unexpected error: ', error);
    //             return 'An unexpected error occurred';
    //         }
    //     }
    // }

    const getData = () => {
        axios.get('http://10.202.10.42:3000/api/mesin').then(res => {
            // console.log('res get data:', res.data);
            setUsers(res.data);

        });
    };


    const wronline = [
        {
            wrid: 'WR220818-01',
            machine_no: 'HP-123-ID',
            date: '2022-03-10',
            time: '10:02:01',
            problem: 'Mold Abnormal',
            priority: 'Prioroty 1',
            status: 'Received'
        },
    ]

    // useEffect(() => {
    //     Alert.alert(moment(date).format('YYYY-MM-DD'))
    // }, [date]);

    useEffect(() => {
        getData();
        console.log('datausestate', typeof (users));
        // console.log('datalength ini :', users.length);
    }, [users]);


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
                <View style={{ flexDirection: 'row', margin: 30 }}>
                    <TextInput mode="flat" label="NIK" style={{ width: '40%' }} left={<TextInput.Icon icon="sticker-text-outline" value={nik} onChangeText={(value: any) => setNik(value)} />} />
                    <TextInput
                        label="Machine ID"
                        left={<TextInput.Icon icon="factory" />}
                        style={{ width: '60%', marginLeft: 10 }}
                        value={machineid} onChangeText={(value: any) => setMachineId(value)}
                    />
                </View>
                <Divider />
                <View style={{ flexDirection: 'row', margin: 30 }}>
                    <TouchableOpacity onPress={() => setOpendate(true)} style={{ width: '50%' }} >
                        <TextInput mode="flat" label="Failure Date" left={<TextInput.Icon icon="calendar-range" />} editable={false} pointerEvents="none" value={moment(date).format('YYYY-MM-DD')} onChangeText={(value: any) => setDate(value)} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setOpentime(true)} style={{ width: '50%', marginLeft: 10 }} >
                        <TextInput
                            label="Failure Time"
                            left={<TextInput.Icon icon="clock-outline" />}
                            editable={false} pointerEvents="none" value={moment(time).format('HH:mm:ss')} onChangeText={(value: any) => setTime(value)}
                        />
                    </TouchableOpacity>
                </View >
                <Divider />
                <View style={{ flexDirection: 'row', margin: 30 }}>
                    <TextInput mode="flat" label="Problem" style={{ width: '100%' }} left={<TextInput.Icon icon="alert-circle-outline" />} value={problem} onChangeText={(value: any) => setProblem(value)} />
                </View>
                <Divider />
                <Provider>
                    <View style={{ margin: 30, width: '85%' }}>
                        <TouchableOpacity onPress={showDialog} >
                            <TextInput mode="flat" label="Type Problem" style={{ width: '100%' }} left={<TextInput.Icon icon="tools" />} editable={false} value={valueproblem} onChangeText={(value: any) => setValueProblem(value)} />
                        </TouchableOpacity>
                        <Portal>
                            <Dialog visible={visibleproblem} onDismiss={hideDialog}>
                                <Dialog.Title>Type Problem</Dialog.Title>
                                <Dialog.Content>
                                    <RadioButton.Group onValueChange={value => setValueProblem(value)} value={valueproblem}>
                                        <RadioButton.Item label="Emergency Stop" value="Emergency Stop" />
                                        <RadioButton.Item label="Machine Mulfunction" value="Machine Mulfunction" />
                                        <RadioButton.Item label="Plan" value="Plan" />
                                        <RadioButton.Item label="Other" value="Other" />
                                    </RadioButton.Group>
                                </Dialog.Content>
                                <Dialog.Actions>
                                    <Button onPress={hideDialog}>Done</Button>
                                </Dialog.Actions>
                            </Dialog>
                        </Portal>
                    </View>
                </Provider>
                <Divider />
                <Provider>
                    <View style={{ margin: 30, width: '85%' }}>
                        <TouchableOpacity onPress={showDialogUrgency} >
                            <TextInput mode="flat" label="Type Urgency" style={{ width: '100%' }} left={<TextInput.Icon icon="tools" />} editable={false} value={valueurgency} onChangeText={(value: any) => setValueUrgency(value)} />
                        </TouchableOpacity>
                        <Portal>
                            <Dialog visible={visibleurgency} onDismiss={hideDialogUrgency}>
                                <Dialog.Title>Type Urgency</Dialog.Title>
                                <Dialog.Content>
                                    <RadioButton.Group onValueChange={value => setValueUrgency(value)} value={valueurgency}>
                                        <RadioButton.Item label="Safety" value="Safety" />
                                        <RadioButton.Item label="Quality" value="Quality" />
                                        <RadioButton.Item label="Audit" value="Audit" />
                                        <RadioButton.Item label="Item Urgent" value="Item Urgent" />
                                    </RadioButton.Group>
                                </Dialog.Content>
                                <Dialog.Actions>
                                    <Button onPress={hideDialogUrgency}>Done</Button>
                                </Dialog.Actions>
                            </Dialog>
                        </Portal>
                    </View>
                </Provider>

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
                <Text>Ini Data  </Text>


            </MainContent>
            <MainFooter>
                <FilledButton title="Send WR to Maintenance" style={styles.button} onPress={submitwronline} />
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
        width: '100%',
        margin: 10,
        backgroundColor: 'red'
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
    },
    textnik: {
        width: '40%'
    }
})