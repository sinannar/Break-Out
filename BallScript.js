pc.script.create('BallScript', function (app) {
    // Creates a new BallScript instance
    var BallScript = function (entity) {
        this.entity = entity;
        this.entity.direction = new pc.Vec3(pc.math.random(-0.05,0.05), pc.math.random(-0.05,0.05),0);
    };

    BallScript.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            this.entity.collision.on('collisionend', this.onCollisionEnd, this);
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
            this.entity.translate(this.entity.direction.x, this.entity.direction.y, 0);
        },
        
        onCollisionEnd: function (result) {
            //this.entity.direction.x *= pc.math.random(1.3,0.8);
            //this.entity.direction.y *= pc.math.random(1.3,0.8);
        }
        
    };

    return BallScript;
});