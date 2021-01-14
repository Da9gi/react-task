export function caseUpdate(team) {
  let result = team.map((item, index) => {
    let goals = [...item.goals];
    let temp = goals.length;
    if (temp !== item.total_goals) {
      goals.splice(item.total_goals, temp - item.total_goals);
    }
    return { ...item, goals: [...goals] };
  });
  return [...result];
}

export function assignTeam(team) {
//   console.log("Team : ", team);
  return [
    ...team.map((item) => {
      return {
        ...item,
        goals: [...item.goals],
      };
    }),
  ];
}
