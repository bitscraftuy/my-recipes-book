import { Session } from 'meteor/session';


	Template.Clients.onCreated(function() {
		var self = this;
		self.autorun(function(){
			clients = new MysqlSubscription('clients');
		});

	});


	Template.Clients.helpers({
		clients: function () {
	      return clients.reactive();
	    }
	});

if(Meteor.isClient){
	Meteor.methods({
	    'contactMe': function(id, val) {
	    	console.log(id,val);
	      clients.changed();


	    }
	});
}
