class MyHouse extends CGFobject{
    constructor(scene){
        super(scene);
        this.cylinder = new MyCylinder(scene, 6, 0.3, 2);
        this.cube = new MyUnitCubeQuad(scene);
        this.roof = new MyPyramid(scene, 4, 0);
    }

    display(){
        this.scene.pushMatrix();
        this.scene.translate(1.5, 0, 1.5);
        this.cylinder.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(1.5, 0, -1.5);
        this.cylinder.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(-1.5, 0, -1.5);
        this.cylinder.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(-1.5, 0, 1.5);
        this.cylinder.display();
        this.scene.popMatrix();
        this.cube.display();
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/4, 0, 1, 0);
        this.scene.translate(0, 2, 0);
        this.scene.scale(2.7, 2.7, 2.7);
        this.roof.display();
        this.scene.popMatrix();
        
    }
}