import { useState, useEffect } from "react";
export default function QuestionTimer({ timeOut, onTimeOut }) {
  const [remainingTime, setRemainingTime] = useState(timeOut);

  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + timeOut;

    const interval = setInterval(() => {
      const now = Date.now();
      const newRemaining = Math.max(endTime - now, 0);
      setRemainingTime(newRemaining);
      if (newRemaining === 0) {
        onTimeOut();
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [timeOut, onTimeOut]);

  return <progress id="question-time" max={timeOut} value={remainingTime}/>;
}
