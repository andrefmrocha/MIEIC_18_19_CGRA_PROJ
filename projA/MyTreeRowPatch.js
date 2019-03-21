class MyTreeRowPatch extends CGFobject {

  constructor(scene) {
      super(scene);
      this.tree1 = new MyTree(scene,1.8,0.6,2,1.2,0,0);
      this.tree2 = new MyTree(scene,1.8,0.6,2,1.2,0,0);
      this.tree3 = new MyTree(scene,1.8,0.6,2,1.2,0,0);
      this.tree4 = new MyTree(scene,1.8,0.6,2,1.2,0,0);
      this.tree5 = new MyTree(scene,1.8,0.6,2,1.2,0,0);
      this.tree6 = new MyTree(scene,1.8,0.6,2,1.2,0,0);


  }

  display(){
    this.scene.pushMatrix();
    this.tree1.display();
    this.scene.translate(3,0,0);
    this.tree2.display();
    this.scene.translate(3,0,0);
    this.tree3.display();
    this.scene.translate(3,0,0);
    this.tree4.display();
    this.scene.translate(3,0,0);
    this.tree5.display();
    this.scene.translate(3,0,0);
    this.tree6.display();;
    this.scene.popMatrix();

  }

  updateBuffers (){

  }

  enableNormalViz(){

  }
  disableNormalViz(){

  }

}
