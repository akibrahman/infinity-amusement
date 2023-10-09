<div align="center">
  <img style="border-radius:100px;" height="60" src="https://avatars.githubusercontent.com/u/67223555?v=4">
  <h1>MCQ TEST ANSWER</h1>
  <h3>Submitted by Akib Rahman</h3>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: - A: `{}`

<i>The answer is A because at first in the code, there assigned a variable named 'greeting' but after the rest of the code, that 'greeting variable have not be used anywhere rather there declared a variable named 'greetign' ( 'greeting' & 'greetign' not same -- Spelling different) without using `let` `var` or `const` keyword and value is setted to `{}`. So, JS automaticlly declared 'greetign' as a global variable and after that 'greetign' is console.logged, So we are getting the result `{}`</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: - C: `"12"`

<i>Basically there will be no output but if we `console.log()` that `function` like `console.log(sum(1,"2"));` then we will get the result `"12"` and the dataType of that result will be a `string` because in the `sum` function we are sending two arguments, one is `number` data typed and another one is `string` data typed because the second argument is set like `"2"` i mean in a qutation mark so, that one is going as a string. As second argument is set as a string so there will be nothing like mathmetical addition, just the second argument is sitting beside the first argument and the answer is like `"12"`</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: - A: `['🍕', '🍫', '🥑', '🍔']`

<i>Here the answer is very simple 'A'. Because at first here we are creating an array named `food` and we are setting some foods in that array. After that we are creating an object named `info` and we're creating a property of this object named `favoritefood` and setting It's value to the first index, I mean 0th index of that food array. After that, we're changing the value of `favoritefood` property of that object. But lastly, we are consolling log the `food` array.So we will simply get that food array as a output.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: - B: `Hi there, undefined`

<i>Hear the clear answer is B, because at first we are creating a function named, `sayHi` and it's have a parameter named `name` and it's returning `hi there,` After that, the value of that parameter `name` .After that the function is called in a console log with giving empty arguments. That means that function is receiving empty argument. That means that function have a variable named `name` and we're setting nothing to that variables. So that the variable is being undefined. And after that, it's Returning `Hi there, undefined`. So the answer is B.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: - C: 3

<i> Here the answer is C Because at first we're Declaring a variable named `count`. And after that, we're declaring a Array named `nums`. After that, we're running a foreach method on that array and We are getting each element of that array as `num`. After that, we are checking that if `num` is a Truethy value or not, if truethy then add `1` with that `count` variable we have declared very beginning. So here firstly coming`0`, which is Falsey value. So the task under the `if` condition is not executing, after that here is coming `1` and the task under the condition is executing after that `2` is coming and again the task under that condition is running after that `3` is coming and again that task under the condition is executing. So under the condition that task is executing for total of 3 times. So here 1 is adding with that `count` variable for three times and the base value of `count` was `0`. So the ultimate value of `count` is `3`.</i>

</p>
</details>
