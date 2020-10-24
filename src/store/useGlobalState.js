import { useState } from "react";

const useGlobalState = () => {
    const [state, setSate] = useState({ value: '', list: [] });
    const actions = (action) => {
        const { type, payload } = action;
        switch (type) {
            case 'setUser':
                return setSate({ ...state, user: payload.user });
            default:
                return state;
        }
    }
    return { state, actions }
}

export default useGlobalState;