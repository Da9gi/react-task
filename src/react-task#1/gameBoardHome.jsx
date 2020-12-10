import React from "react";
import { Form, Field } from "react-final-form";
import Style, { FormWrap, ButtonSubmit, ShowValues, Input } from "./Styles";

export default function GameBoard() {
    const delay = (duration) =>
        new Promise((resolve) => {
            setTimeout(resolve, duration);
        });

    const onSubmit = async (values) => {
        await delay(1000);
        alert(`${values.name}, ${values.goals}`);
    };

    const required = (value) => (value ? undefined : "*");
    const minGoals = (value) => ((value>0)?undefined:"! Invalid");

    return (
        <Style>
            <Form
                onSubmit={onSubmit}
                // initialValues={{ Goals: 0 }}
                render={({ handleSubmit, values, submitting, pristine }) => (
                    <FormWrap>
                        Players:
                        <Field name="name" validate={required}>
                            {({ input, meta }) => (
                                <div>
                                    <label>Name</label>
                                    <Input
                                        placeholder="Player's Name"
                                        type="text"
                                        {...input}
                                    />
                                    {meta.touched && meta.error && (
                                        <span>{meta.error}</span>
                                    )}
                                </div>
                            )}
                        </Field>
                        <Field name="goals" validate={minGoals || required}>
                            {({ input, meta }) => (
                                <div>
                                    <label>Goals</label>
                                    <Input placeholder="0" type="number" min="1" max="21" {...input} />
                                    {meta.touched && meta.error && (
                                        <span>{meta.error}</span>
                                    )}
                                </div>
                            )}
                        </Field>
                        <ButtonSubmit
                            type="submit"
                            onClick={handleSubmit}
                            disabled={submitting || pristine}
                        >
                            Submit Record
                        </ButtonSubmit>
                        <ShowValues><tr>
                        <table>
                        <thead>
                        <th>Players</th>
                        <th>Goals</th>
                        <th>Time</th>
                        </thead>
                        <tbody>
                        
                        </tbody>
                        </table>
                        </tr></ShowValues>
                    </FormWrap>
                )}
            />
        </Style>
    );
}
