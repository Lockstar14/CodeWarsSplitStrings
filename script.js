function solution(str) {
  let pattern = /\w{2}/g
  let finding = str.match(pattern)
  return finding
}

console.log(solution("abcdef"))