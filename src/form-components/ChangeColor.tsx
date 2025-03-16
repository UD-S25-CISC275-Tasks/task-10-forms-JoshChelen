import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colors: string[] = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black",
    ];
    const [color, setColor] = useState<string>(colors[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>

            <Form>
                {colors.map((col) => (
                    <Form.Check
                        key={col}
                        inline
                        type="radio"
                        name="colors"
                        label={col}
                        value={col}
                        checked={color === col}
                        onChange={updateColor}
                        style={{ backgroundColor: col }}
                    />
                ))}
            </Form>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: color,
                    color: color === "black" ? "white" : "black",
                    display: "inline-block",
                }}
            >
                The current color is {color}
            </div>
        </div>
    );
}
