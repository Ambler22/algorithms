function isValid(s: string): boolean {
  for (let i = 0; i < s.length; i++) {
    if (i == 0 && s[i] == ")") {
      return false;
    } else if (s[i] == ")" && s[i - 1] == "(") {
      continue;
    } else {
      return false;
    }

    if (i == 0 && s[i] == "}") {
      return false;
    } else if (s[i] == "}" && s[i - 1] == "{") {
      continue;
    } else {
      return false;
    }

    if (i == 0 && s[i] == "]") {
      return false;
    } else if (s[i] == "]" && s[i - 1] == "[") {
      continue;
    } else {
      return false;
    }

    return true;
  }
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("((((((((((((((((((("));
