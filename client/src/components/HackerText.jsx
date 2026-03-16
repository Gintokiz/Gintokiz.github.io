import { useEffect, useState } from 'react';

export default function HackerText({ text, className }) {
    const [displayText, setDisplayText] = useState(text);
    const charset = "A@CK#LRYZ0dE789@#$";

    useEffect(() => {
        let iteration = 0;
        let interval = setInterval(() => {
            setDisplayText(prev =>
                text.split("").map((letter, index) => {
                    if (index < iteration) return text[index];
                    return charset[Math.floor(Math.random() * charset.length)];
                }).join("")
            );

            if (iteration >= text.length) clearInterval(interval);
            iteration += 1 / 3;
        }, 30);

        return () => clearInterval(interval);
    }, [text]);

    return <span className={className}>{displayText}</span>;
}