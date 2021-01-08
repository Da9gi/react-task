export default function caseUpdate(team) {
  let result = team.map((item, index) => {
    let goals = [...item.goals];
    let temp = goals.length;
    if (temp !== item.total_goals) {
      goals.splice(item.total_goals, temp - item.total_goals);
      console.log(goals);
    }
    return { ...item, goals: [...goals] };
  });
  return [...result];
}
