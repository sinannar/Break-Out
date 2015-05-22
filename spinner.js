pc.script.create('spinner', function (app) {
    // Creates a new Spinner instance
    var Spinner = function (entity) {
        this.entity = entity;
    };

    Spinner.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            this.entity.model.materialAsset = app.assets.find("Blue", pc.asset.ASSET_MATERIAL);
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
            this.entity.rotate(90 * dt, 90 * dt, 90 * dt);
        }
    };

    return Spinner;
});