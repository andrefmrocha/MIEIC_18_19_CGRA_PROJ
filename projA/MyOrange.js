/* eslint-disable no-undef */
class MyOrange extends CGFobject {
    constructor (scene, radius) {
        super(scene);
        this.radius = radius;
        this.sphere = new MySphere(this.scene, 3);
    }

    display () {
        this.scene.materialOrange.apply();
        this.scene.pushMatrix();
        this.scene.scale(this.radius, this.radius, this.radius);
        this.sphere.display();
        this.scene.popMatrix();
    }

    updateBuffers () {

    }

    enableNormalViz () {

    }
    disableNormalViz () {

    }
}
