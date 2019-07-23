# react-ant-select
> React ant select builder.

## install
```shell
npm install -S afeiship/react-ant-select
```

## usage
1. import css
  ```scss
  @import "~react-ant-select/style.scss";

  // customize your styles:
  $react-ant-select-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactAntSelect from 'react-ant-select';
  
  // your app:
  class App extends React.Component{
    render(){
      return (
        <ReactAntSelect />
      )
    }
  }

  // render to dom:
  ReactDOM.render(<App/>, document.getElementById('app'));
  ```

## documentation
- https://afeiship.github.io/react-ant-select/
