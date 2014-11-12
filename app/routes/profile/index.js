import Ember from "ember";

var ProfileIndexRoute = Ember.Route.extend({
    model: function(params) {
        return this.modelFor('profile');
    }
});

export default ProfileIndexRoute;
