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

function sortStack(stack) {
  if(stack.isEmpty()) {
    return null;
  }

  const sorted = new Stack();
  let n = null;
  let endLength = stack.length();

  //take top of stack and assign it to variable
  //iterate through stack checking to see if anything larger than variable
    //if so -> set variable to larger value
  //at end of stack pop push to sorted
  //repeat unti









  sorted.push(stack.pop());
  let node = stack.top;

  while(true) {
    if(stack.top.data >= sorted.top.data) {
      n = sorted.pop();
      sorted.push(stack.pop());
      sorted.push(n);
      n = null;
    }
    while(node.next) {
      if(node.data >= sorted.peek()) {
        sorted.push(stack.pop());
      } else {
        n = stack.pop();
      }
      node = node.next;
      }
    }
    sorted.push(n);
    n = null;
    if (sorted.length() === endLength) {
      return sorted;
    }
  }

  while(node.next) {
    if(node.data > n) {
      n = node.data;
    }
    node = node.next;
  }
  sorted.push(n);

  node = stack.top;
  while(count) {}
  while(node.next) 
    if(node.data <= sorted.top.data) {
      sorted.push(node.data);
    }
  }
  return sorted;
}

// console.log('asdf + ((4x) + 9) + (3/(8+2))', checkParens('asdf + ((4x) + 9) + (3/(8+2))'));
// console.log('(()()()))())(', checkParens('(()()()))())('));
// console.log('((())))', checkParens('((())))'));
// console.log('(hello)(hello)(hello', checkParens('(hello)(hello)(hello'));

const sortMe = new Stack();
sortMe.push(3);
sortMe.push(8);
sortMe.push(2);
sortMe.push(4);
sortMe.push(3);
sortMe.push(0);
sortMe.display();
sortStack(sortMe);
sortMe.display();


//main();