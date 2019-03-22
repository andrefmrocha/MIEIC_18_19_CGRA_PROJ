class MyTreeGroupPatch extends CGFobject {

  constructor(scene) {
      super(scene);
      this.tree1 = new MyTree(scene,1.8,0.6,2,1.2,this.scene.materialWood,this.scene.materialTreeTop);
      this.tree2 = new MyTree(scene,1.8,0.6,2,1.2,this.scene.materialWood,this.scene.materialTreeTop);
      this.tree3 = new MyTree(scene,1.8,0.6,2,1.2,this.scene.materialWood,this.scene.materialTreeTop);
      this.tree4 = new MyTree(scene,1.8,0.6,2,1.2,this.scene.materialWood,this.scene.materialTreeTop);
      this.tree5 = new MyTree(scene,1.8,0.6,2,1.2,this.scene.materialWood,this.scene.materialTreeTop);
      this.tree6 = new MyTree(scene,1.8,0.6,2,1.2,this.scene.materialWood,this.scene.materialTreeTop);
      this.tree7 = new MyTree(scene,1.8,0.6,2,1.2,this.scene.materialWood,this.scene.materialTreeTop);
      this.tree8 = new MyTree(scene,1.8,0.6,2,1.2,this.scene.materialWood,this.scene.materialTreeTop);
      this.tree9 = new MyTree(scene,1.8,0.6,2,1.2,this.scene.materialWood,this.scene.materialTreeTop);

  }

  display(){
    this.scene.pushMatrix();
    this.tree1.display();
    this.scene.translate(3,0,0);
    this.tree2.display();
    this.scene.translate(3,0,0);
    this.tree3.display();
    this.scene.translate(-6,0,3);
    this.tree4.display();
    this.scene.translate(3,0,0);
    this.tree5.display();
    this.scene.translate(3,0,0);
    this.tree6.display();
    this.scene.translate(-6,0,3);
    this.tree7.display();
    this.scene.translate(3,0,0);
    this.tree8.display();
    this.scene.translate(3,0,0);
    this.tree9.display();
    this.scene.popMatrix();

  }

  updateBuffers (){

  }

  enableNormalViz(){

  }
  disableNormalViz(){

  }

}
