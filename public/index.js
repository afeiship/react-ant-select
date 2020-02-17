import ReactAntSelect from '../src/main';
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
