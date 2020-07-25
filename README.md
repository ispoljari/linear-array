# linear-array
> Returns an array filed with linearly increasing numbers, starting from 0 up to the given value - 1 (without offset), or from 1 to the value itself (with offset).


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

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save linear-array
```

## Usage

Works with safe integers greater than 0.

linearArray(value, [offset = 0])

```js
import linearArray from 'linear-array'; // web

OR;

const linearArray = require('linear-array'); // server

console.log(linearArray(1)); //=> [0]
console.log(linearArray(3)); //=> [0, 1, 2]
console.log(linearArray(5)); //=> [0, 1, 2, 3, 4]

console.log(linearArray(1, 1)); //=> [1]
console.log(linearArray(3, 2)); //=> [2, 3, 4]
console.log(linearArray(5, 3)); //=> [3, 4, 5, 6, 7]
```

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

### License

Copyright © 2020, [Ivan Spoljaric](https://github.com/ispoljari).
Released under the [MIT License](https://github.com/ispoljari/linear-array/blob/master/LICENSE.md).
