import Ember from "ember";

var ProfileBuildController = Ember.ObjectController.extend({
    init: function() {
        var eventsource = new EventSource('/build/'+this.model.name);
        return eventsource.addEventListener('message', function(e) {
            console.log(e.data);
        });
    }
});

export default ProfileBuildController;
