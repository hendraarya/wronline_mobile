import { createContext } from "react";

//buat *context* untu auth saat ini, defaultnya bernilai kosong/null
export type typedata = {
    snik: string,
    smach: string,
    drepair: Date,
    trepair: Date,
    sproblem: string,
    stype: string,
    surgency: string,
    sendwr: (c: any) => void

};
export const WROnlineContext = createContext<typedata>({
    snik: '',
    smach: '',
    drepair: new Date(),
    trepair: new Date(),
    sproblem: '',
    stype: '',
    surgency: '',
    sendwr: () => { }
});