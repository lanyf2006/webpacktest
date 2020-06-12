/**
 * 
 * @namaspace:
 * @description:webpack配置文件
 * @author:lanyf
 * @update:created 2020/06/12 09:11:26
 * @version: 1.0
 */
'use strict';

const path = require('path');

module.exports = {
    entry:{
        'index':'./src/index.js',
        'search':'./src/search.js',
    },
    output:{
        filename:'[name].js',
        path:path.join(__dirname,'dist')
    },
    mode:'production'
};