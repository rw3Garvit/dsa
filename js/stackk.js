const stack = [];
let size = 5;

function print(stack) {
  if (stack.length === 0) {
    console.log("stack is underflow");
  } else {
    // for (let i = 0; i < stack.length; i++) {
    //   console.log(stack[i]);
    // }

    console.log(stack);
  }
}

function add(stack, element) {
  if (stack.length > 4) {
    console.log("stack is overflow");
  } else {
    stack.push(element);
  }
}

function remove(stack) {
  if (stack.length === 0) {
    console.log("stack is empty");
  } else {
    stack.pop();
  }
}

// print(stack);

add(stack, 5);
add(stack, 10);
add(stack, 13);
print(stack);
remove(stack);
remove(stack);
remove(stack);
print(stack);
