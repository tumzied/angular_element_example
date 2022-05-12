const fs = require('fs-extra');
const concat = require('concat');

build = async () =>{
    const files = [
        './dist/element_example/runtime.js',
        './dist/element_example/polyfills.js',
        './dist/element_example/main.js'
      ];
    
      await fs.ensureDir('widget');
      await concat(files, 'widget/posts-widget.js');
}
build()