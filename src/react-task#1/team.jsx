import { FieldArray } from "react-final-form-arrays";
import Style, {
    ButtonSubmit,
    ShowValues,
    Input,
    Td,
    Heading,
    ButtonDefault,
    ButtonReset,
} from "./Styles";
import { Form, Field } from "react-final-form";

export default function NewTeam(props) {
    const required = (value) => (value ? undefined : "*");
    const minGoals = (value) => (value > 0 ? undefined : "! Invalid");

    return (
        <FieldArray name={props.name}>
            {({ fields }) =>
                fields.map((name, index) => (
                    <tr key="name">
                        <label>Player #{index + 1}</label>
                        <Td>
                            <Field
                                name={`${name}.fullname`}
                                validate={required}
                            >
                                {({ input, meta }) => (
                                    <div>
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
                        </Td>
                        <Td>
                            <Field name={`${name}.t_shirt`} validate={required}>
                                {({ input, meta }) => (
                                    <div>
                                        <Input
                                            placeholder="T-Shirt No."
                                            type="number"
                                            {...input}
                                        />
                                        {meta.touched && meta.error && (
                                            <span>{meta.error}</span>
                                        )}
                                    </div>
                                )}
                            </Field>
                        </Td>
                        <Td>
                            <Field
                                name={`${name}.total_goals`}
                                validate={minGoals || required}
                                onChange={()=>props.handleChange(props.push, props.pop)}
                            >
                                {({ input, meta }) => (
                                    <div>
                                        <Input
                                            placeholder="Goals"
                                            type="number"
                                            min="1"
                                            max="21"
                                            {...input}
                                        />
                                        {meta.touched && meta.error && (
                                            <span>{meta.error}</span>
                                        )}
                                    </div>
                                )}
                            </Field>
                        </Td>
                        <Td>
                            <ButtonReset
                                type="button"
                                onClick={() => fields.remove(index)}
                            >
                                X
                            </ButtonReset>
                        </Td>
                    </tr>
                ))
            }
        </FieldArray>
    );
}
