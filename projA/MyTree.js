/* eslint-disable no-undef */
class MyTree extends CGFobject {
    constructor (scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture, treeTopTexture , fruit) {
        super(scene);
        this.trunk = new MyCylinder(scene, 10, trunkRadius, trunkHeight);
        this.treeTop = new MyCone(scene, 10, treeTopRadius, treeTopHeight);
        this.trunkTexture = trunkTexture;
        this.treeTopTexture = treeTopTexture;

        if(fruit == undefined){
          this.fruit = undefined;
        }
        else if(fruit == 0)
          this.fruit = new MyOrange(this.scene, 0.1);
        else if(fruit == 1)
          this.fruit = new MyApple(this.scene, 0.1);
        else {
          this.fruit = undefined;
        }

        this.fruitCoords = [];
        if(this.fruit != undefined){
          for (let i = 0; i < 5; i++) {
              let check = true;
              let ang = Math.random() * 2 * Math.PI;
              let hl = Math.random() * treeTopHeight * 0.70 + treeTopHeight * 0.15;
              let rl = treeTopRadius - hl * (treeTopRadius) / treeTopHeight + this.fruit.radius / 2;
              let x = rl * Math.cos(ang);
              let y = rl * Math.sin(ang);
              for (let a = 0; a < this.fruitCoords.length; a += 3) {
                  if (Math.sqrt(Math.pow(x - this.fruitCoords[a], 2) + Math.pow(y - this.fruitCoords[a + 2], 2) + Math.pow(hl - this.fruitCoords[a + 1], 2)) < 3 * this.fruit.radius) {
                      check = false;
                      break;
                  }
              }
              if (check) {
                  this.fruitCoords.push(x, hl, y);
              }
          }
        }
    }

    display () {
        if (this.trunkTexture !== 0) { this.trunkTexture.apply(); }
        this.trunk.display();

        this.scene.pushMatrix();
        this.scene.translate(0, this.trunk.height, 0);
        if (this.treeTopTexture !== 0) { this.treeTopTexture.apply(); }
        this.treeTop.display();
        this.scene.popMatrix();
        if(this.fruit != undefined){
          for (let a = 0; a < this.fruitCoords.length; a += 3) {
              this.scene.pushMatrix();
              this.scene.translate(this.fruitCoords[a], this.fruitCoords[a + 1] + this.trunk.height, this.fruitCoords[a + 2]);
              this.fruit.display();
              this.scene.popMatrix();
          }
        }
    }

    updateBuffers () {

    }

    enableNormalViz () {
        this.trunk.enableNormalViz();
        this.treeTop.enableNormalViz();
    }
    disableNormalViz () {
        this.trunk.disableNormalViz();
        this.treeTop.disableNormalViz();
    }
}
