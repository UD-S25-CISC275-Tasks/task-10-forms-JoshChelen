import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requested, setRequested] = useState<string>("");

    function handleUseAttempt() {
        if (attempts > 0) {
            setAttempts(attempts - 1);
        }
    }

    function handleGainAttempts() {
        const requestedNumber = parseInt(requested);
        if (!isNaN(requestedNumber) && requestedNumber > 0) {
            setAttempts(attempts + requestedNumber);
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <span>Attempts left: {attempts}</span>
            <Form.Group controlId="attempts">
                <Form.Label>Request Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requested}
                    onChange={(e) => {
                        setRequested(e.target.value);
                    }}
                />
            </Form.Group>
            <Button onClick={handleUseAttempt} disabled={attempts === 0}>
                Use
            </Button>
            <Button onClick={handleGainAttempts}>Gain</Button>
        </div>
    );
}
