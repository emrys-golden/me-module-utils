const path = require('path');
const fs = require('fs');

const getPackageDetails = () => {
  const packageRoot = process.cwd();
  const packageJSON = fs.readFileSync(path.join(packageRoot, 'package.json'), 'utf-8');

  const { name, version } = JSON.parse(packageJSON);

  let packageName = name;

  const parts = name.split('/');

  if (parts.length > 1) {
    packageName = parts.pop();
  }

  return {
    name: packageName,
    version,
    packageRoot,
  };
};

module.exports = getPackageDetails;
