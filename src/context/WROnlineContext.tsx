import { createContext } from "react";

//buat *context* untu auth saat ini, defaultnya bernilai kosong/null
type typedata = {
    snik: string,
    smach: string,
    drepair: string,
    trepair: string,
    sproblem: string,
    stype: string,
    surgency: string,
    sendwr: string
};
export const WROnlineContext = createContext<typedata>({
    snik: '',
    smach: '',
    drepair: '',
    trepair: '',
    sproblem: '',
    stype: '',
    surgency: '',
    sendwr: '',
});