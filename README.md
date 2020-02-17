# react-ant-select
> React ant select builder.

## installation
```shell
npm install -S @feizheng/react-ant-select
```

## update
```shell
npm update @feizheng/react-ant-select
```

## properties
| Name        | Type   | Default  | Description                           |
| ----------- | ------ | -------- | ------------------------------------- |
| className   | string | -        | The extended className for component. |
| value       | object | -        | Default value.                        |
| placeholder | string | '请选择' | Placeholder.                          |
| items       | array  | []       | The data source.                      |
| template    | func   | -        | The data item template.               |
| onChange    | func   | noop     | The change handler.                   |


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
