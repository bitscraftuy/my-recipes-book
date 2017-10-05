Postulations = new Mongo.Collection('postulations');

Postulations.allow({
	insert : function(userId, doc){
		return  !!userId;
	},
	update : function(userId, doc){
		return  !!userId;
	}
});

Matches = new SimpleSchema({
	matchDate: {
		type: Date,
        label: "Fecha"
	},
    matchHour: {
		type: Date,
        label: "Hora"
	},
    courtId: {
		type: [Courts]
	},
    ammount: {
		type: Number,
        label: "Cantidad"
	},
    typeId: {
		type: [Types]
	},
    userId: {
		type: [Users]
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

PostulationsSchema = new SimpleSchema({
	matchId: {
		type: [Matches],
        label: "Partido"
	},
    status: {
		type: Boolean,
        label: "Estatus"
	},
    userId: {
		type: [Users]
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

Postulations.attachSchema(PostulationsSchema);