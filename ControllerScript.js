pc.script.create('ControllerScript', function (app) {
    // Creates a new ControllerScript instance
    var ControllerScript = function (entity) {
        this.entity = entity;
    };

    ControllerScript.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
            if (app.keyboard.isPressed(pc.KEY_LEFT) || app.keyboard.isPressed(pc.KEY_A)) {
                if(this.entity.getPosition().x>-2.2)
                    this.entity.translate(-0.05, 0, 0);
            }
            if (app.keyboard.isPressed(pc.KEY_RIGHT) || app.keyboard.isPressed(pc.KEY_D)) {
                if(this.entity.getPosition().x<2.2)
                    this.entity.translate(0.05, 0, 0);
            }
        }
    };

    return ControllerScript;
});