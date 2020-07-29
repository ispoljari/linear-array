# linear-array

> Javascript / Node.js utility library. Returns a set of utility functions, available through the lineArr namespace, which serve to generate arrays populated with sequences such as natural or stepWithOffset sequence, and to check if an array is a sequence of a certain type (like a natural sequence [0,1,2,3,4]).

## Install

There are 2 ways to install and use the library.

1. [`npm`](https://www.npmjs.com/)

```sh
$ npm install --save linear-array
```

2. import with a [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) tag

```js
<script
  type="module"
  src="https://unpkg.com/linear-array@2.0.0/linear-array.js"
></script>
```

## Importing in project

Since this package can be used on the client side, as `UMD` or `ES6` module, and server side, as `CommonJS` module, there are 2 ways to import it into your .js file:

- `CommonJS`

```js
const lineArr = require('linear-array');
```

- `ES6`

```js
import lineArr from 'linear-array';
```

- `UMD`

Use the globally available `lineArr` module directly in your code.

It is being imported from the `linear-array` liibrary with the `<script>` tag, and is attached to the globally available `window` variable.

## Usage

Currently, there are 4 methods available through the `lineArr` module / namespace.

Based on the differences in their input and output data types, they can be divided into 2 categories;

1. inputs / arguments are finite integers, the output value is a filled array of finite integers sorted in an increasing order according to a specific pattern
2. input / argument is an array of finite integers, and the output value is a boolean which indicates it the given array conforms to a specific pattern

But both categories operate on the same pattern of data types, and these patterns can be categorized in a mathematical sense as [Sequences](https://en.wikipedia.org/wiki/Sequence).

But, repetition of numbers in the arrays is not allowed.

### **Sequence of natural numbers**

### `fillSeqNaturalNumbers (limiter: number, [includeLast = false]: boolean) => number[]`

```js
fillSeqNaturalNumbers(limiter, inludeLast?) === [0, 1, 2, 3, ... , includeLast ? limiter : (limiter - 1)]

(7) -> [0, 1, 2, 3, 4, 5, 6]

(7, true) -> [0, 1, 2, 3, 4, 5, 6, 7]

```

### `isSeqNaturalNumbers(arr: number[]) => boolean`

```js
isSeqNaturalNumbers(arr) === true || false

([0,1,2,3,4]) -> true

([2,3,4,5,6]) -> false

([0,1,2,3,5]) -> false

```

### **Sequence of numbers with a specified fixed step and offset**

### `fillStepSequenceWithOffset (limiter: number, [step = 1]: number, [offset = 0]: number) => number[]`

```js
fillStepSequenceWithOffset(limiter, step?, offset?) === [0+offset, step + offset, 2*step + offset, ..., (limiter - 1)*step + offset]

(5) -> [0, 1, 2, 3, 4]

(5,1,3) -> [3, 4, 5, 6, 7]

(5,3) -> [0, 3, 6, 9, 12]

(5,2,2) -> [2, 4, 6, 8, 10]
```

### `isStepSequenceWithOffset (arr: number[], [step = 1]: number, [offset = 0]: number) => boolean`

```js
isStepSequenceWithOffset(arr, step?, offset?) === true || false

([0,1,2,3,4]) -> true

([0,1,2,3,4], 2) -> false

([0,1,2,3,4], 1, 1) -> false

([1,2,3,4,5], 1, 1) -> true

([6,9,12,15,18], 3, 6) -> true

([5,9,12,15,19], 3, 6) -> false
```

## Release history

### **2.0.0.**

**BREAKING CHANGES:**

The _linearArray_ method no longer exists and it is not imported directly from the library.

Instead, a module called **lineArr** is imported and it contains a set of methods. See the **Usage** section on what they are and how they are used.

**NEW FEATURES:**

This update has 4 new methods which can be accessed through the **lineArr** module.

- lineArr.**fillSeqNaturalNumbers**

- lineArr.**isSeqNaturalNumbers**

- lineArr.**fillStepSequenceWithOffset**

- lineArr.**isStepSequenceWithOffset**

## About

<details>
<summary><strong>Contributing</strong></summary>

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

</details>

<details>
<summary><strong>Running Tests</strong></summary>

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

</details>

## Contributors ✨

Many thanks goes to these people for helping me maintain and upgrade the project:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/aminnairi"><img src="https://avatars3.githubusercontent.com/u/18418459?v=4" width="100px;" alt=""/><br /><sub><b>Amin NAIRI</b></sub></a><br /><a href="https://github.com/ispoljari/linear-array/commits?author=aminnairi" title="Code">💻</a> <a href="#ideas-aminnairi" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/ispoljari/linear-array/commits?author=aminnairi" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## Author

**Ivan Spoljaric**

- [LinkedIn](https://www.linkedin.com/in/ivan-špoljarić-2206a184)

## License

Copyright © 2020, [Ivan Spoljaric](https://github.com/ispoljari).
Released under the [MIT License](https://github.com/ispoljari/linear-array/blob/master/LICENSE.md).
