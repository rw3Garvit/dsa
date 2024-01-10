let queue = [];
let head = 0;
let tail = queue.length - 1;
let size = 5;

function addIntoQueue(queue, element) {
  if (queue.length > size) {
    console.log("sorry");
  } else {
    queue.push(element);
    console.log(queue);
    tail = queue.length - 1;
  }
}

function remove() {
  queue.shift();
  console.log(queue);
}

function isEmpty(head, tail) {
  if (head == 0 && tail == -1) {
    console.log("empty");
  } else {
    console.log("available element", queue);
  }
}

console.log(head, tail);

addIntoQueue(queue, 5);

addIntoQueue(queue, 6);

addIntoQueue(queue, 7);
addIntoQueue(queue, 7);
addIntoQueue(queue, 7);
addIntoQueue(queue, 7);
addIntoQueue(queue, 7);

remove();

isEmpty(head, tail);
