import { useState } from "react";
export default function QuestionTimer ({ timeOut, onTimeOut }) {
    const [remainingTime, setRemainigTime] = useState();
    setTimeout (onTimeOut, timeOut);
    setInterval(() => {
        setRemainigTime(prevSetRemainigTime => prevSetRemainigTime - 100);
    },100);
    return <progress id="question-time"/>;
}