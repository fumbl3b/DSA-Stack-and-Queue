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

main();