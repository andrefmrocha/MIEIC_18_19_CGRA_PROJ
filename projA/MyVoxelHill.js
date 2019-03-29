class MyVoxelHill extends CGFobject{
    constructor(scene, levels){
        super(scene);
        this.cube = new MyUnitCubeQuad(scene);
        this.levels = levels;
    }

    display(){
        this.scene.pushMatrix();
        this.scene.materialMineTop.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        //Multiplos de 8
        //3, 5, 7...
        //1, 3, 5
        this.scene.translate(0, -1, 0);
        for(var i = this.levels - 1; i >= 1; i--){
            var nCubes = 2 * i - 1;
            //console.log("nCubes: ", nCubes);
            this.scene.pushMatrix();
            this.scene.translate(-i, 0, i);
            this.cube.display();
            for(var j = 0; j < nCubes; j++){
                //console.log("Iteration: ", j);
                this.scene.translate(1, 0, 0);
                this.cube.display();
            }
            this.scene.popMatrix();
            this.scene.pushMatrix();
            this.scene.translate(i, 0, i);
            this.cube.display();
            for(var j = 0; j < nCubes; j++){
                //console.log("Iteration: ", j);
                this.scene.translate(0, 0, -1);
                this.cube.display();
            }
            this.scene.popMatrix();
            this.scene.pushMatrix();
            this.scene.translate(i, 0, -i);
            this.cube.display();
            for(var j = 0; j < nCubes; j++){
                //console.log("Iteration: ", j);
                this.scene.translate(-1, 0, 0);
                this.cube.display();
            }
            this.scene.popMatrix();
            this.scene.pushMatrix();
            this.scene.translate(-i, 0, -i);
            this.cube.display();
            for(var j = 0; j < nCubes; j++){
                //console.log("Iteration: ", j);
                this.scene.translate(0, 0, 1);
                this.cube.display();
            }
            this.scene.popMatrix();
            this.scene.translate(0, 1, 0);
        }
        this.cube.display();
        this.scene.popMatrix();
    }
}
