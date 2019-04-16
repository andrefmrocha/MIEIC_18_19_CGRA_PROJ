/* eslint-disable no-undef */
class MyFirePit extends CGFobject {
    constructor (scene) {
        super(scene);
        this.log = new MyCylinder(scene, 10, 0.18, 1.4);
        this.fire = new MyCone(scene,8,0.6,1.8);
    }
    display () {
        this.scene.materialWood.apply();

        this.scene.pushMatrix();
        this.scene.translate(0.3 , 0 , -0.2);
        this.scene.pushMatrix();
        this.scene.rotate(0.4, 1, 0, 1);
        this.scene.rotate(0.4, 0, 0, 1);
        this.scene.translate(0.2, 0, 0);
        this.log.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(0.8, 1, 0, 0);
        this.scene.translate(0, 0, -0.5);
        this.log.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(-0.6, 1, 0, 1);
        this.scene.translate(-0.6, -0.5, 0.7);
        this.log.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2 , 1, 0 ,0);
        this.scene.translate(0,-0.5,0);
        this.scene.rotate(-.7 , 0, 0 ,1);
        this.scene.translate(-0.8,0,0);
        this.log.display();
        this.scene.popMatrix()
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0 , 0.1 , 0);
        this.scene.fireMaterial.apply();
        this.fire.display();
        this.scene.popMatrix();

    }
}
