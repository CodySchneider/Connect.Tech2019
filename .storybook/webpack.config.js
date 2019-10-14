const path = require('path');

module.exports = async ({ config, mode }) => {
  // Setup some aliases for easy imports
  config.resolve.alias = {
    ...config.resolve.alias,
    SassUtils: path.resolve(__dirname, '../src/sass-utilities/'),
    atom: path.resolve(__dirname, '../src/atom/'),
    molecule: path.resolve(__dirname, '../src/molecule/'),
    organism: path.resolve(__dirname, '../src/organism/'),
    skycode: path.resolve(__dirname, '../src/skycode/src'),
    inViewport: path.resolve(__dirname, '../src/inViewport/src'),
    translations: path.resolve(__dirname, '../src/translations/src'),
    'isomorphic-style-loader/withStyles': path.join(
      __dirname,
      '__mocks__/withStyles.js',
    ),
  };

  // Basic SASS and CSS modules setup
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

  // Remove pre-existing SVG stuff from rules so that we can use svg-react-loader for inline SVG
  config.module.rules = config.module.rules.map( data => {
      if (/svg\|/.test( String( data.test ) ))
          data.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;

      return data;
  });

  // Use svg-react-loader for inline SVG React components
  config.module.rules.push({
      test: /\.svg$/,
      use: ['svg-react-loader']
  });

  return config;
};

