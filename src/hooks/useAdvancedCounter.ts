import {useState} from "react";
// import CounterButton from "./CounterButton.tsx";

type CounterState = {
    count: number;
    lastAction: string;
    time: string;
}

export const useAdvancedCounter = () => {
    const[state, setState] = useState<CounterState>({
        count: 0,
        lastAction: "",
        time: ""

    });

    const getCurrentTime = () => new Date().toLocaleTimeString();

    const increase = (): void => {
        setState({
            count: state.count + 1,
            lastAction: "increase",
            time: getCurrentTime()
        })
    }

    const decrease = (): void => {
        if (state.count > 0 ) {
            setState({
                count: state.count -1,
                lastAction: "decrease",
                time: getCurrentTime()
            })
        }
    }

    const reset = (): void => {
        setState({
            count: 0,
            lastAction: "Reset",
            time: getCurrentTime()

        })
    }


    return {
        count:state.count,
        lastAction:state.lastAction,
        time:state.time,
        increase,
        decrease,
        reset
    };
}
