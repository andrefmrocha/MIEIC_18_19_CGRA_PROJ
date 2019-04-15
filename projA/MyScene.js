/* eslint-disable no-undef */
/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor () {
        super();
        this.time = 0;
    }
    init (application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        // Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        // this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        // this.gl.disable(this.gl.DEPTH_TEST);

        // Initialize scene objects
        this.axis = new CGFaxis(this);

        // Object controllers
        this.displayAxis = true;
        this.objectComplexity = 0.5;
        this.displayNormals = false;

        this.setUpdatePeriod(1000 / 30);
        this.dayStates = { 'Day': 0, 'Night1': 1  , 'Night2' : 2 };
        this.selectedDayState = 0;
        this.setDayState();

        this.displayLamp = true;

        this.textures = true;

        // Textures
        // this.wood = new CGFtexture(this, 'images/wood.jpg');

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






        this.materialNightBk = new CGFappearance(this);
        this.materialNightBk.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialNightBk.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialNightBk.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialNightBk.setShininess(10.0);
        this.materialNightBk.loadTexture('images/hw_nightsky/nightsky_bk.jpg');

        this.materialNightFt = new CGFappearance(this);
        this.materialNightFt.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialNightFt.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialNightFt.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialNightFt.setShininess(10.0);
        this.materialNightFt.loadTexture('images/hw_nightsky/nightsky_ft.jpg');

        this.materialNightLf = new CGFappearance(this);
        this.materialNightLf.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialNightLf.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialNightLf.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialNightLf.setShininess(10.0);
        this.materialNightLf.loadTexture('images/hw_nightsky/nightsky_lf.jpg');

        this.materialNightRf = new CGFappearance(this);
        this.materialNightRf.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialNightRf.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialNightRf.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialNightRf.setShininess(10.0);
        this.materialNightRf.loadTexture('images/hw_nightsky/nightsky_rt.jpg');

        this.materialNightUp = new CGFappearance(this);
        this.materialNightUp.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialNightUp.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialNightUp.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialNightUp.setShininess(10.0);
        this.materialNightUp.loadTexture('images/hw_nightsky/nightsky_up.jpg');

        this.materialNightDn = new CGFappearance(this);
        this.materialNightDn.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialNightDn.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialNightDn.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialNightDn.setShininess(10.0);
        this.materialNightDn.loadTexture('images/hw_nightsky/nightsky_dn.jpg');

        this.brick = new CGFappearance(this);
        this.brick.setAmbient(0.1, 0.1, 0.1, 1);
        this.brick.setDiffuse(0.9, 0.9, 0.9, 1);
        this.brick.setSpecular(0.1, 0.1, 0.1, 1);
        this.brick.setShininess(10.0);
        this.brick.loadTexture('images/brick.jpg');
        this.brick.setTextureWrap('REPEAT', 'REPEAT');

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
        this.floorTile.setDiffuse(1, 1, 1, 1);
        this.floorTile.setSpecular(1, 1, 1, 1);
        this.floorTile.setShininess(10.0);
        this.floorTile.loadTexture('images/mineTop.png');

        this.garage = new CGFappearance(this);
        this.garage.setAmbient(0.1, 0.1, 0.1, 1);
        this.garage.setDiffuse(0.3, 0.3, 0.3, 1);
        this.garage.setSpecular(0.9, 0.9, 0.9, 1);
        this.garage.setShininess(10.0);
        this.garage.loadTexture('images/garage.jpg');

        this.materialMineSide = new CGFappearance(this);
        this.materialMineSide.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialMineSide.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialMineSide.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialMineSide.setShininess(10.0);
        this.materialMineSide.setTexture(this.textureMineSide);

        // -------

        this.materialMineTop = new CGFappearance(this);
        this.materialMineTop.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialMineTop.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialMineTop.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialMineTop.setShininess(10.0);
        this.materialMineTop.setTexture(this.textureMineTop);
        // -------

        this.rockMaterial = new CGFappearance(this);
        this.rockMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.rockMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.rockMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.rockMaterial.setShininess(10.0);
        this.rockMaterial.loadTexture('images/rock.jpg');

        // -------
        this.materialMineBottom = new CGFappearance(this);
        this.materialMineBottom.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialMineBottom.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialMineBottom.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialMineBottom.setShininess(10.0);
        this.materialMineBottom.setTexture(this.textureMineBottom);

        this.materialOrange = new CGFappearance(this);
        this.materialOrange.setAmbient(0.75/4, 0.45/4, 0, 1);
        this.materialOrange.setDiffuse(1, 0.6, 0, 1);
        this.materialOrange.setSpecular(0.2, 0.15, 0, 1);
        this.materialOrange.setShininess(10.0);

        this.materialApple = new CGFappearance(this);
        this.materialApple.setAmbient(1/4, 0, 0, 1);
        this.materialApple.setDiffuse(1, 0, 0, 1);
        this.materialApple.setSpecular(0.25, 0, 0, 1);
        this.materialApple.setShininess(10.0);

        // Objects connected to MyInterface

        this.forest = new MyTreeGroupPatch(this);
        this.prism = new MyPrism(this, 3, 2, 3);
        this.cylinder = new MyCylinder(this, 50, 2, 3);
        this.house = new MyHouse(this, this.brick, this.door, this.tiles);
        this.greenHill = new MyVoxelHill(this, 5, this.materialMineTop);
        this.rockHill = new MyVoxelHill(this, 10, this.rockMaterial);
        this.pool = new MyPool(this, 4, 10);
        this.cubemapday = new MyCubeMapDay(this, 50);
        this.cubemapnight = new MyCubeMapNight(this, 50);
        this.floor = new MyFloor(this, 10, 10);
        this.apple = new MyApple(this, 3);

        // this.sphere = new MySphere(this,3);
        this.circle = new MyCircle(this, 10);

        this.lamp = new MyLamp(this, 0.2);
        this.fire = new MyFirePit(this);
    }
    initLights () {
        /*  this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].setVisible();
        this.lights[0].update(); */
    }
    update (currTime) {
        let delta = currTime - this.time;
        this.time = currTime;

        if (this.gui.isKeyPressed('KeyO')) {
            this.openGarage(delta);
        } else if (this.gui.isKeyPressed('KeyP')) {
            this.closeGarage(delta);
        }

        if (this.house.doorOpening === true) {
            this.house.update(delta);
        } else if (this.house.doorClosing === true) {
            this.house.update(delta);
        }
    }

    openGarage (delta) {
        console.log('Open the door!', delta);
        if (this.house.doorOpening === false) {
            // this.house.garageY = -1;
            this.house.openDoor();
        }
    }

    closeGarage (delta) {
        console.log('Close the door!', delta);
        if (this.house.doorClosing === false) { this.house.closeDoor(); }
    }

    initCameras () {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(-15, 5, 15), vec3.fromValues(5, 0, 0));
    }
    setDefaultAppearance () {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }

    setDayState () {
        // eslint-disable-next-line eqeqeq
        if (this.selectedDayState == this.dayStates['Day']) {
            this.lights[0].setPosition(0, 25, 0, 1);
            this.lights[0].setAmbient(1.0, 1, 0.8, 1.0);
            this.lights[0].setDiffuse(1.0, 1, 1, 1.0);
            this.lights[0].setSpecular(1.0, 1.0, 1.0, 1.0);
            this.lights[0].setConstantAttenuation(1.2);
            this.lights[0].enable();
            //this.lights[0].setVisible(true);
            this.lights[0].update();
        // eslint-disable-next-line eqeqeq
      } else if (this.selectedDayState == this.dayStates['Night1']) {
            this.lights[0].setPosition(0, 25, 0, 1);
            this.lights[0].setAmbient(1, 1, 1, 1.0);
            this.lights[0].setDiffuse(0.6, 0.6, 0.8, 1.0);
            this.lights[0].setSpecular(1.0, 1.0, 1.0, 1.0);
            this.lights[0].setConstantAttenuation(1.5);
            this.lights[0].enable();
            //this.lights[0].setVisible(true);
            this.lights[0].update();
        }else if (this.selectedDayState == this.dayStates['Night2']) {
            this.lights[0].setPosition(0, 0.5, 0, 1);
            this.lights[0].setAmbient(0.98*0.8, 0.8 * 0.8, 0.5*0.8, 1.0);
            this.lights[0].setDiffuse(0.98, 0.7, 0.5, 1.0);
            this.lights[0].setSpecular(0.98/4, 0.7/4, 0.5/4, 1.0);
            this.lights[0].setConstantAttenuation(1);
            this.lights[0].enable();
            //this.lights[0].setVisible(true);
            this.lights[0].update();
        }
    }

    cenario () {
        this.lights[0].update();

        this.pushMatrix();
        this.translate(-25, 0, -15);
        for (let x = -25; x < 25; x += 10) {
            for (let y = -25; y < 25; y += 10) {
                this.floor.display();
                this.translate(10, 0, 0);
            }
            this.translate(-50, 0, 10);
        }
        this.popMatrix();

        if (this.displayLamp) {
            this.lamp.enable();
        } else {
            this.lamp.disable();
        }

        this.pushMatrix();
        this.translate(-2, 1, 4);
        this.lamp.display();
        this.popMatrix();

        if(this.selectedDayState == 0)
          this.cubemapday.display();
        else this.cubemapnight.display();


        // this.prism.display();

        this.scale(0.35, 0.35, 0.35);
        this.floor.display();

        this.pushMatrix();
        this.scale(2, 2, 2);
        this.translate(10, 0, -4);
        this.forest.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(4, 0, -3);
        this.house.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-5, 0, -8);
        this.greenHill.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(45, 0, -40);
        this.rockHill.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-4, 0.2, 2);
        this.pool.display();
        this.popMatrix();
    }

    display () {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();
        this.enableTextures(this.textures);

        // Draw axis
        if (this.displayAxis) { this.axis.display(); }
        /*
        if(this.displayNormals)
            this.cylinder.enableNormalViz();
        else
            this.cylinder.disableNormalViz();
*/
        // Apply default appearance
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section

        //this.forest.display();
        this.cenario();
        //this.apple.display();
        //this.fire.display();

        // ---- END Primitive drawing section
    }
}
