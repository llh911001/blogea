/*
 * JSON APIs
 *
 */


var data = [{
        id: 0,
        title: 'Hello World',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },{
        id: 1,
        title: 'Damn It',
        content: 'Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus.'
}];


exports.postList = function(req, res){
    res.json(data);
};

exports.post = function(req, res){
    var id = req.params.postId;
    res.json(data[id] || false);
};
