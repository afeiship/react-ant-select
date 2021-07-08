import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactAntSelect from '../src/main';
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
