import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
    this.resource("profiles", function() {
        this.route("new");
    });
    this.resource("profile", { path: "/profile/:profile_name" }, function() {
        this.resource("build", function() {
            this.route("run", { path: "/run" });
        });
    });
});

export default Router;
