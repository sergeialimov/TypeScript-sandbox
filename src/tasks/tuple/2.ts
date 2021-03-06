// What is the inferred type of scores?

function merge<Names extends string[], Scores extends number[]>(
  names: Names,
  scores: Scores,
): (number | string)[] {
  return [...names, ...scores];
}

const res = merge(['a', 'b'], [1, 2]);
console.log(res);
