import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';
import { Select } from 'antd';

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

  handleChange = (inEvent) => {
    const { onChange } = this.props;
    onChange({
      target: { value: inEvent }
    });
  };

  render() {
    const { className, items, template, onChange, ...props } = this.props;
    return (
      <Select
        onChange={this.handleChange}
        className={classNames('react-ant-select', className)}
        {...props}>
        {items.map((item, index) => template({ item, index }))}
      </Select>
    );
  }
}
