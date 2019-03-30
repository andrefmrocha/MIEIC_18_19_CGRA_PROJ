class MyHouse extends CGFobject{
    constructor(scene, brickTexture, doorTexture, tilesTexture){
        super(scene);
        this.brickTexture = brickTexture;
        this.doorTexture = doorTexture;
        this.tilesTexture = tilesTexture;
        this.cylinder = new MyCylinder(scene, 6, 0.3, 2);
        this.cube = new MyUnitCubeQuad(scene);
        this.roof = new MyPyramid(scene, 4, 0);
        this.doorOpening = 0;
    }
    
    display(){
        this.brickTexture.apply();
        this.scene.pushMatrix();
        this.scene.scale(2, 1.5, 2);

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
        this.scene.translate(1.7, 5.95, 0);
        this.scene.scale(0.7, 0.5, 0.7);
        this.cylinder.display();
        this.scene.popMatrix();
        
        // Garage
        this.scene.pushMatrix();
        this.scene.scale(1.5, 1.5, 1.5);
        this.scene.scale(2, 2, 2);
        this.scene.pushMatrix();
        this.scene.scale(0.1, 0.97, 1);
        this.scene.translate(5, -0.5, 0);
        this.cube.display();
        this.scene.translate(9.5, 0, 0);
        this.cube.display();
        this.scene.translate(0, 0, -0.5);
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.scale(1, 1, 0.1)
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.translate(4.5, -0.5, 1);
        this.cube.display();
        this.scene.translate(-9.05, 0, 0);
        this.scene.scale(1, 0.99, 1);
        this.scene.garage.apply();
        this.cube.display();
        this.brickTexture.apply();
        this.scene.popMatrix();

        // Small front rectangle
        this.scene.pushMatrix();
        this.scene.pushMatrix();
        this.scene.translate(1, 0, 0.7);
        this.scene.translate(0, 0.85, 0);
        this.scene.scale(1, 0.1, 2.4);
        this.cube.display();
        this.scene.popMatrix();
        this.scene.popMatrix();


        // Big left Rectangle
        this.scene.scale(1, 2, 1);
        this.scene.translate(0, -0.5, 0);
        this.cube.display();
        this.scene.popMatrix();
        
        // Roof
        this.scene.pushMatrix();
        this.scene.translate(0, 5.5, 0);
        this.scene.rotate(Math.PI/4, 0, 1, 0);
        this.scene.scale(3, 3, 3);
        this.tilesTexture.apply();
        this.roof.display();
        this.scene.popMatrix();
        this.scene.popMatrix();


        // Door
        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 0);
        this.scene.scale(2, 3, 1);
        this.scene.translate(0, -0.3, 2.6);
        this.doorTexture.apply();
        this.cube.display();
        this.scene.popMatrix();
        
        
    }
    openDoor(){
        this.doorOpening = 2000;
    }

    update(delta){
        console.log("Door is opening!");
        this.doorOpening-=delta;7
        if(this.doorOpening <= 0)
            this.doorOpening = 0;
    }
}