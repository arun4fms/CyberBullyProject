module.exports = function(app) {

    app.get('/note/view/:id', function(req, res) {

    	var id = req.params.id
    	var y = id-1
        var item = app.data.bully[y]

        res.render('noteView.jade', {
            item: item
        })
    })

}