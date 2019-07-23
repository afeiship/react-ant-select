import ReactAntSelect from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';
import 'next-ant-build-items';

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
    ],
    items2: nx.antBuildItems(['simple1', 'simple2', 'simpl4']),
    items3: nx.antBuildItems(['simple1', 'simple2', 'simpl4'], true)
  };

  constructor(props) {
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _onChange1 = (e) => {
    console.log(e);
  };

  _onChange2 = (e) => {
    console.log(e);
  };

  render() {
    return (
      <div className="hello-react-ant-select">
        <div>
          <ReactAntSelect
            onChange={this._onChange1}
            style={{ width: 200 }}
            items={this.state.items}
            ref="rc"
          />
        </div>
        <div>
          <ReactAntSelect
            onChange={this._onChange2}
            style={{ width: 200 }}
            items={this.state.items2}
            ref="rc2"
          />
        </div>
        <div>
          <ReactAntSelect
            onChange={this._onChange2}
            style={{ width: 200 }}
            items={this.state.items3}
            ref="rc3"
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
