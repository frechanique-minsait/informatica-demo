//GET
app.get('/process1/:data', function(req, res){
	var data = req.params.data
	res.send( JSON.stringify( {'response':'ok!!'} ) );
});
app.get('/data', function(req, res){
	var data = req.params.data
	res.send( JSON.stringify( {'response':'oka'} ) );
});
//PUT
app.put('/process1/:data', function(req, res){
	var data = req.params.data
	var body = req.body
	res.send( JSON.stringify( {'response':'ok!!'} ) );
});
//DELETE
app.delete('/process1/:data', function(req, res){
	var data = req.params.data
	res.send( JSON.stringify( {'response':'ok!!'} ) );
})
