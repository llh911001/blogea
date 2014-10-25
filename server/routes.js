
/*
 * Page urls
 *
 */

var recentPosts = require('./api').recentPosts();

exports.index = function(req, res){
    res.render('index', {title: 'LiLingHao\'s Blog', logo: 'Hello World', recent: recentPosts});
};

