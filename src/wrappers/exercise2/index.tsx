import React, { useEffect, useState } from 'react'

const generateColor = () => {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
}


export const Exercise2 = () => {
    const rootClassname = 'exercise2';
    const [color, setColor] = useState(generateColor);
    const [isAnswerCorrect,setIsAnswerCorrect] = useState<boolean | undefined>()
    const [options, setOptions] = useState<string[]>();

    useEffect(() => {
        // setting a new question
        setOptions([color, generateColor(), generateColor()].sort(() => (Math.random() > .5) ? 1 : -1))
    }, [color])
    
    
    const optionSelectHandler = (colorSelected: string) => {
        if(colorSelected === color) { //Correct ANSWER
            setIsAnswerCorrect(true);
            setColor(generateColor);
        } else {
            setIsAnswerCorrect(false);
        }
    }

    const feedbakElement:JSX.Element = (
        <div className={`${rootClassname}__result`} style={{
            color: isAnswerCorrect ? 'green' : 'red'
        }}>
            { isAnswerCorrect ? 'Correct!' : 'Wrong Answer, please try again'}
        </div>
    );

    return (
        <section className={rootClassname}>
            <div className={`${rootClassname}__color-shower`} style={{backgroundColor: color}}></div>
            <div className={`${rootClassname}__option-buttons`}>
                {options?.map((option,i) => {
                    return (
                    <button onClick={()=>optionSelectHandler(option)} key={`button-${i}-${option}`} value={option}>
                        {option}
                    </button>
                    )
                })}
            </div>
            {isAnswerCorrect !== undefined && feedbakElement}
        </section>
    )
}
