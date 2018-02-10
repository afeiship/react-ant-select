import React,{Component} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import { Select } from 'antd';

export default class extends Component{
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    items: PropTypes.array,
  };

  static defaultProps = {
    items: [],
    placeholder: '请选择'
  };

  /*===properties end===*/

  static build(inArray, inUseSelf){
    return inArray.map((item,index)=>{
      const value = inUseSelf ? item : index;
      return {
        text: item,
        value
      };
    });
  }

  render() {
    const { className, items, ...props } = this.props;
    return (
      <Select {...props} className={classNames('react-ant-select',className)}>
        {
          (items.length > 0) && items.map((item, key) => {
            return (
              <Select.Option key={item.value} value={item.value}>{ item.text }</Select.Option>
            );
          })
        }
      </Select>
    )
  }
}
