module.exports = {

    subscription: [],

    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {

            // console.log('*** on:');

            this.subscription.push({
                event: event,
                subscriber: subscriber,
                handler: handler
            });

            // console.log(this.subscription);

            return this;

    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {

            // console.log('*** off:');

            this.subscription = this.subscription.filter(function(e, i, a) {
                if ( this.event === e.event & this.subscriber === e.subscriber ) {
                    return false;
                } else {
                    return true;
                }
            },{
                event: event,
                subscriber: subscriber
            });

            // subscription.push({event: event, subscriber: subscriber});

            // console.log(this.subscription);

            return this;




    },

    /**
     * @param {String} event
     */
    emit: function (event) {

        // console.log('*** emmit:');

        this.subscription.forEach( function (v) {
            // console.log('\t?:', v.event, ' vs. ', this.event);
            if ( v.event === this.event ) {
                v.handler.call(v.subscriber);
            // console.log('\t>:', v.subscriber, ': ', v.handler);

            }
        }, {event: event} );

        return this;

    }
};
