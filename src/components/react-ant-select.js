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
    template: PropTypes.func,
  };

  static defaultProps = {
    items: [],
    placeholder: '请选择'
  };
  /*===properties end===*/

  render() {
    const { className, items, template, ...props } = this.props;
    return (
      <Select {...props} className={classNames('react-ant-select',className)}>
        {
          (items.length > 0) && items.map((item, index) => {
            return template ? template(item, index) : (
              <Select.Option key={item.value} value={item.value}>{ item.label }</Select.Option>
            );
          })
        }
      </Select>
    )
  }
}
