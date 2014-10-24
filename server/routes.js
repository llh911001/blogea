
/*
 * Page urls
 *
 */

exports.index = function(req, res){
    res.render('index', {title: 'LiLingHao\'s Blog', logo: 'Hello World'});
};

