import Ember from "ember";

var BuildIndexRoute = Ember.Route.extend({
    model: function(params) {
        var profile = this.modelFor('build');
        return profile;
    }
});

export default BuildIndexRoute;
