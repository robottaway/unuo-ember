import Ember from "ember";

var BuildIndexController = Ember.ObjectController.extend({
    running: false,
    lines: [],
    eventsource: undefined,
    count: function() {
        return this.get('lines').get('length');
    }.property('lines.[]'),
    actions: {
        start: function() {
            var controller = this;
            this.set('running', true);
            this.set('lines', []);

            var eventsource = new EventSource('/build/'+this.get('name'));
            eventsource.addEventListener('error', function(e) {
                console.log('error: ', e);
                eventsource.close();
                controller.set('running', false);
            });

            eventsource.addEventListener('message', function(e) {
                controller.get('lines').addObject(e.data+'\n');
                window.scrollBy(0, 100);
            });

            // should instead listen for build done and just set running = false
            // move the close code out to the top level controller setup eventsource
            eventsource.addEventListener('close', function() {
                console.log('received close event');
                eventsource.close();
                controller.set('running', false);
            });

            this.eventsource = eventsource;
        },
        stop: function() {
            this.eventsource.close();
            console.log('user canceled run... server side still running... TODO: fix this');
            this.set('running', false);
        }
    }
});

export default BuildIndexController;
