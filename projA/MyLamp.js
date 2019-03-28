class MyLamp extends CGFobject {
	constructor(scene, radius) {
		super(scene);
		this.initBuffers();
		this.radius = radius;
    this.sphere = new MySphere(this.scene , 2);

    this.scene.lights[1].setPosition(0,0,0);
    this.scene.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);
    this.scene.lights[1].setSpecular(1.0, 1.0, 1.0, 1.0);
    this.scene.lights[1].enable();
    this.scene.lights[1].setVisible(true);
    this.scene.lights[1].update();

		this.materialGlass = new CGFappearance(this.scene);
		this.materialGlass.setAmbient(1, 0.1, 0.1, 0.3);
		this.materialGlass.setDiffuse(0.9, 0.9, 0.9, 0.01);
		this.materialGlass.setSpecular(0.1, 0.1, 0.1, 0.01);
		this.materialGlass.setShininess(10.0);


	}

	display(){

    //this.scene.lights[1].update();
    this.scene.pushMatrix();
		this.materialGlass.apply();
    this.scene.scale(this.radius,this.radius,this.radius);
    this.sphere.display();
    this.scene.popMatrix();

  }


}
