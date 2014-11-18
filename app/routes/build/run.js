import Ember from "ember";

var BuildRunRoute = Ember.Route.extend({
    model: function() {
        var profile = this.modelFor('build');
        console.log('getting eventsource for build run route');
        var eventsource = new EventSource('/build/'+profile.name);
        eventsource.addEventListener('error', function(e) {
            eventsource.close();
        });
        eventsource.addEventListener('message', function(e) {
            console.log(e.data);
        });
        return eventsource;
    }
});

export default BuildRunRoute;
