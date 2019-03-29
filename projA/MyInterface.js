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

        this.gui.add(this.scene, 'displayAxis').name("Display axis");

        this.gui.add(this.scene, 'objectComplexity', 0.01, 50.0).onChange(this.scene.updateObjectComplexity.bind(this.scene));

        this.gui.add(this.scene, 'selectedDayState', this.scene.dayStates).name('Selected day state').onChange(this.scene.setDayState.bind(this.scene));

        this.gui
          .add(this.scene, "displayNormals")
          .name("Display normals");

        this.gui.add(this.scene, 'displayLamp').name("Lamp");



        return true;
    }
    processKeyboard(event){
        switch(event.key){
            case 'o':
                this.scene.openGarage();
                break;
                case 'p':
                this.scene.closeGarage();
                break;
        }
    }
}
