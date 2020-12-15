import React from "react";
import { Form } from "react-final-form";
import arrayMutators from "final-form-arrays";
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

    const setGoals = (args, state, tools) => {
        const index = args[0];
        const value = args[1];
        const team = args[2];
        tools.changeValue(
            state,
            `${team[index]}.goals`,
            (goals) => {
                const value1 = JSON.parse(JSON.stringify(goals));
                const diff = value - value1.length;
                if (diff < 0) {
                    value1.splice(
                        value1.length - Math.abs(diff) - 1,
                        Math.abs(diff)
                    );
                } else {
                    new Array(diff)
                        .fill(0)
                        .forEach(() => value1.push({ minute: null }));
                }
                return value1;
            }
        );
        
    };

    return (
        <Style>
            <Form
                onSubmit={onSubmit}
                mutators={{ ...arrayMutators, setGoals }}
                initialValues={{ teamOne: [], teamTwo: [] }}
                render={({
                    handleSubmit,
                    values,
                    submitting,
                    form: {
                        mutators: { push, pop, setGoals },
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
                                                goals: [],
                                            });
                                        }}
                                    >
                                        Add Player
                                    </ButtonDefault>
                                </TdTeam>
                            </tr>
                            <hr />
                            <NewTeam name="teamOne" setGoals={setGoals} />
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
                                                total_goals: 0,
                                                goals: [],
                                            });
                                        }}
                                    >
                                        Add Player
                                    </ButtonDefault>
                                </TdTeam>
                            </tr>
                            <hr />
                            <NewTeam name="teamTwo" setGoals={setGoals} />
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
                                        <tbody>
                                            {values.teamOne.length && (
                                                <TableBody
                                                    score={values.teamOne}
                                                />
                                            )}
                                        </tbody>
                                    </table>
                                </Td>
                                <Td>
                                    TEAM 2
                                    <table>
                                        <TableHead />
                                        <tbody>
                                            {values.teamTwo.length && (
                                                <TableBody
                                                    score={values.teamTwo}
                                                />
                                            )}
                                        </tbody>
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
