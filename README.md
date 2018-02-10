# react-ant-select
> React ant select builder.


## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    items: PropTypes.array,
  };

  static defaultProps = {
    items: [],
    placeholder: '请选择'
  };
  
```

## usage:
```jsx

// install: npm install afeiship/react-ant-select --save
// import : import ReactAntSelect from 'react-ant-select'

class App extends React.Component{
  state = {
    items:[
      {
        value:'op1',
        text:'option1d'
      },
      {
        value:'op2',
        text:'option2d'
      },
      {
        value:'op3',
        text:'option3d'
      }
    ],
    items2: nx.antBuildItems(['simple1','simple2','simpl4']),
    items3: nx.antBuildItems(['simple1','simple2','simpl4'], true)
  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _onChange1 = e =>{
    console.log(e);
  };

  _onChange2 = e =>{
    console.log(e);
  };

  render(){
    return (
      <div className="hello-react-ant-select">
        <p>
          <ReactAntSelect onChange={this._onChange1} style={{ width:200}} items={this.state.items} ref='rc' />
        </p>
        <p>
          <ReactAntSelect onChange={this._onChange2} style={{ width:200}} items={ this.state.items2  } ref='rc2' />
        </p>
        <p>
        <ReactAntSelect onChange={this._onChange2} style={{ width:200}} items={ this.state.items3  } ref='rc3' />
        </p>
    </div>
    );
  }
}

```

## customize style:
```scss
// customize your exception styles:
$react-ant-select-options:(
);

@import '~node_modules/react-ant-select/style.scss';
```
