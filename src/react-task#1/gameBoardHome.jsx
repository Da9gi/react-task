import React, { useState } from "react";
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
    const [scoreOne, setScoreOne] = useState([]);
    const [scoreTwo, setScoreTwo] = useState([]);

    const delay = (duration) =>
        new Promise((resolve) => {
            setTimeout(resolve, duration);
        });

    const onSubmit = async (values) => {
        await delay(300);
        values.teamOne ? setScoreOne(values.teamOne) : setScoreOne([]);
        values.teamTwo ? setScoreTwo(values.teamTwo) : setScoreTwo([]);
        alert(JSON.stringify(values, 0, 2));
    };

    const handleChange = () => {};

    return (
        <Style>
            <Form
                onSubmit={onSubmit}
                mutators={{ ...arrayMutators }}
                // initialValues={{ Goals: 0 }}
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
                                        onClick={() =>
                                            push("teamOne", undefined)
                                        }
                                    >
                                        Add Player
                                    </ButtonDefault>
                                </TdTeam>
                            </tr>
                            <hr />
                            <NewTeam name="teamOne" />
                        </ShowValues>
                        <ShowValues>
                            <tr>
                                <TdTeam>
                                    <Heading>TEAM #2</Heading>
                                </TdTeam>
                                <TdTeam>
                                    <ButtonDefault
                                        type="button"
                                        onClick={() =>
                                            push("teamTwo", undefined)
                                        }
                                    >
                                        Add Player
                                    </ButtonDefault>
                                </TdTeam>
                            </tr>
                            <hr />
                            <NewTeam name="teamTwo" />
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
                                        {scoreOne.length && (
                                            <TableBody
                                                score={scoreOne}
                                                team="team1"
                                                push={push}
                                            />
                                        )}
                                    </table>
                                </Td>
                                <Td>
                                    TEAM 2
                                    <table>
                                        <TableHead />
                                        {scoreTwo.length && (
                                            <TableBody
                                                score={scoreTwo}
                                                team="team2"
                                                push={push}
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
