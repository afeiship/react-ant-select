import noop from '@feizheng/noop';
import ReactList from '@feizheng/react-list';
import { Select } from 'antd';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const CLASS_NAME = 'react-ant-select';
const DEFAULT_TEMPLATE = ({ item, index }) => {
  return (
    <Select.Option key={item.value} value={item.value}>
      {item.label}
    </Select.Option>
  );
};

export default class ReactAntSelect extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * Default value.
     */
    value: PropTypes.object,
    /**
     * Placeholder.
     */
    placeholder: PropTypes.string,
    /**
     * The data source.
     */
    items: PropTypes.array,
    /**
     * The data item template.
     */
    template: PropTypes.func,
    /**
     * The change handler.
     */
    onChange: PropTypes.func
  };

  static defaultProps = {
    items: [],
    placeholder: '请选择',
    onChange: noop,
    template: DEFAULT_TEMPLATE
  };

  handleChange = (inValue) => {
    const { onChange } = this.props;
    onChange({
      target: { value: inValue }
    });
  };

  render() {
    const { className, onChange, ...props } = this.props;
    return (
      <ReactList
        nodeName={Select}
        data-component={CLASS_NAME}
        onChange={this.handleChange}
        className={classNames(CLASS_NAME, className)}
        {...props}
      />
    );
  }
}
