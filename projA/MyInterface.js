/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        var obj = this;
        this.model = {};
        this.initKeys();

        this.gui.add(this.scene, 'displayAxis').name("Display axis");

        this.gui.add(this.scene, 'objectComplexity', 0.01, 50.0).onChange(this.scene.updateObjectComplexity.bind(this.scene));
        
        this.gui
          .add(this.scene, "displayNormals")
          .name("Display normals");



        return true;
    }
    initKeys() {
        this.scene.gui = this;
        this.processKeyboard = function () { };
        this.model.activeKeys = {};
    }

    processKeyDown(event) {
        this.model.activeKeys[event.code] = true;
    };

    processKeyUp(event) {
        this.model.activeKeys[event.code] = false;
    };

    isKeyPressed(keyCode) {
        return this.model.activeKeys[keyCode] || false;
    }
}