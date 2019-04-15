/* eslint-disable no-undef */
class MyLamp extends CGFobject {
    constructor (scene, radius) {
        super(scene);
        this.initBuffers();
        this.radius = radius;
        this.sphere = new MySphere(this.scene, 2);

        this.scene.lights[1].setPosition(0, 3, 0, 1);
        this.scene.lights[1].setDiffuse(1.0, 1.0, 0.8, 1.0);
        this.scene.lights[1].setSpecular(1.0, 1.0, 1.0, 1.0);
        this.scene.lights[1].setQuadraticAttenuation(0.1);
        this.scene.lights[1].enable();
        this.scene.lights[1].setVisible(true);
        // this.scene.lights[1].update();

        this.materialGlass = new CGFappearance(this.scene);
        this.materialGlass.setAmbient(0.5, 0.5, 0.5, 0.1);
        this.materialGlass.setDiffuse(0.5, 0.5, 0.5, 0.1);
        this.materialGlass.setSpecular(0.5, 0.5, 0.5, 0.1);
        this.materialGlass.setShininess(10.0);
    }

    display () {
        this.scene.lights[1].update();
        /* this.scene.pushMatrix();
		this.materialGlass.apply();
        this.scene.scale(this.radius,this.radius,this.radius);
        //this.sphere.display();
        this.scene.popMatrix(); */
    }
    enable () {
        this.scene.lights[1].enable();
    }
    disable () {
        this.scene.lights[1].disable();
    }
}
