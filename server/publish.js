import { Session } from 'meteor/session';

Meteor.publish('recipes',function(){
	return Recipes.find({author: this.userId})
});

Meteor.publish('singleRecipe',function(id){
	check(id, String);
	return Recipes.find({_id: id});
});




var liveDb = new LiveMysql(Meteor.settings.private.mysql);


var closeAndExit = function() {
    liveDb.end();
    process.exit();
};
// Close connections on hot code push
process.on('SIGTERM', closeAndExit);
// Close connections on exit (ctrl + c)
process.on('SIGINT', closeAndExit);

Meteor.publish('clients', function(){

  var contactIds = [];

  var clients = liveDb.select(
    `SELECT * FROM clients ORDER BY client_id ASC`,
    [ {
        table: 'clients',
        condition: function(row, newRow) {

          var doRefresh =
            row.contact.match(contactIds.indexOf(row.contact)) !== null ||
            (newRow && (newRow.contact.match(contactIds.indexOf(row.contact))));


            return doRefresh;

         /*return row.client_id ===  contactIds.indexOf(row.client_id)
            // On UPDATE queries, newRow must be checked as well
            || (newRow && newRow.client_id === contactIds.indexOf(row.client_id));*/
        }
      }

     ]
  );

  clients.on('update', function(diff, results) {

   contactIds = results.map(function(row) { return row.contact });

   //liveDb.applyDiff(contactIds, diff);

   //console.log(contactIds);

  });
	return clients;
});

Meteor.methods({
    'contactMe': function(id, val) {
      check(id, Number);
      check(val, Number);

      liveDb.db.query(
        'UPDATE clients SET contact =  ? WHERE client_id = ?', [ !val, id ]);




    }
});