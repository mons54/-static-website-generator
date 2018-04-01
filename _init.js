#!/usr/bin/env node
'use strict';

const program = require('commander');
const fs = require('fs');
const path = require('path');

const viewsPath = path.join(process.cwd(), './views/');
if (fs.existsSync(viewsPath)) {
    console.error('views already exists', viewsPath);
    process.exit();
    return;
}

fs.mkdirSync(viewsPath);