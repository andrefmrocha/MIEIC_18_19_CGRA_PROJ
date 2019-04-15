/* eslint-disable no-undef */
class MyCubeMapNight extends CGFobject {
    constructor (scene, scale) {
        super(scene);
        this.quad = new MyQuad(scene);
        this.scale = scale;
    }
    display () {
        this.scene.pushMatrix();
        this.scene.scale(this.scale, this.scale, this.scale);
        this.scene.rotate(Math.PI, 1, 0, 0);
        this.scene.rotate(Math.PI, 0, 0, 1);
        this.scene.translate(0, 0, 0);
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -0.5);
        this.scene.materialNightRf.apply();
        this.quad.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.materialNightBk.apply();
        this.quad.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(-Math.PI / 2, 0, 1, 0);
        this.scene.materialNightFt.apply();
        this.quad.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.5);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.materialNightLf.apply();
        this.quad.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.scene.materialNightDn.apply();
        this.quad.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.materialNightUp.apply();
        this.quad.display();
        this.scene.popMatrix();
        this.scene.popMatrix();
    }
}
