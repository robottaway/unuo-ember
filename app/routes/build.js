import Ember from "ember";

var BuildRoute = Ember.Route.extend({
    model: function(params) {
        var profile = this.modelFor('profile');
        return profile;
    }
});

export default BuildRoute;
