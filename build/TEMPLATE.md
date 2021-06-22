# react-ant-select
> React ant select builder.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-ant-select
```

## properties
__GENERATE_DOCS__

## usage
1. import css
  ```scss
  @import "~@jswork/react-ant-select/dist/style.css";

  // or use sass
  @import "~@jswork/react-ant-select/dist/style.scss";

  // customize your styles:
  $react-ant-select-options: ()
  ```
2. import js
  ```js
__GENERATE_DAPP__
  ```

## tempalte migrate
```jsx
import ReactAntSelect from '@jswork/react-ant-select';
import RctplAntSelectDefault from '@jswork/rctpl-ant-select-default';

Object.assign(
  ReactAntSelect.defaultProps, 
  { template: RctplAntSelectDefault }
);
```

## documentation
- https://afeiship.github.io/react-ant-select/


## license
Code released under [the MIT license](https://github.com/afeiship/react-ant-select/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-ant-select
[version-url]: https://npmjs.org/package/@jswork/react-ant-select

[license-image]: https://img.shields.io/npm/l/@jswork/react-ant-select
[license-url]: https://github.com/afeiship/react-ant-select/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-ant-select
[size-url]: https://github.com/afeiship/react-ant-select/blob/master/dist/react-ant-select.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-ant-select
[download-url]: https://www.npmjs.com/package/@jswork/react-ant-select
