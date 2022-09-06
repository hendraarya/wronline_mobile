import React from "react";
import axios from 'axios';
// import SecureStorage from 'react-native-secure-storage';

import { BASE_URLAPI } from "../config/URLAPI";
import { createACtion } from "../Utils/createAction";

export function useWROnline() {

    const datawronline = React.useMemo(
        () => ({
            sendwr: async (data: any) => {
                await axios.post(`${BASE_URLAPI}/api/getnikname`, data);
            }
        }),
        [],
    );

    return {
        datawronline
    }
}