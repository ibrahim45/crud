var MongoClient = require('mongodb').MongoClient;
var dbHost = "mongodb://localhost:27017/test";
var mycollections = 'book';
var readline = require('readline');
var r = readline.createInterface({input:process.stdin,output:process.stdout});



MongoClient.connect(dbHost, function(err, db){

	if(err) throw err;
	console.log("db is connected ......");
	r.question("enter the book name", function(book){
		r.question("enter the isbn", function(isbn){
			r.question("enter the author name", function(author){
				r.question("enter the pages", function(pages){
					//console.log("the book ",answer, isbn, author, pages);
						//db.collection(mycollections).insert({
						//	'name':book,
						//	'isbn' :isbn,
						//	'author':author,
						//	'pages':pages
//
						//});

				   db.collection(mycollections).find({}).toArray(function(err, items){

				 	console.log(items);

				 });

				   db.collection(mycollections).update({'name':'tell me your dreams'},{'name':"Tell the Dreams"});

				   db.collection(mycollections).remove({'name':'tell me your dreams'});


				});


			});


		});

});








});