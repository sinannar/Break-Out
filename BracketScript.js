pc.script.create('BracketScript', function (app) {
    // Creates a new BracketScript instance
    var BracketScript = function (entity) {
        this.entity = entity;
    };

    BracketScript.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            this.entity.collision.on('collisionstart', this.onCollisionStart, this);
        },
        
        onCollisionStart: function (result) {
            if (result.other.rigidbody) {
                this.entity.destroy();
            }
        },


        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
        }
    };

    return BracketScript;
});