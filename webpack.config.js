module.exports = {
  module: {
    rules: [
      {
        loader: 'webpack-ant-icon-loader',
        enforce: 'pre',
        // options:{
        //   chunkName:'antd-icons'
        // },
        include: [require.resolve('@ant-design/icons/lib/dist')],
      },
    ],
  },
};
