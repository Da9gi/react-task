import React from "react";
import { FieldArray } from "react-final-form-arrays";
import { Input, Td, ButtonReset } from "../styles/Styles";
import { Field } from "react-final-form";

export default function Players(props) {
  const required = (value) => (value ? undefined : "*");
  const minGoals = (value) => (value > 0 ? undefined : "! Invalid");
  const { setGoals } = props;

  return (
    <FieldArray name={props.name}>
      {({ fields }) => (
        <table>
          {fields.map((name, index) => (
            <tr key={name}>
              <Td>Player #{index + 1}</Td>
              <Td>
                <Field name={`${name}.fullname`} validate={required}>
                  {({ input, meta }) => (
                    <div>
                      <Input
                        placeholder="Player's Name"
                        type="text"
                        {...input}
                      />
                      {meta.touched && meta.error && <span>{meta.error}</span>}
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
                      {meta.touched && meta.error && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
              </Td>
              <Td>
                <Field
                  name={`${name}.total_goals`}
                  validate={minGoals || required}
                  onChange={(e) => setGoals(index, e.target.value, props.name)}
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
                      {meta.touched && meta.error && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
              </Td>
              <Td>
                <ButtonReset
                  type="button"
                  onClick={() => {
                    fields.remove(index);
                  }}
                >
                  X
                </ButtonReset>
              </Td>
            </tr>
          ))}
        </table>
      )}
    </FieldArray>
  );
}
