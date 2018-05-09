sys={}

sys.process1 = function(data, callback){
	var response = 'executed process 1 with data: ' + data
	callback(response)
}

sys.process2 = function(data, callback){
	var response = 'executed process 2 with data: ' + data
	callback(response)
}
