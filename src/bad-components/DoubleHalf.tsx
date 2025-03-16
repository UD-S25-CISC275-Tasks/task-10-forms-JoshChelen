import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface DoubleHalfProps {
    dhValue: number;
    setDhValue: React.Dispatch<React.SetStateAction<number>>;
}

function Doubler(props: DoubleHalfProps) {
    return (
        <Button
            onClick={() => {
                props.setDhValue(props.dhValue * 2);
            }}
        >
            Double
        </Button>
    );
}

function Halver(props: DoubleHalfProps) {
    return (
        <Button
            onClick={() => {
                props.setDhValue(props.dhValue * 0.5);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler dhValue={dhValue} setDhValue={setDhValue} />
            <Halver dhValue={dhValue} setDhValue={setDhValue} />
        </div>
    );
}
