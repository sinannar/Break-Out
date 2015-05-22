pc.script.create('BallScript', function (app) {
    // Creates a new BallScript instance
    var BallScript = function (entity) {
        this.entity = entity;
        this.direction = new pc.Vec3(pc.math.random(-0.05,0.05), pc.math.random(-0.05,0.05),0);
    };

    BallScript.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            this.entity.collision.on('collisionstart', this.onCollisionStart, this);
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
            this.entity.translate(this.direction.x, this.direction.y, 0);
        },
        
        onCollisionStart: function (result) {
            if (result.other.rigidbody) {
                var coordinates = this.entity.getPosition();
                if(coordinates.x<-2.7){
                    this.direction.x = -1*this.direction.x;
                }
                if(coordinates.x>2.7){
                    this.direction.x = -1*this.direction.x;
                }
                if(coordinates.y>1.7){
                    this.direction.y = -1*this.direction.y;
                }
                if(coordinates.y<-1.24){
                    this.direction.y = -1*this.direction.y;
                }
            }
        }
        
    };

    return BallScript;
});