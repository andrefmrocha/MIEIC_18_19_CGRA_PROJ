/* eslint-disable no-undef */
class MyTreeGroupPatch extends CGFobject {
    constructor (scene) {
        super(scene);
        this.tree1 = new MyTree(scene, 1.8 + this.r(-0.2, 0.4), 0.6 + this.r(-0.1, 0.1), 2 + this.r(-0.25, 0.5), 1.2 + this.r(-0.15, 0.15), this.scene.materialWood, this.scene.materialTreeTop);
        this.tree2 = new MyTree(scene, 1.8 + this.r(-0.2, 0.4), 0.6 + this.r(-0.1, 0.1), 2 + this.r(-0.25, 0.5), 1.2 + this.r(-0.15, 0.15), this.scene.materialWood, this.scene.materialTreeTop);
        this.tree3 = new MyTree(scene, 1.8 + this.r(-0.2, 0.4), 0.6 + this.r(-0.1, 0.1), 2 + this.r(-0.25, 0.5), 1.2 + this.r(-0.15, 0.15), this.scene.materialWood, this.scene.materialTreeTop);
        this.tree4 = new MyTree(scene, 1.8 + this.r(-0.2, 0.4), 0.6 + this.r(-0.1, 0.1), 2 + this.r(-0.25, 0.5), 1.2 + this.r(-0.15, 0.15), this.scene.materialWood, this.scene.materialTreeTop);
        this.tree5 = new MyTree(scene, 1.8 + this.r(-0.2, 0.4), 0.6 + this.r(-0.1, 0.1), 2 + this.r(-0.25, 0.5), 1.2 + this.r(-0.15, 0.15), this.scene.materialWood, this.scene.materialTreeTop);
        this.tree6 = new MyTree(scene, 1.8 + this.r(-0.2, 0.4), 0.6 + this.r(-0.1, 0.1), 2 + this.r(-0.25, 0.5), 1.2 + this.r(-0.15, 0.15), this.scene.materialWood, this.scene.materialTreeTop);
        this.tree7 = new MyTree(scene, 1.8 + this.r(-0.2, 0.4), 0.6 + this.r(-0.1, 0.1), 2 + this.r(-0.25, 0.5), 1.2 + this.r(-0.15, 0.15), this.scene.materialWood, this.scene.materialTreeTop);
        this.tree8 = new MyTree(scene, 1.8 + this.r(-0.2, 0.4), 0.6 + this.r(-0.1, 0.1), 2 + this.r(-0.25, 0.5), 1.2 + this.r(-0.15, 0.15), this.scene.materialWood, this.scene.materialTreeTop);
        this.tree9 = new MyTree(scene, 1.8 + this.r(-0.2, 0.4), 0.6 + this.r(-0.1, 0.1), 2 + this.r(-0.25, 0.5), 1.2 + this.r(-0.15, 0.15), this.scene.materialWood, this.scene.materialTreeTop);
        this.x_rand = [];
        this.y_rand = [];
        for (let i = 0; i < 9; i++) {
            this.x_rand.push(this.r(-0.5, 0.5));
            this.y_rand.push(this.r(-0.5, 0.5));
        }
    }

    r (min, max) {
        return Math.random() * (max - min) + min;
    }

    display () {
        this.scene.pushMatrix();
        this.scene.pushMatrix();
        this.scene.translate(this.x_rand[0], 0, this.y_rand[0]);
        this.tree1.display();
        this.scene.popMatrix();
        this.scene.translate(3, 0, 0);
        this.scene.pushMatrix();
        this.scene.translate(this.x_rand[1], 0, this.y_rand[1]);
        this.tree2.display();
        this.scene.popMatrix();
        this.scene.translate(3, 0, 0);
        this.scene.pushMatrix();
        this.scene.translate(this.x_rand[2], 0, this.y_rand[2]);
        this.tree3.display();
        this.scene.popMatrix();
        this.scene.translate(-6, 0, 3);
        this.scene.pushMatrix();
        this.scene.translate(this.x_rand[3], 0, this.y_rand[3]);
        this.tree4.display();
        this.scene.popMatrix();
        this.scene.translate(3, 0, 0);
        this.scene.pushMatrix();
        this.scene.translate(this.x_rand[4], 0, this.y_rand[4]);
        this.tree5.display();
        this.scene.popMatrix();
        this.scene.translate(3, 0, 0);
        this.scene.pushMatrix();
        this.scene.translate(this.x_rand[5], 0, this.y_rand[5]);
        this.tree6.display();
        this.scene.popMatrix();
        this.scene.translate(-6, 0, 3);
        this.scene.pushMatrix();
        this.scene.translate(this.x_rand[6], 0, this.y_rand[6]);
        this.tree7.display();
        this.scene.popMatrix();
        this.scene.translate(3, 0, 0);
        this.scene.pushMatrix();
        this.scene.translate(this.x_rand[7], 0, this.y_rand[7]);
        this.tree8.display();
        this.scene.popMatrix();
        this.scene.translate(3, 0, 0);
        this.scene.pushMatrix();
        this.scene.translate(this.x_rand[8], 0, this.y_rand[8]);
        this.tree9.display();
        this.scene.popMatrix();
        this.scene.popMatrix();
    }

    updateBuffers () {

    }

    enableNormalViz () {

    }
    disableNormalViz () {

    }
}
