// code your solution here
function saturdayFun(activity = "roller-skate") {
  if (activity === "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  } else if (activity === "bathe my dog") {
    return `This Saturday, I want to ${activity}!`;
  } else {
    return `This Saturday, I want to ${activity}.`;
  }
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = "*") {
  return function (adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}
wrapAdjective("%")("a dedicated programmer");
