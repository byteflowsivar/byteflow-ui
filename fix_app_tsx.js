const fs = require('fs');
const path = require('path');

const appTsxPath = path.join(__dirname, 'apps/example/src/App.tsx');
let appTsx = fs.readFileSync(appTsxPath, 'utf-8');

const packagesDir = path.join(__dirname, 'packages');
const packages = fs.readdirSync(packagesDir);

packages.forEach(pkg => {
  const pkgDir = path.join(packagesDir, pkg);
  const pkgJsonPath = path.join(pkgDir, 'package.json');
  
  if (fs.existsSync(pkgJsonPath)) {
    const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf-8'));
    const hasExport = pkgJson.exports && pkgJson.exports['./index.css'];
    
    // If it has export, use index.css
    // If not, use dist/index.css
    
    const searchStringDist = new RegExp(`@byteflow-ui/${pkg}/dist/index.css`, 'g');
    const searchStringReg = new RegExp(`@byteflow-ui/${pkg}/index.css`, 'g');
    
    if (hasExport) {
        appTsx = appTsx.replace(searchStringDist, `@byteflow-ui/${pkg}/index.css`);
    } else {
        appTsx = appTsx.replace(searchStringReg, `@byteflow-ui/${pkg}/dist/index.css`);
    }
  }
});

fs.writeFileSync(appTsxPath, appTsx);
console.log("App.tsx imports fixed!");
