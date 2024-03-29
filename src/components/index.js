import noop from '@jswork/noop';
import ReactList from '@jswork/react-list';
import { Select } from 'antd';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import RctplAntSelect from '@jswork/rctpl-ant-select-default';

const CLASS_NAME = 'react-ant-select';

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
    value: PropTypes.any,
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
    template: PropTypes.func.isRequired,
    /**
     * The change handler.
     */
    onChange: PropTypes.func
  };

  static defaultProps = {
    items: [],
    placeholder: '请选择',
    onChange: noop,
    template: RctplAntSelect
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
        allowEmpty
        nodeName={Select}
        data-component={CLASS_NAME}
        onChange={this.handleChange}
        className={classNames(CLASS_NAME, className)}
        {...props}
      />
    );
  }
}
