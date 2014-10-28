/*
 * JSON APIs
 *
 */


var data = [{
        id: 1,
        title: 'Hello World',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },{
        id: 2,
        title: 'Damn It',
        content: 'Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus.'
}];


exports.articleList = function(req, res){
    res.json({articles: data});
};

exports.article = function(req, res){
    var id = req.params.articleId;
    res.json(data[id-1] || false);
};

exports.createArticle = function(req, res){
    var body = req.body;
    body.id = data.length + 1;
    data.push(body);
    res.json(body);
}

exports.recentArticles = function(){
    var recent = data.slice(0, 10);
    return recent;
};
