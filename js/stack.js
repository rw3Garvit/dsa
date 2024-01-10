let stack = [];

const stackPrint = (stack) => {
  if (stack.length === 0) {
    console.log("underflow");
  } else {
    for (let i = 0; i < stack.length; i++) {
      console.log(stack[i]);
    }
  }
};

const addIntoStack = (stack, element) => {
  stack.push(element);

  //   console.log(stack);
};

const pick = (stack) => {
  const element = stack.pop();

  console.log(element);
};

const deleteStackEle = (stack, element) => {
  //implement your self
};

addIntoStack(stack, 5);
addIntoStack(stack, 10);
addIntoStack(stack, 15);
stackPrint(stack);
pick(stack);
pick(stack);
