pc.script.create('Collider', function (app) {
    // Creates a new Collider instance
    var Collider = function (entity) {
        this.entity = entity;
    };

    Collider.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            this.entity.collision.on('collisionstart', this.onCollisionStart, this);

        },

       onCollisionStart: function (result) {
            if (result.other.rigidbody) {
                this.entity.model.materialAsset =  app.assets.find("Green", pc.asset.ASSET_MATERIAL);
                result.other.model.materialAsset =  app.assets.find("Red", pc.asset.ASSET_MATERIAL);
            }
        },
        
        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
            if (app.keyboard.isPressed(pc.KEY_DOWN)) {
                this.entity.translate(0, -0.05, 0);
            }
            if (app.keyboard.isPressed(pc.KEY_UP)) {
                this.entity.translate(0, 0.05, 0);
            }
            if (app.keyboard.isPressed(pc.KEY_LEFT)) {
                this.entity.translate(-0.05, 0, 0);
            }
            if (app.keyboard.isPressed(pc.KEY_RIGHT)) {
                this.entity.translate(0.05, 0, 0);
            }
        }
        
        
    };

    return Collider;
});