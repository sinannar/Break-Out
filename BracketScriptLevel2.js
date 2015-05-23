pc.script.create('BracketScriptLevel2', function (app) {
    // Creates a new BracketScriptLevel2 instance
    var BracketScriptLevel2 = function (entity) {
        this.entity = entity;
        this.entity.level = 1;
    };

    BracketScriptLevel2.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            this.entity.collision.on('collisionstart', this.onCollisionStart, this);
        },
        
        onCollisionStart: function (result) {
            if (result.other.rigidbody) {
                var mult = pc.math.random(-1.5,-1.5);
                result.other.direction.y *= mult;
                if(this.entity.level > 0){
                    --this.entity.level;
                    switch(this.entity.level){
                        case 2:
                            this.entity.model.materialAsset =  app.assets.find("Black", pc.asset.ASSET_MATERIAL);
                        break;
                        case 1:
                            this.entity.model.materialAsset =  app.assets.find("Green", pc.asset.ASSET_MATERIAL);
                        break;
                        case 0:
                            this.entity.model.materialAsset =  app.assets.find("Red", pc.asset.ASSET_MATERIAL);
                        break;
                    }
                }
                else{
                    this.entity.destroy();
                }
            }
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
        }
    };

    return BracketScriptLevel2;
});