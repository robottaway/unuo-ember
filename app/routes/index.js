import Ember from "ember";

var IndexRoute = Ember.Route.extend({
    model: function() {
        return Ember.$.getJSON('/profile');
        //return ['red', 'yellow', 'green', 'blue'];
    }
});

export default IndexRoute;
