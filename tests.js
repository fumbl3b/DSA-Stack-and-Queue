const Stack = require('./Stack');

function main() {

  const starTrek = new Stack();
  const empty = new Stack();

  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scottie');

  console.log(starTrek.peek());
  console.log('starTrek.isEmpty():', starTrek.isEmpty());
  console.log('empty.isEmpty():', empty.isEmpty());
  starTrek.display();
  empty.display();
  starTrek.pop();
  starTrek.pop();
  starTrek.display();

}

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  const stack = new Stack();
  for(let i = s.length - 1; i >= 0; i--) {
    stack.push(s[i]);
    if(stack.top.data !== s[s.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function checkParens(s) {
  const stack = new Stack();

  for(let i = 0; i < s.length; i++) {
    if(s[i] === '(') {
      stack.push(i);
    }
    if(s[i] === ')') {
      if(stack.isEmpty()) {
        console.log(`extra closing parens at index ${i}`);
        return false;
      } else{
        stack.pop();
      }
    }
  }
  if(!stack.isEmpty()) {
    console.log(`missing closing parens for '(' at index ${stack.top.data}`);
    return false;
  }
  return true;
}

// True, true, true, false
console.log('asdf + ((4x) + 9) + (3/(8+2))', checkParens('asdf + ((4x) + 9) + (3/(8+2))'));
console.log('(()()()))())(', checkParens('(()()()))())('));
console.log('((())))', checkParens('((())))'));
console.log('(hello)(hello)(hello', checkParens('(hello)(hello)(hello'));

//main();