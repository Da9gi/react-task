import React, { useState } from "react";
import { Form } from "react-final-form";
import arrayMutators, { push } from "final-form-arrays";
import Style, {
    ButtonSubmit,
    ShowValues,
    TdTeam,
    Td,
    Heading,
    ButtonDefault,
} from "./Styles";
import NewTeam from "./team";
import { TableHead, TableBody } from "./showScore";

export default function GameBoard() {
    const delay = (duration) =>
        new Promise((resolve) => {
            setTimeout(resolve, duration);
        });

    const onSubmit = async (values) => {
        await delay(300);
        alert(JSON.stringify(values, 0, 2));
    };

    const handleChange = (push, pop) => {
        push("goals", {minute:0})
    }

    return (
        <Style>
            <Form
                onSubmit={onSubmit}
                mutators={{ ...arrayMutators }}
                initialValues={{ teamOne: [], teamTwo: [] }}
                render={({
                    handleSubmit,
                    values,
                    submitting,
                    form: {
                        mutators: { push, pop },
                    },
                    pristine,
                }) => (
                    <>
                        <ShowValues>
                            <tr>
                                <TdTeam>
                                    <Heading>TEAM #1</Heading>
                                </TdTeam>
                                <TdTeam>
                                    <ButtonDefault
                                        type="button"
                                        onClick={() => {
                                            push("teamOne", {
                                                fullname: "",
                                                t_shirt: null,
                                                total_goals: 0,
                                                goals: new Array(this.total_goals).fill(0),
                                            });
                                        }}
                                    >
                                        Add Player
                                    </ButtonDefault>
                                </TdTeam>
                            </tr>
                            <hr />
                            <NewTeam name="teamOne" push={push} handleChange={handleChange} pop={pop}/>
                        </ShowValues>
                        <ShowValues>
                            <tr>
                                <TdTeam>
                                    <Heading>TEAM #2</Heading>
                                </TdTeam>
                                <TdTeam>
                                    <ButtonDefault
                                        type="button"
                                        onClick={() => {
                                            push("teamTwo", {
                                                fullname: "",
                                                t_shirt: null,
                                                goals: 0,
                                            });
                                        }}
                                    >
                                        Add Player
                                    </ButtonDefault>
                                </TdTeam>
                            </tr>
                            <hr />
                            <NewTeam name="teamTwo" push={push} handleChange={handleChange} pop={pop}/>
                        </ShowValues>
                        <ButtonSubmit
                            type="submit"
                            onClick={handleSubmit}
                            disabled={submitting || pristine}
                        >
                            Submit Record
                        </ButtonSubmit>
                        <ShowValues>
                            <Heading>Summary:-</Heading>
                            <hr />
                            <tr>
                                <Td>
                                    TEAM 1
                                    <table>
                                        <TableHead />

                                        {values.teamOne.length && (
                                            <TableBody
                                                score={values.teamOne}
                                                name="goals"
                                            />
                                        )}
                                    </table>
                                </Td>
                                <Td>
                                    TEAM 2
                                    <table>
                                        <TableHead />

                                        {values.teamTwo.length && (
                                            <TableBody
                                                score={values.teamTwo}
                                                name="goals"
                                            />
                                        )}
                                    </table>
                                </Td>
                            </tr>
                        </ShowValues>
                    </>
                )}
            />
        </Style>
    );
}

// {time:[{ minute: 0 }]}
