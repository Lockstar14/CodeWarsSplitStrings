function solution(str) {
  let pattern = /\w{2}/g;
  let finding = str.match(pattern);
  if (!finding) {
    return [];
  }
  if (str.length % 2 !== 0) {
    finding.push(str[str.length - 1] + "_");
  }
  return finding;
}

console.log(solution("jds"));
