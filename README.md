# JetBrains Task: CSS Build Process with Webpack

A specialized frontend setup demonstrating a professional build pipeline where authored CSS is collected, transformed, and optimized through a bundler-based workflow.


## Why Webpack
Webpack was selected to provide **explicit control over CSS extraction and source map generation**, particularly in production builds.    

Its seamless integration of CSS processing tools:    
* **Granular Control**: Precise management of CSS transformations via loaders.    

* **Bundling Excellence**: Seamlessly aggregates multiple source files into optimized production assets using MiniCssExtractPlugin.    

* **Reliability**: Can generate accurate source maps in complex build environments.    

## 🛠️ Setup and Run Instructions
### Prerequisites:

* **Node.js**: v18.0.0 or higher (Developed and tested on v24.x)

* **npm**: v9.x or higher

### Clone the repository:

```bash
git clone https://github.com/Tarcisio2code/jetbrains-css-build-task.git
cd jetbrains-css-build-task
```

### Install dependencies:
```bash
npm install
```

### Run in Development server:
```bash
npm run dev
```
_This starts a local development server using webpack-dev-server with automatic rebuilds on file changes._    

### Build the project (Production):
```bash
npm run build
```
_This command generates the final production assets in the dist/ directory._

## 🔄 How Authored CSS is Transformed
The CSS in this project undergoes a multi-stage transformation before reaching the browser. This ensures the final output is optimized and different from the source files:

* **Collection**: Webpack starts at src/index.js and discovers the CSS imports.

* **Processing & Bundling**: The css-loader interprets @import and url() statements, while the MiniCssExtractPlugin collects CSS from various source modules and aggregates them into a single, consolidated file. This results in a generated output that does not correspond 1-to-1 with the original source files, as multiple authored files are transformed into a single production asset.

* **Extraction**: Instead of injecting CSS into <style> tags (which is the default Webpack behavior), the MiniCssExtractPlugin pulls all processed CSS into a single, standalone .css file.

* **Mapping**: Throughout this process, devtool: 'source-map' tracks every change, creating a bridge between the minified production code and the original source lines.   
    
As a result, the final CSS delivered to the browser is a processed output, not a direct 1:1 representation of the authored source files, while remaining fully traceable through source maps.

## 📂 Generated CSS and Source Maps

After running the production build, the generated files can be found in:
```arduino
dist/
├─ style.css
├─ style.css.map
├─ bundle.js
└─ bundle.js.map
```
* style.css contains the final, transformed CSS used by the browser    

* style.css.map maps the generated CSS back to the original source file located in src/css/style.css    

## 📖 Summary
This project uses Webpack to ensure a predictable and fully transparent CSS build process, with explicit control over asset transformations and source map generation.
The choice prioritizes debuggability, determinism, and tooling compatibility, aligning with workflows where precise inspection of compiled CSS and reliable IDE integration are essential.

## 🔍 Investigation Report
_For the detailed analysis of computed styles and source mapping, please refer to [INVESTIGATION.md](https://github.com/Tarcisio2code/jetbrains-css-build-task/blob/master/INVESTIGATION.md)._
