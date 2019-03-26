class MyHouse extends CGFobject{
    constructor(scene, brickTexture, doorTexture){
        super(scene);
        this.brickTexture = brickTexture;
        this.doorTexture = doorTexture;
        this.cylinder = new MyCylinder(scene, 6, 0.3, 2);
        this.cube = new MyUnitCubeQuad(scene);
        this.roof = new MyPyramid(scene, 4, 0);
    }

    display(){
        this.brickTexture.apply();

        // Left colummn
        this.scene.pushMatrix();
        this.scene.translate(2, 0, 5.5);
        this.scene.scale(0.7, 1.4, 0.7);
        this.cylinder.display();
        this.scene.popMatrix();

        // Right column
        this.scene.pushMatrix();
        this.scene.translate(4, 0, 5.5);
        this.scene.scale(0.7, 1.4, 0.7);
        this.cylinder.display();
        this.scene.popMatrix();
        
                
        //Chimney
        this.scene.pushMatrix();
        this.scene.translate(1.7, 5.5, 0);
        this.scene.scale(0.7, 0.7, 0.7);
        this.cylinder.display();
        this.scene.popMatrix();
        
        // Right cube
        this.scene.pushMatrix();
        this.scene.scale(1.5, 1.5, 1.5);
        this.scene.scale(2, 2, 2);
        this.scene.pushMatrix();
        this.scene.translate(1, -0.5, 0);
        this.cube.display();
        this.scene.popMatrix();

        // Small front rectangle
        this.scene.pushMatrix();
        this.scene.pushMatrix();
        this.scene.translate(1, 0, 1);
        this.scene.translate(0, 0.85, 0);
        this.scene.scale(1, 0.1, 2);
        this.cube.display();
        this.scene.popMatrix();

        // Door
        this.scene.pushMatrix();
        this.scene.translate(1, -0.39, 0.1);
        this.scene.scale(0.5, 0.8, 1);
        this.doorTexture.apply();
        this.cube.display();
        this.brickTexture.apply();
        this.scene.popMatrix();
        

        // Big left Rectangle
        this.scene.scale(1, 2, 1);
        this.scene.translate(0, -0.5, 0);
        this.cube.display();
        this.scene.popMatrix();
        this.scene.popMatrix();

        // Roof
        this.scene.pushMatrix();
        this.scene.translate(0, 5.5, 0);
        this.scene.rotate(Math.PI/4, 0, 1, 0);
        this.scene.scale(3, 3, 3);
        this.roof.display();
        this.scene.popMatrix();
        
    }
}