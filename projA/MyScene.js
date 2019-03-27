/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        this.enableTextures(true);

        //Initialize scene objects
        this.axis = new CGFaxis(this);


        //Object controllers
        this.displayAxis = true;
        this.objectComplexity = 0.5;
        this.displayNormals = false;

        // Textures
        //this.wood = new CGFtexture(this, 'images/wood.jpg');

        this.materialDiffuse = new CGFappearance(this);
        this.materialDiffuse.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialDiffuse.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialDiffuse.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialDiffuse.setShininess(10.0);

        this.textureMineSide = new CGFtexture(this, 'images/mineSide.png');
        this.textureMineTop = new CGFtexture(this, 'images/mineTop.png');
        this.textureMineBottom = new CGFtexture(this, 'images/mineBottom.png');

        this.materialWood = new CGFappearance(this);
        this.materialWood.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialWood.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialWood.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialWood.setShininess(10.0);
        this.materialWood.loadTexture('images/wood.jpg');

        this.materialTreeTop = new CGFappearance(this);
        this.materialTreeTop.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialTreeTop.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialTreeTop.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialTreeTop.setShininess(10.0);
        this.materialTreeTop.loadTexture('images/treetop.jpg');

        this.materialHillsBk = new CGFappearance(this);
        this.materialHillsBk.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialHillsBk.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialHillsBk.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialHillsBk.setShininess(10.0);
        this.materialHillsBk.loadTexture('images/skybox/hills_bk.jpg');

        this.materialHillsFt = new CGFappearance(this);
        this.materialHillsFt.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialHillsFt.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialHillsFt.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialHillsFt.setShininess(10.0);
        this.materialHillsFt.loadTexture('images/skybox/hills_ft.jpg');

        this.materialHillsLf = new CGFappearance(this);
        this.materialHillsLf.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialHillsLf.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialHillsLf.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialHillsLf.setShininess(10.0);
        this.materialHillsLf.loadTexture('images/skybox/hills_lf.jpg');

        this.materialHillsRf = new CGFappearance(this);
        this.materialHillsRf.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialHillsRf.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialHillsRf.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialHillsRf.setShininess(10.0);
        this.materialHillsRf.loadTexture('images/skybox/hills_rt.jpg');

        this.materialHillsUp = new CGFappearance(this);
        this.materialHillsUp.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialHillsUp.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialHillsUp.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialHillsUp.setShininess(10.0);
        this.materialHillsUp.loadTexture('images/skybox/hills_up.jpg');

        this.materialHillsDn = new CGFappearance(this);
        this.materialHillsDn.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialHillsDn.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialHillsDn.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialHillsDn.setShininess(10.0);
        this.materialHillsDn.loadTexture('images/skybox/hills_dn.jpg');

        this.brick = new CGFappearance(this);
        this.brick.setAmbient(0.1, 0.1, 0.1, 1);
        this.brick.setDiffuse(0.9, 0.9, 0.9, 1);
        this.brick.setSpecular(0.1, 0.1, 0.1, 1);
        this.brick.setShininess(10.0);
        this.brick.loadTexture('images/brick.jpg');

        this.door = new CGFappearance(this);
        this.door.setAmbient(0.1, 0.1, 0.1, 1);
        this.door.setDiffuse(0.9, 0.9, 0.9, 1);
        this.door.setSpecular(0.1, 0.1, 0.1, 1);
        this.door.setShininess(10.0);
        this.door.loadTexture('images/door.jpg');

        this.tiles = new CGFappearance(this);
        this.tiles.setAmbient(0.1, 0.1, 0.1, 1);
        this.tiles.setDiffuse(0.9, 0.9, 0.9, 1);
        this.tiles.setSpecular(0.1, 0.1, 0.1, 1);
        this.tiles.setShininess(10.0);
        this.tiles.loadTexture('images/tiles.jpg');

        this.water = new CGFappearance(this);
        this.water.setAmbient(0.1, 0.1, 0.1, 1);
        this.water.setDiffuse(0.3, 0.3, 0.3, 1);
        this.water.setSpecular(0.9, 0.9, 0.9, 1);
        this.water.setShininess(10.0);
        this.water.loadTexture('images/water.jpg');

        this.floorTile = new CGFappearance(this);
        this.floorTile.setAmbient(0.1, 0.1, 0.1, 1);
        this.floorTile.setDiffuse(0.3, 0.3, 0.3, 1);
        this.floorTile.setSpecular(0.9, 0.9, 0.9, 1);
        this.floorTile.setShininess(10.0);
        this.floorTile.loadTexture('images/floorTile.jpeg');


        this.materialMineSide = new CGFappearance(this);
        this.materialMineSide.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialMineSide.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialMineSide.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialMineSide.setShininess(10.0);
        this.materialMineSide.setTexture(this.textureMineSide);

        //-------

        this.materialMineTop = new CGFappearance(this);
        this.materialMineTop.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialMineTop.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialMineTop.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialMineTop.setShininess(10.0);
        this.materialMineTop.setTexture(this.textureMineTop);

        //-------
        this.materialMineBottom = new CGFappearance(this);
        this.materialMineBottom.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialMineBottom.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialMineBottom.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialMineBottom.setShininess(10.0);
        this.materialMineBottom.setTexture(this.textureMineBottom);


        //Objects connected to MyInterface

        this.forest = new MyTreeGroupPatch(this);
        this.prism = new MyPrism(this,3,2,3);
        this.cylinder = new MyCylinder(this,50,2,3);
        this.house = new MyHouse(this, this.brick, this.door, this.tiles);
        this.hill = new MyVoxelHill(this, 4);
        this.pool = new MyPool(this, 4, 10);
        this.cubemap = new MyCubeMap(this,100);
        this.floor = new MyFloor(this, 10, 10);
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    updateObjectComplexity(){
        this.cylinder.updateBuffers(this.objectComplexity);
    }

    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        // Draw axis
        if(this.displayAxis)
            this.axis.display();
/*
        if(this.displayNormals)
            this.cylinder.enableNormalViz();
        else
            this.cylinder.disableNormalViz();
*/
        //Apply default appearance
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section

        //this.cubemap.display();


        //this.prism.display();
        this.forest.display();

        this.scale(0.6, 0.6, 0.6)
        this.floor.display();
        // this.house.display();
        // this.hill.display();
        //this.pool.display();
        // ---- END Primitive drawing section
    }
}
