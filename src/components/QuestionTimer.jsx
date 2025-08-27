import { useState, useEffect } from "react";
export default function QuestionTimer({ timeOut, onTimeOut }) {
  const [remainingTime, setRemainigTime] = useState();
  useEffect(() => {
    setTimeout(onTimeOut, timeOut);
  }, [timeOut, onTimeOut]);

  useEffect(() => {
    setInterval(() => {
      setRemainigTime((prevSetRemainigTime) => prevSetRemainigTime - 100);
    }, 100);
  }, []);

  return <progress id="question-time" max={timeOut} value={remainingTime}/>;
}
