import {atom} from "recoil"
export const countatom = atom({
    key: 'countatom', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});

