module.exports = {
    entry:{
        'app':'./app.js',
        'adminApp':'./adminApp.js',
    },
    output:{
        filename:'[name].js',
        path:__dirname+'dist'
    }
}