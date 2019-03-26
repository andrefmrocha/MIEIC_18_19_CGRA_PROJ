class MyPool extends CGFobject{
    constructor(scene, base, height){
        super(scene);
        this.base = base;
        this.height = height;
        this.quad = new MyQuad(scene);
    }

    display(){
        this.scene.scale(this.base, 1, this.height)
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.scene.water.apply();
        this.quad.display();
    }

    
}