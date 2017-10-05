Courts = new Mongo.Collection('courts');

Courts.allow({
	insert : function(userId, doc){
		return  !!userId;
	},
	update : function(userId, doc){
		return  !!userId;
	}
});


Sports = new SimpleSchema({
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

CourtsSchema = new SimpleSchema({
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

Courts.attachSchema(CourtsSchema);