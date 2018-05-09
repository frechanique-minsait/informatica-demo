var ObjectId = require('mongodb').ObjectId; 
database = {}

  ////////////////
 // TRAIL DATA //
////////////////
//GET ALL TRAIL DATA IDs
database.getAllTrailDataIds = function(callback){
	db.collection('trailData').find({},{projection: {_id:1}}).toArray(function(err, trailData) {
		callback(trailData);
    });
}
//GET ALL TRAIL DATA
database.getAllTrailData = function(callback){
	db.collection('trailData').find().toArray(function(err, trailData) {
		callback(trailData);
    });
}
//GET TRAIL DATA
database.getTrailData = function(trailIds, callback){
	db.collection('trailData').find({_id:{$in:trailIds}}).toArray(function(err, trailData) {
		callback(trailData);
    });
}
//SET TRAIL DATA
database.setTrailData = function(trailId, trailData, callback){
	db.collection('trailData').findOneAndUpdate({_id:trailId}, trailData, {upsert: true, returnOriginal: false}, function(err, doc) {
			if(callback) callback(doc.value)
	});
}
  ///////////////
 // CERT DATA //
///////////////
//GET ALL CERT DATA IDs
database.getAllCertDataIds = function(callback){
	db.collection('certData').find({},{projection: {_id:1}}).toArray(function(err, certData) {
		callback(certData);
    });
}
//GET CERT DATA
database.getCertData = function(certIds, callback){
	db.collection('certData').find({_id:{$in:certIds}}).toArray(function(err, certData) {
		callback(certData);
    });
}
//SET CERT DATA
database.setCertData = function(certId, certData, callback){
	db.collection('certData').findOneAndUpdate({_id:certId}, certData, {upsert: true, returnOriginal: false}, function(err, doc) {
			if(callback) callback(doc.value)
	});
}
  //////////////
 // ACCOUNTS //
//////////////
database.getAccount = function(accId, callback){
	db.collection('accounts').findOne({_id:new ObjectId(accId)}, function(err, account) {
		callback(account);
    });
}
database.setAccount = function(accName, callback){
	db.collection('accounts').insertOne({name:accName}, function(err, doc) {
		if(callback) callback(doc.insertedId)
	});
}
database.setUser = function(userId, user, callback){
	db.collection('users').findOneAndUpdate({_id:new ObjectId(userId)}, {$set:user}, {upsert: true, returnOriginal: false}, function(err, user) {
		if(err) callback(err)
		else if(callback) callback(user)
	});
}
database.getUser = function(user, callback){
	db.collection('users').findOne(user, function(err, user) {
		callback(user);
    });
}
database.delUser = function(userId, callback){
	db.collection('users').removeOne({_id:new ObjectId(userId), rol:'user'}, function(err, res) {
		callback( 'ok' )
    });
}
database.loginUser = function(email, pass, callback){
	db.collection('users').findOne({email:email, pass:pass, status:'valid'}, function(err, user) {
		callback(user?user.token:null);
    });
}
database.getAccountUsers  = function(accId, callback){
	db.collection('users').find({accId:accId}).toArray(function(err, users) {
		callback(users);
    });
}
