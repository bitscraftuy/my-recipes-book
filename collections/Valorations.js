Valorations = new Mongo.Collection('valorations');

Valorations.allow({
	insert : function(userId, doc){
		return  !!userId;
	},
	update : function(userId, doc){
		return  !!userId;
	}
});


ValorationsSchema = new SimpleSchema({
	provider: {
		type: String,
        label: "De"
	},
    receiver: {
		type: String,
        label: "Para"
	},
    ammount: {
		type: Number,
        label: "Para"
	},
    comments: {
		type: String,
        label: "Comentarios"
	},
    createdAt : {
		type : Date,
		label : "Creado",
		autoValue : function(){
			return new Date();
		},
		autoform : {
			type : "hidden"
		}
	},
    author : {
		type : String,
		label : "Author",
		autoValue : function(){
			return this.userId;
		},
		autoform : {
			type : "hidden"
		}
	}
});

Valorations.attachSchema(ValorationsSchema);