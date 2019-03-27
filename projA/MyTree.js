class MyTree extends CGFobject {
    constructor(scene,trunkHeight,trunkRadius,treeTopHeight,treeTopRadius,trunkTexture,treeTopTexture) {
        super(scene);
        this.trunk = new MyCylinder(scene,10,trunkRadius,trunkHeight);
        this.treeTop = new MyCone(scene,5 , treeTopRadius , treeTopHeight);
        this.trunkTexture = trunkTexture;
        this.treeTopTexture = treeTopTexture;

    }

    display(){
      if(this.trunkTexture != 0)
        this.trunkTexture.apply();
      this.trunk.display();
      this.scene.pushMatrix();
      this.scene.translate(0,this.trunk.height,0);
      if(this.treeTopTexture != 0)
        this.treeTopTexture.apply();
      this.treeTop.display();
      this.scene.popMatrix();
    }

    updateBuffers (){

    }

    enableNormalViz(){
      this.trunk.enableNormalViz();
      this.treeTop.enableNormalViz();
    }
    disableNormalViz(){
      this.trunk.disableNormalViz();
      this.treeTop.disableNormalViz();
    }

  }
