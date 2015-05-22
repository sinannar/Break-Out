pc.script.create('SphereScript', function (app) {
    // Creates a new SphereScript instance
    var SphereScript = function (entity) {
        this.entity = entity;

    };

    SphereScript.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            this.entity.model.materialAsset =  app.assets.find("Green", pc.asset.ASSET_MATERIAL);
            this.entity.collision.on('collisionstart', this.onCollisionStart, this);

        },
        
        onCollisionStart: function (result) {
            if (result.other.rigidbody) {
                
                this.entity.model.materialAsset =  app.assets.find("Yellow", pc.asset.ASSET_MATERIAL);
                result.other.model.materialAsset =  app.assets.find("Yellow", pc.asset.ASSET_MATERIAL);
                this.entity.destroy();
            }
        },
        
        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
            /*if (app.keyboard.isPressed(pc.KEY_S)) {
                this.entity.translate(0, -0.05, 0);
            }
            if (app.keyboard.isPressed(pc.KEY_W)) {
                this.entity.translate(0, 0.05, 0);
            }
            if (app.keyboard.isPressed(pc.KEY_A)) {
                this.entity.translate(-0.05, 0, 0);
            }
            if (app.keyboard.isPressed(pc.KEY_D)) {
                this.entity.translate(0.05, 0, 0);
            }*/
        }
    };

    return SphereScript;
});