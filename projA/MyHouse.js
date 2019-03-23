class MyHouse extends CGFobject{
    constructor(scene){
        super(scene);
        this.cylinder = new MyCylinder(scene, 6, 0.3, 2);
        this.cube = new MyUnitCubeQuad(scene);
        this.roof = new MyPyramid(scene, 4, 0);
    }

    display(){
        this.scene.pushMatrix();
        this.scene.translate(2, 0, 5.5);
        this.scene.scale(0.7, 1.4, 0.7);
        this.cylinder.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(4, 0, 5.5);
        this.scene.scale(0.7, 1.4, 0.7);
        this.cylinder.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(1.7, 5.5, 0);
        this.scene.scale(0.7, 0.7, 0.7);
        this.cylinder.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.scale(1.5, 1.5, 1.5);
        this.scene.scale(2, 2, 2);
        this.scene.pushMatrix();
        this.scene.translate(1, -0.5, 0);
        this.cube.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.pushMatrix();
        this.scene.translate(1, 0, 1);
        this.scene.translate(0, 0.85, 0);
        this.scene.scale(1, 0.1, 2);
        this.cube.display();
        this.scene.popMatrix();
        this.scene.scale(1, 2, 1);
        this.scene.translate(0, -0.5, 0);
        this.cube.display();
        this.scene.popMatrix();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0, 5.5, 0);
        this.scene.rotate(Math.PI/4, 0, 1, 0);
        this.scene.scale(3, 3, 3);
        this.roof.display();
        this.scene.popMatrix();
        
    }
}