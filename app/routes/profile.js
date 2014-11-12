import Ember from "ember";

var ProfileRoute = Ember.Route.extend({
    model: function(params) {
        return Ember.$.getJSON('/profile/'+params.profile_name);
    }
});

export default ProfileRoute;
