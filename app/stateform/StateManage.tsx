"use client"

import { stat } from "fs";
import { ChangeEvent, useState } from "react"

export default function StateManage() {
    const [answer, setAnswer] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [status, setStatus] = useState("typing");

    if (status == "success") {
        return <h1>输入正确</h1>;
    }
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("submitting");
        try {
            await submitForm(answer);
            setStatus("success");
        }
        catch (err: unknown) {
            setStatus("typing");
            setError(err instanceof Error ? err.message : String(err));
        }
    }

    function handleTextareaChange(e: ChangeEvent<HTMLTextAreaElement>) {
        setAnswer(e.target.value);
    }


    return (
        <>
            <h2>City quiz</h2>
            <p>
                In which city is there a billboard that turns air into drinkable water?
            </p>
            <form onSubmit={handleSubmit}>
                <textarea value={answer} onChange={handleTextareaChange}
                    disabled={status == 'submitting'}
                ></textarea>
                <br />
                <button disabled={
                    answer.length === 0 ||
                    status === 'submitting'
                }>
                    Submit
                </button>

                {error !== null &&
                    <p className="Error">
                        {error}
                    </p>
                }
            </form >
        </>
    );
}

function submitForm(answer: string) {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let shouldError = answer.toLowerCase() !== 'lima'
            if (shouldError) {
                reject(new Error('Good guess but a wrong answer. Try again!'));
            } else {
                resolve(undefined);
            }
        }, 1500);
    });
}
