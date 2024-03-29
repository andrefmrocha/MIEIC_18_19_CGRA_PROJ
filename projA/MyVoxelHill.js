/* eslint-disable no-undef */
class MyVoxelHill extends CGFobject {
    constructor (scene, levels, applyingTexture) {
        super(scene);
        this.cube = new MyUnitCubeQuad(scene);
        this.levels = levels;
        this.applyingTexture = applyingTexture;
    }

    display () {
        this.scene.pushMatrix();
        this.applyingTexture.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        // Multiplos de 8
        // 3, 5, 7...
        // 1, 3, 5
        this.scene.translate(0, -1, 0);
        for (let i = this.levels - 1; i >= 1; i--) {
            let nCubes = 2 * i - 1;
            // console.log("nCubes: ", nCubes);
            this.scene.pushMatrix();
            this.scene.translate(-i, 0, i);
            this.cube.display();
            for (let j = 0; j < nCubes; j++) {
                // console.log("Iteration: ", j);
                this.scene.translate(1, 0, 0);
                this.cube.display();
            }
            this.scene.popMatrix();
            this.scene.pushMatrix();
            this.scene.translate(i, 0, i);
            this.cube.display();
            for (let j = 0; j < nCubes; j++) {
                // console.log("Iteration: ", j);
                this.scene.translate(0, 0, -1);
                this.cube.display();
            }
            this.scene.popMatrix();
            this.scene.pushMatrix();
            this.scene.translate(i, 0, -i);
            this.cube.display();
            for (let j = 0; j < nCubes; j++) {
                // console.log("Iteration: ", j);
                this.scene.translate(-1, 0, 0);
                this.cube.display();
            }
            this.scene.popMatrix();
            this.scene.pushMatrix();
            this.scene.translate(-i, 0, -i);
            this.cube.display();
            for (let j = 0; j < nCubes; j++) {
                // console.log("Iteration: ", j);
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
