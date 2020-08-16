const path = require('path');

module.exports = ({ root, platform }, defaults) => ({
  ...defaults,
  context: path.resolve(root, 'src'),
  entry: [`./Main.qml`, `./index.tsx`],
  output: {
    path: path.join(root, 'qml'),
    filename: `${platform}.bundle.js`,
    library: 'Bundle',
    libraryTarget: 'var',
    libraryExport: 'default',
  },
  watch: true,
 });
