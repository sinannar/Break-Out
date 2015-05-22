pc.script.create('behaviour', function (app) {
   
    var Behaviour = function (entity) {
        this.entity = entity;
    };


    Behaviour.prototype = {
        initialize: function () {
            app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);
            app.keyboard.on(pc.EVENT_KEYUP, this.onKeyUp, this);
            
            this.redMaterial = app.assets.find("Red", pc.asset.ASSET_MATERIAL);
            this.greenMaterial = app.assets.find("Green", pc.asset.ASSET_MATERIAL);
            this.blueMaterial = app.assets.find("Blue", pc.asset.ASSET_MATERIAL);
            this.entity.model.materialAsset = this.blueMaterial;
            this.entity.collision.on('collisionstart', this.onCollisionStart, this);

        },


    onCollisionStart: function (result) {
            if (result.other.rigidbody) {
                
                this.entity.model.materialAsset =  app.assets.find("Yellow", pc.asset.ASSET_MATERIAL);
                result.other.model.materialAsset =  app.assets.find("Yellow", pc.asset.ASSET_MATERIAL);
            }
        },
        
        update: function (dt) {
            var angle = 0;
            if (app.keyboard.wasPressed(pc.KEY_LEFT)) {
                angle = -5;
            } else if (app.keyboard.wasPressed(pc.KEY_RIGHT)) {
                angle = 5;
            }

            if (app.keyboard.isPressed(pc.KEY_SPACE)) {
                angle = 1;
            }

            if (app.keyboard.isPressed(pc.KEY_S)) {
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
            }

            this.entity.rotateLocal(0, angle, 0);
        },


        onKeyDown: function (event) {
            if (event.key === pc.KEY_Q) {
                this.entity.model.materialAsset = this.redMaterial;
            }
        },

        onKeyUp: function (event) {
            if (event.key === pc.KEY_Q) {
                this.entity.model.materialAsset = this.blueMaterial;
            }
        }
    };
    
    
    return Behaviour;
});