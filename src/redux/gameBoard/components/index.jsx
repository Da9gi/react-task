import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Form } from "react-final-form";
import arrayMutators from "final-form-arrays";
import Style, {
  ButtonSubmit,
  ShowValues,
  Heading,
  ButtonReset,
} from "../styles/Styles";
import { parse, stringify } from "../../../utilities/utility";
import { GetScore, RemoveScore, SaveScore } from "../actions";
import NewTeam from "./newTeam";
import Summary from "./summary";

function GameBoard({ score, load, save, remove }) {
  useEffect(() => {
    load();
  }, [load]);
  const delay = (duration) =>
    new Promise((resolve) => {
      setTimeout(resolve, duration);
    });

  const onSubmit = async (values) => {
    await delay(300);
    save({
      ...values,
      teamOne: [...values.teamOne],
      teamTwo: [...values.teamTwo],
    });
    console.log(stringify(values, 0, 2));
  };

  const setGoals = ([index, value, team], state, tools) => {
    tools.changeValue(state, `${team[index].goals}`, (goals) => {
      const value1 = parse(stringify(goals));
      const diff = value - value1.length;
      if (diff < 0) {
        value1.splice(value1.length - Math.abs(diff) - 1, Math.abs(diff));
      } else {
        new Array(diff).fill(0).forEach(() => value1.push({ minute: null }));
      }
      return value1;
    });
  };

  const setInitialValue = ([values], state, { changeValue }) => {
    changeValue(state, values, (value) => {
      remove();
      return value;
    });
  };

  return (
    <Style>
      <Form
        onSubmit={onSubmit}
        mutators={{ ...arrayMutators, setGoals, setInitialValue }}
        initialValues={{ ...score } || { teamOne: [], teamTwo: [] }}
        render={({
          handleSubmit,
          values,
          submitting,
          form: {
            mutators: { push, setGoals, setInitialValue },
          },
          pristine,
        }) => (
          <React.Fragment>
            <NewTeam
              teamName="teamOne"
              push={push}
              heading="TEAM #1"
              values={values}
              setGoals={setGoals}
            />
            <NewTeam
              teamName="teamTwo"
              push={push}
              heading="TEAM #2"
              values={values}
              setGoals={setGoals}
            />
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
                <Summary
                  heading="Team 1"
                  teamName="teamOne"
                  team={values.teamOne}
                />
                <Summary
                  heading="Team 2"
                  teamName="teamTwo"
                  team={values.teamTwo}
                />
              </tr>
            </ShowValues>
          </React.Fragment>
        )}
      />
    </Style>
  );
}

const mapStateToProps = (state) => {
  return {
    score: state.score,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    load: () => dispatch(GetScore()),
    save: (payload) => dispatch(SaveScore(payload)),
    remove: () => dispatch(RemoveScore()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
