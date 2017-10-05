Matches = new Mongo.Collection('matches');

Matches.allow({
	insert : function(userId, doc){
		return  !!userId;
	},
	update : function(userId, doc){
		return  !!userId;
	}
});

Types = new SimpleSchema({
	name: {
		type: String
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

Courts = new SimpleSchema({
	name: {
		type: String,
        label: "Nombre"
	},
    address: {
		type: String,
        label: "Direccion"
	},
    phone: {
		type: String,
        label: "Telefono"
	},
    email: {
		type: String,
        label: "Correo"
	},
    city: {
		type: String,
        label: "Ciudad"
	},
    location: {
		type: String,
        label: "Ubicacion"
	},
    sportId: {
		type: [Sports],
        label: "Deporte"
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

MatchesSchema = new SimpleSchema({
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

Matches.attachSchema(MatchesSchema);