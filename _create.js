#!/usr/bin/env node
'use strict';

const commander = require('commander');
const fs = require('fs');
const path = require('path');

commander
  .command('view <name>')
  .action((name) => {
    const viewsPath = path.join(process.cwd(), 'views');
    if (!fs.existsSync(viewsPath)) {
        fs.mkdirSync(viewsPath);
    }
    const viewPath = path.join(viewsPath, name);
    try {
        fs.mkdirSync(viewPath);
    } catch (e) {
        if (e.code === 'EEXIST') {
            console.error('View exist', viewPath);
        } else {
            console.error(e);
        }
        process.exit();
    }
    ['.html', '.js', '.css'].forEach((value) => {
        fs.writeFile(path.join(viewPath,  name + value));
    });

    console.info('View created at ' + viewPath);
  });

commander.parse(process.argv);