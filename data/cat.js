	var mongoose = require("mongoose");

    mongoose.set('useUnifiedTopology', true);
	mongoose.connect("mongodb://localhost/cat_app",{'useNewUrlParser': true});
 


	var catSchema = new mongoose.Schema({
		name :String,
		age: Number,
		temperament: String
	});

	var Cat = mongoose.model("Cat", catSchema);  //will create a collection called cat

Cat.create({
	name :"Snow 00",
	age :15,
	temperament: "Bland"
}, function(err,cat){
		if(err){
			console.log("SOMETHING WENT WRONT");
		}else{
					console.log("Just save a cat to the db :)");
			console.log(cat);
}});
	

	Cat.find({},function(err,cats){
		if(err){
			console.log("SOMETHING WENT WRONT find");
		}else{
					console.log("ALL the cats");
			console.log(cats);
	}});
