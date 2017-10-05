import { Session } from 'meteor/session';

Template.Client.onCreated(function(){
	this.noRender = new ReactiveVar(true);
});


Template.Client.events({
	'click .toggle-menu':function (event, template) {
		template.noRender.set(!template.noRender.get());
		Meteor.call('contactMe', this.client_id, this.contact);
	}
});

Template.Client.helpers({
    isContact: function (contact) {
    	return contact === 1;
    },
    noRender: function(){
    	return Template.instance().noRender.get();
    }
});