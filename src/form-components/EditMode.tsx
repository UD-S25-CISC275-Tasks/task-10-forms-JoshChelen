import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [isStudent, setStudent] = useState<boolean>(true);
    const [editing, setEditing] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    function updateEditing(event: React.ChangeEvent<HTMLInputElement>) {
        setEditing(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            {/*toggle edit mode*/}
            <Form.Check
                type="switch"
                id="editMode"
                label="Edit Mode"
                checked={editing}
                onChange={updateEditing}
            />

            {!editing ?
                <p>
                    {name} {isStudent ? "is a student" : "is not a student"}
                </p>
            :   <div>
                    <Form.Group controlId="name">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={updateName}
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="isStudent"
                        label="Is Student"
                        checked={isStudent}
                        onChange={updateStudent}
                    />
                </div>
            }
        </div>
    );
}
