function getTheGroup(n = 0, querryType = [], st1 = [], st2 = []) {
  let final = [];
  let result = [];
  for (let i = 0; i < n; i++) {
    if (st1[i] || st2[i] || querryType[i]) {
      if (st1[i] !== st2[i]) {
        if (querryType[i] === "friend" || querryType[i] === "Friend") {
          if (final[i - 1]) {
            final[i - 1].includes(st1[i])
              ? final[i - 1].push(st2[i])
              : final[i - 1].includes(st2[i])
              ? final[i - 1].push(st1[i])
              : final.push([st1[i], st2[i]]);
          } else {
            final.push([st1[i], st2[i]]);
          }
          console.log("final: F:", i, " : ", final);
        } else if (querryType[i] === "total" || querryType[i] === "Total") {
          console.log("final: T:", i, " : ", final);
          let temp = 0;
          final.map((item) => {
            if (item.includes(st1[i])) {
              final.push([st2[i]]);
            } else if (item.includes(st2[i])) {
              final.push([st1[i]]);
            }
            return item;
          });
          console.log("final Toral: ", final);
          final.map((item, index) => {
            console.log("Result: ", index, " : ", result);
            console.log("temp: ", temp);
            if (item.includes(st1[i]) && item.includes(st2[i])) {
              result.push(item.length + item.length);
              return item;
            } else if (item.includes(st1[i])) {
              console.log(final);
              if (temp) result.push(temp + item.length);
              console.log("result:1: ", result);
              temp = item.length;
              return item;
            } else if (item.includes(st2[i])) {
              console.log(final);
              if (temp) result.push(temp + item.length);
              console.log("result:2: ", result);
              temp = item.length;
              return item;
            }
            return item;
          });
          temp = 0;
        }
      }
    }
  }
  console.log(result);
  return result;
}

let n = 5;
let querryType = ["Friend", "Friend", "Total", "Friend", "Total"];
let st1 = [1, 2, 1, 5, 2];
let st2 = [2, 3, 4, 4, 5];

let result = getTheGroup(n, querryType, st1, st2);

console.log("Result : ", result);
