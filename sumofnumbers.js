const numberList = [1, 2, 3, 4, 5];

// for-loop function.
function sumFor(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}

console.log(sumFor(numberList));

// while-loop function.
function sumWhile(nums) {
  let sum = 0;
  let index = 0;
  while (index < nums.length) {
    sum += nums[index];
    index += 1;
  }
  return sum;
}

console.log(sumWhile(numberList));

// recursion function
function sumRecursion(nums, index) {
  if (index === nums.length) {
    return 0;
  }
  return nums[index] + sumRecursion(nums, index + 1);
}

console.log(sumRecursion(numberList, 0));

// underscore function
function sumTheSimpleWay(nums) {
  return _.reduce(nums, (memo, num) => memo + num, 0);
}

console.log(sumTheSimpleWay(numberList));
