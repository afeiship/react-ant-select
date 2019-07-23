import baseConfig from '.';
import merge from 'webpack-merge';
import {
  configs,
  inputs,
  outputs,
  loaders,
  plugins,
  externals
} from 'webpack-lib-kits';

export default merge(baseConfig, {
  entry: inputs.build(),
  output: outputs.build(),
  externals: externals.base({
    antd: 'antd',
    'next-stub-event': 'next-stub-event'
  }),
  plugins: [plugins.clean(), plugins.copyStyles()]
});
