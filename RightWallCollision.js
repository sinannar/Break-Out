pc.script.create('RightWallCollision', function (app) {
    // Creates a new RightWallCollision instance
    var RightWallCollision = function (entity) {
        this.entity = entity;
    };

    RightWallCollision.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            this.entity.collision.on('collisionstart', this.onCollisionStart, this);
            this.entity.collision.on('collisionend', this.onCollisionEnd, this);
        },

        onCollisionStart: function (result) {
            if (result.other.rigidbody) {
                this.entity.model.materialAsset =  app.assets.find("Black", pc.asset.ASSET_MATERIAL);
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

    return RightWallCollision;
});