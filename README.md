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
| Name        | Type   | Required | Default        | Description                           |
| ----------- | ------ | -------- | -------------- | ------------------------------------- |
| className   | string | false    | -              | The extended className for component. |
| value       | any    | false    | -              | Default value.                        |
| placeholder | string | false    | '请选择'       | Placeholder.                          |
| items       | array  | false    | []             | The data source.                      |
| template    | func   | false    | RctplAntSelect | The data item template.               |
| onChange    | func   | false    | noop           | The change handler.                   |


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
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactAntSelect from '@jswork/react-ant-select';
  import Tpl1 from '@jswork/rctpl-ant-select-default';
  import './assets/style.scss';

  class App extends React.Component {
    state = {
      items2: ['001', '002', '003'],
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
      console.log('value:', inEvent.target.value);
    };

    render() {
      const { items, items2 } = this.state;

      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-ant-select">
          <h1>Has value:</h1>
          <ReactAntSelect
            template={Tpl1}
            items={items}
            onChange={this.handleChange}
          />
          <ReactAntSelect
            template={Tpl1}
            items={items2}
            onChange={this.handleChange}
          />
          <h1>Select is empty</h1>
          <ReactAntSelect items={[]} onChange={this.handleChange} />
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

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
