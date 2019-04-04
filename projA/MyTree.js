class MyTree extends CGFobject {
    constructor(scene,trunkHeight,trunkRadius,treeTopHeight,treeTopRadius,trunkTexture,treeTopTexture) {
        super(scene);
        this.trunk = new MyCylinder(scene,10,trunkRadius,trunkHeight);
        this.treeTop = new MyCone(scene,10 , treeTopRadius , treeTopHeight);
        this.trunkTexture = trunkTexture;
        this.treeTopTexture = treeTopTexture;

        this.apple = new MyOrange(this.scene,0.1);

        this.appleCoords = [];

        for(var  i = 0; i < 5 ; i++){
          var check = true;
          var ang = Math.random() * 2*Math.PI;
          var hl = Math.random() * treeTopHeight*0.70 + treeTopHeight * 0.15;
          var rl = treeTopRadius - hl * (treeTopRadius) / treeTopHeight + this.apple.radius/2;
          var x = rl * Math.cos(ang);
          var y = rl * Math.sin(ang);
          for(var a = 0; a < this.appleCoords.length;a+=3){
            if(Math.sqrt(Math.pow(x-this.appleCoords[a],2) + Math.pow(y-this.appleCoords[a+2],2) + Math.pow(hl-this.appleCoords[a+1],2)) < 3 * this.apple.radius){
              check = false;
              break;
            }
          }
          if(check){
            this.appleCoords.push(x,hl,y);
          }
        }

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

      for(var a = 0; a < this.appleCoords.length;a+=3){
        this.scene.pushMatrix();
        this.scene.translate(this.appleCoords[a],this.appleCoords[a+1] + this.trunk.height,this.appleCoords[a+2]);
        this.apple.display();
        this.scene.popMatrix();
      }

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
