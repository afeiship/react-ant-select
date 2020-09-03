# react-ant-select
> React ant select builder.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @feizheng/react-ant-select
```

## update
```shell
npm update @feizheng/react-ant-select
```

## properties
| Name        | Type   | Required | Default  | Description                           |
| ----------- | ------ | -------- | -------- | ------------------------------------- |
| className   | string | false    | -        | The extended className for component. |
| value       | object | false    | -        | Default value.                        |
| placeholder | string | false    | '请选择' | Placeholder.                          |
| items       | array  | false    | []       | The data source.                      |
| template    | func   | false    | -        | The data item template.               |
| onChange    | func   | false    | noop     | The change handler.                   |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-ant-select/dist/style.scss";

  // customize your styles:
  $react-ant-select-options: ()
  ```
2. import js
  ```js
  import ReactAntSelect from '@feizheng/react-ant-select';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import './assets/style.scss';

  class App extends React.Component {
    state = {
      items: [
        {
          value: 'op1',
          label: 'option1d'
        },
        {
          value: 'op2',
          label: 'option2d'
        },
        {
          value: 'op3',
          label: 'option3d'
        }
      ]
    };

    handleChange = (inEvent) => {
      console.log('inEvent.target.value', inEvent.target.value);
    };

    render() {
      const { items } = this.state;
      return (
        <div className="app-container">
          <ReactAntSelect items={items} onChange={this.handleChange} />
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-ant-select/


## license
Code released under [the MIT license](https://github.com/afeiship/react-ant-select/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/react-ant-select
[version-url]: https://npmjs.org/package/@feizheng/react-ant-select

[license-image]: https://img.shields.io/npm/l/@feizheng/react-ant-select
[license-url]: https://github.com/afeiship/react-ant-select/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/react-ant-select
[size-url]: https://github.com/afeiship/react-ant-select/blob/master/dist/react-ant-select.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/react-ant-select
[download-url]: https://www.npmjs.com/package/@feizheng/react-ant-select
