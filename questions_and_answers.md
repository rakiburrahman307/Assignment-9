

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>- B `ReferenceError: greetign is not defined`</b></summary>
<p>

#### Answer: ?

<i>There is a typo in the variable name.</i>

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

<details><summary><b>- C: `"12"`</b></summary>
<p>

#### Answer: ?

<i>When the function is called with sum(1, "2"), JavaScript performs implicit type conversion, converting the number 1 to a string and concatenating it with the string "2"</i>

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

<details><summary><b>- A: `['🍕', '🍫', '🥑', '🍔']`</b></summary>
<p>

#### Answer: ?

<i>The info.favoriteFood property is assigned the value "🍝" and console the food.so teh result is same no change.</i>

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

<details><summary><b>- B: `Hi there, undefined`</b></summary>
<p>

#### Answer: ?

<i>The template literal "Hi there, ${name}" concatenates "Hi there, " with the value of name, which is undefined.</i>

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

<details><summary><b>- C: 3</b></summary>
<p>

#### Answer: ?

<i>The forEach method iterates over each element in the nums array.
The arrow function (num) => { if (num) count += 1; } is called for each element.
The condition if (num) checks if the current element is truthy (not equal to 0).
For the elements 1, 2, and 3, the condition is true, so count is incremented.
The final value of count is the number of truthy values in the array, which is 3.
</i>

</p>
</details>
