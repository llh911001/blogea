
/*
 * Page urls
 *
 */

var recent = require('./api').recentArticles;

exports.index = function(req, res){
    res.render('index', {title: 'LiLingHao\'s Blog', logo: 'Hello World', recent: recent()});
};

