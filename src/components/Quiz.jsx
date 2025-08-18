import { useState } from "react"                                     

export default function Quiz(){
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState([]);

    return(
        <p>Currently Active Question</p>
    )
};