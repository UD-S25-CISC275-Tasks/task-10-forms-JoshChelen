import React, { useState } from "react";
import { Form } from "react-bootstrap";
export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="checkAnswer">
                <Form.Control
                    as="textarea"
                    rows={1}
                    value={answer}
                    onChange={updateAnswer}
                />
            </Form.Group>
            <h3>Check Answer</h3>
            <p>{answer === expectedAnswer ? "✔️ Correct" : "❌ Incorrect"}</p>
        </div>
    );
}
