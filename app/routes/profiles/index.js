import Ember from "ember";

var ProfilesIndexRoute = Ember.Route.extend({
    model: function() {
        return Ember.$.getJSON('/profile');
    }
});

export default ProfilesIndexRoute;
