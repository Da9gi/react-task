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
    ButtonReset,
} from "./Styles";
import NewTeam from "./team";
import { TableHead, TableBody } from "./showScore";
import withLocalStorage from "../utilities/withStorage";
import { parse, stringify } from "../utilities/utility";

function GameBoard({ load, save, remove }) {
    const delay = (duration) =>
        new Promise((resolve) => {
            setTimeout(resolve, duration);
        });

    const loadScore = () => {
        const score = load("score");
        if (!score) {
            return { teamOne: [], teamTwo: [] };
        } else return score;
    };

    const onSubmit = async (values) => {
        await delay(300);
        save("score", values);
        alert(stringify(load("score"), 0, 2));
    };

    const setGoals = ([index, value, team], state, tools) => {
        tools.changeValue(state, `${team[index].goals}`, (goals) => {
            const value1 = parse(stringify(goals));
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
        });
    };

    const setInitialValue = ([values], state, { changeValue }) => {
        changeValue(state, values, (value) => {
            remove("score");
            value = loadScore();
            return value;
        });
    };

    return (
        <Style>
            <Form
                onSubmit={onSubmit}
                mutators={{ ...arrayMutators, setGoals, setInitialValue }}
                initialValues={loadScore()}
                render={({
                    handleSubmit,
                    values,
                    submitting,
                    form: {
                        mutators: { push, pop, setGoals, setInitialValue },
                    },
                    pristine,
                }) => (
                    <React.Fragment>
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
                            <NewTeam
                                name="teamOne"
                                values={values}
                                setGoals={setGoals}
                            />
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
                            <NewTeam
                                name="teamTwo"
                                values={values}
                                setGoals={setGoals}
                            />
                        </ShowValues>
                        <ButtonSubmit
                            type="submit"
                            onClick={handleSubmit}
                            disabled={submitting || pristine}
                        >
                            Submit Record
                        </ButtonSubmit>
                        <ButtonReset
                            type="reset"
                            onClick={setInitialValue}
                            disabled={submitting}
                        >
                            Reset
                        </ButtonReset>
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
                                                    name="teamOne"
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
                                                    name="teamTwo"
                                                />
                                            )}
                                        </tbody>
                                    </table>
                                </Td>
                            </tr>
                        </ShowValues>
                    </React.Fragment>
                )}
            />
        </Style>
    );
}

const Enhanced = withLocalStorage(GameBoard);

export default Enhanced;
