/**
* MyCylinder
* @constructor
*/
class MyCylinder extends CGFobject {
    constructor(scene, slices,radius, height) {
        super(scene);
        this.slices = slices;
        this.radius = radius;
        this.height = height;
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];

        var ang = 0;
        var alphaAng = 2*Math.PI/this.slices;

        for(var i = 0; i < this.slices; i++){
            var sa = this.radius * Math.sin(ang);
            var saa = this.radius * Math.sin(ang+alphaAng);
            var ca= this.radius * Math.cos(ang);
            var caa= this.radius * Math.cos(ang+alphaAng);

            this.vertices.push(ca, 0 , sa );
            this.vertices.push(caa, 0 , saa );
            this.vertices.push(ca, this.height , sa );
            this.vertices.push(caa, this.height , saa );

            this.normals.push(ca,0,sa);
            this.normals.push(ca,0,sa);
            this.normals.push(ca,0,sa);
            this.normals.push(ca,0,sa);

            this.indices.push( 4*i+2 , 4*i+1 , 4*i );
            this.indices.push( 4*i+2 , 4*i+3 , 4*i+1 );

            ang+=alphaAng;
        }

        var tmp = this.indices.slice(0);
        tmp.reverse();
        this.indices = this.indices.concat(tmp);

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }

    updateBuffers(complexity){
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}
