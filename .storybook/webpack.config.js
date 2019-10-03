const path = require('path');

module.exports = async ({ config, mode }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    SassUtils: path.resolve(__dirname, '../src/sass-utilities/'),
    atom: path.resolve(__dirname, '../src/atom/'),
    skycode: path.resolve(__dirname, '../src/skycode/src'),
  };

  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
        }
      },
      'sass-loader'
    ],
    include: path.resolve(__dirname, '../'),
  });

  config.resolve.extensions.push('.svg');

  config.module.rules = config.module.rules.map( data => {
      if (/svg\|/.test( String( data.test ) ))
          data.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;

      return data;
  });

  config.module.rules.push({
      test: /\.svg$/,
      use: ['svg-react-loader']
  });

  return config;
};

