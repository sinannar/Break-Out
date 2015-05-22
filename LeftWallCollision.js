pc.script.create('LeftWallCollision', function (app) {
    // Creates a new LeftWallCollision instance
    var LeftWallCollision = function (entity) {
        this.entity = entity;
    };

    LeftWallCollision.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            this.entity.collision.on('collisionstart', this.onCollisionStart, this);
            this.entity.collision.on('collisionend', this.onCollisionEnd, this);
        },

        onCollisionStart: function (result) {
            if (result.other.rigidbody) {
                this.entity.model.materialAsset =  app.assets.find("Black", pc.asset.ASSET_MATERIAL);
                var mult = pc.math.random(-1.5,-1.5);
                result.other.direction.x *= mult;
            }
        },
      
        onCollisionEnd: function (result) {
            if (result) {
                this.entity.model.materialAsset =  app.assets.find("Yellow", pc.asset.ASSET_MATERIAL);
            }
        },
      

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
        }
    };

    return LeftWallCollision;
});