console.log("Hello World!\n==========\n");

// Exercise 1 Section
function printOdds(count) {
  for (let i = 1; i <= count; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}

printOdds(100);

// Exercise 2 Section
function checkAge(userName, age) {
  let oldEnoughMsg = `Congrats ${userName}! you can drive!`;
  let tooYoungMsg = `Sorry ${userName}, you need to wait ${
    16 - age
  } year(s) until you can drive.`;

  if (age < 16) {
    console.log(tooYoungMsg);
  } else {
    console.log(oldEnoughMsg);
  }
}

checkAge("Kendall", 14);
checkAge("Mark", 16);
checkAge("Mike", 23);

// Exercise 3 Section

function checkQuadrant(x, y) {
  if (x > 0 && y > 0) {
    return "Quadrant 1";
  } else if (x < 0 && y > 0) {
    return "Quadrant 2";
  } else if (x < 0 && y < 0) {
    return "Quadrant 3";
  } else if (x > 0 && y < 0) {
    return "Quardrant 4";
  } else if (x == 0 && y != 0) {
    return "X axis";
  } else if (x != 0 && y == 0) {
    return "Y Axis";
  } else {
    return "origin";
  }
}

console.log(checkQuadrant(1, 1));
console.log(checkQuadrant(-1, 1));
console.log(checkQuadrant(-1, -1));
console.log(checkQuadrant(1, -1));
console.log(checkQuadrant(0, -1));
console.log(checkQuadrant(1, 0));
console.log(checkQuadrant(0, 0));

// Exercise 4 Section
function isValidTriangle(a, b, c) {
  return a + b > c && a + c > b && b + a > a;
}
function checkTriangle(a, b, c) {
  let isValid = isValidTriangle(a, b, c);
  if (isValid) {
    if (a == b && b == c) {
      return `Eauilateral`;
    } else if (a == b || b == c || a == c) {
      return `Isoceles`;
    } else {
      return `Scalene`;
    }
  } else {
    return `Not a valid triangle`;
  }
}

console.log(checkTriangle(2, 3, 4));
console.log(checkTriangle(2, 2, 2));
console.log(checkTriangle(1, 2, 2));
console.log(checkTriangle(1, 1, 2));

// Exercise 4 Section

function dataUsageFeedback(planLimit, day, usage) {
  let periodLength = 30;
  let currentAvg = usage / day;
  let projectedAvg = planLimit / periodLength;
  let remainingDays = periodLength - day;
  let remainingData = planLimit - usage;
  let projectedUsage = remainingDays * currentAvg;
  let statusMsg;

  console.log(`${day} day(s) used, ${remainingDays} day(s) remaining`);
  console.log(`Average daiy use: ${projectedAvg} GB/day`);

  if (currentAvg > projectedAvg) {
    statusMsg = "Exceeding";
  } else if (currentAvg < projectedAvg) {
    statusMsg = "Under";
  } else {
    statusMsg = "At Limit";
  }

  console.log(`${day} day(s) used, ${remainingDays} day(s) remaining.
  Average daiy use: ${projectedAvg.toFixed(2)} GB/day.
  You are ${statusMsg} your average daily use ${currentAvg.toFixed(2)} GB/day,
    continuing this high usage, you'll end up using ${
      planLimit - (usage + projectedUsage)
    } GB from your data limit.
    to stay below your data plan, use no more than ${(
      remainingData / remainingDays).toFixed(2)
    } GB/day`);
}

dataUsageFeedback(100, 15, 56);
