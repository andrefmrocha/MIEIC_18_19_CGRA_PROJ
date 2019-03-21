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

        var sa = this.radius * Math.sin(ang);
        var ca= this.radius * Math.cos(ang);

        this.vertices.push(ca, 0 , sa );
        this.vertices.push(ca, this.height , sa );

        this.normals.push(ca,0,sa);
        this.normals.push(ca,0,sa);

        ang+=alphaAng;


        for(var i = 0; i < this.slices; i++){

            sa = this.radius * Math.sin(ang);
            ca= this.radius * Math.cos(ang);

            this.vertices.push(ca, 0 , sa );
            this.vertices.push(ca, this.height , sa );

            this.normals.push(ca,0,sa);
            this.normals.push(ca,0,sa);


            this.indices.push( 2*i+1 , 2*i+2 , 2*i );
            this.indices.push( 2*i+2 , 2*i+3 , 2*i+1 );

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
