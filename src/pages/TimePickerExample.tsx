import React, { useEffect, useState } from 'react';
import DatePicker from 'react-native-modern-datepicker';

export const TimePickerExample = () => {
    const [time, setTime] = useState('');

    useEffect(() => {

        console.log('Time saat ini:', time);
    }, [time]);

    return (
        <DatePicker
            mode="time"
            minuteInterval={3}
            onTimeChange={selectedTime => setTime(selectedTime)}
        />
    );
};