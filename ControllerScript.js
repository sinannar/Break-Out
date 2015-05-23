pc.script.create('ControllerScript', function (app) {
    // Creates a new ControllerScript instance
    var ControllerScript = function (entity) {
        this.entity = entity;
        
        // Disabling the app menu stops the browser displaying a menu when
        // you right-click the page
        app.mouse.disableContextMenu();

        // Use the on() method to attach event handlers.
        // The mouse object supports events on move, button down and
        // up, and scroll wheel.
        //app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
        app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
    };

    ControllerScript.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
        this.entity.collision.on('collisionstart', this.onCollisionStart, this);
       
        
        },
        
        onMouseDown: function (event) {
            // If the left mouse button is pressed, change the cube color to red
            if (event.button === pc.MOUSEBUTTON_LEFT) {
                if(this.entity.getPosition().x>-2.13)
                    this.entity.translate(-0.05, 0, 0);
            }

            // If the left mouse button is pressed, change the cube color to blue
            if (event.button === pc.MOUSEBUTTON_RIGHT) {
                if(this.entity.getPosition().x<2.13)
                    this.entity.translate(0.05, 0, 0);
            }
        },
        
        /*onMouseMove: function (event) {
            // Use the camera component's screenToWorld function to convert the
            // position of the mouse into a position in 3D space
            
            if(event.dx){
                console.log(dx);     
            }
            

           
        },*/
        
        onCollisionStart: function (result) {
            if (result.other.rigidbody) {
                var mult = pc.math.random(-1.5,-1.5);
                result.other.direction.y *= mult;
            }
        },
        
        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
            if (app.keyboard.isPressed(pc.KEY_LEFT) || app.keyboard.isPressed(pc.KEY_A)) {
                if(this.entity.getPosition().x>-2.08){
                    if(app.keyboard.isPressed(pc.KEY_SPACE)){
                        this.entity.translate(-0.08, 0, 0);
                    }else{
                        this.entity.translate(-0.05, 0, 0);
                    }
                }
            }
            if (app.keyboard.isPressed(pc.KEY_RIGHT) || app.keyboard.isPressed(pc.KEY_D)) {
                if(this.entity.getPosition().x<2.08){
                    if(app.keyboard.isPressed(pc.KEY_SPACE)){
                        this.entity.translate(0.08, 0, 0);
                    }else{
                        this.entity.translate(0.05, 0, 0);
                    }
                }
            }
        }
    };

    return ControllerScript;
});