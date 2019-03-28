
class MySphere extends CGFobject {
    constructor(scene, complexity ) {
        super(scene);
        this.complexity = complexity;
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        //this.normals = [];

        //this.texCoords = [];

        var t = (1.0 + Math.sqrt(5.0)) / 2.0;
        this.vertices.push(-1, t, 0);
        this.vertices.push(1, t, 0);
        this.vertices.push(-1, -t, 0);
        this.vertices.push(1, -t, 0);
        this.vertices.push(0, -1, t);
        this.vertices.push(0, 1, t);
        this.vertices.push(0, -1, -t);
        this.vertices.push(0, 1, -t);
        this.vertices.push(t, 0, -1);
        this.vertices.push(t, 0, 1);
        this.vertices.push(-t, 0, -1);
        this.vertices.push(-t, 0, 1);

        this.indices.push(0, 11, 5);
        this.indices.push(0, 5, 1);
        this.indices.push(0, 1, 7);
        this.indices.push(0, 7, 10);
        this.indices.push(0, 10, 11);
        this.indices.push(1, 5, 9);
        this.indices.push(5, 11, 4);
        this.indices.push(11, 10, 2);
        //this.indices.push(10, 7, 6);
        //this.indices.push(7, 1, 8);
        //this.indices.push(3, 9, 4);
        //this.indices.push(3, 4, 2);
        //this.indices.push(3, 2, 6);
        //this.indices.push(3, 6, 8);
        //this.indices.push(3, 8, 9);
        //this.indices.push(4, 9, 5);
        //this.indices.push(2, 4, 11);
        //this.indices.push(6, 2, 10);
        //this.indices.push(8, 6, 7);
        //this.indices.push(9, 8, 1);

        for(var i = 0 ; i < this.complexity ; i++){
          var faceCount = this.indices.length;
          console.log(this.indices.length/3);
          console.log(this.vertices.length/3);
          for(var face = 0; face < faceCount; face+=3){
            var x1 = this.indices[face];
            var y1 = this.indices[face+1];
            var z1 = this.indices[face+2];

            var x2 = this.vertices.length/3;
            //this.vertices.push((this.vertices[x1] + this.vertices[y1])/2 , (this.vertices[x1 + 1] + this.vertices[y1 + 1])/2 , (this.vertices[x1 + 2] + this.vertices[y1 + 2])/2);
            this.addVertex((this.vertices[3 * x1] + this.vertices[3 * y1])/2 , (this.vertices[3 * x1 + 1] + this.vertices[3 * y1 + 1])/2 , (this.vertices[3 * x1 + 2] + this.vertices[3 * y1 + 2])/2);

            var y2 = this.vertices.length/3;
            this.addVertex((this.vertices[3 * y1] + this.vertices[3 * z1])/2 , (this.vertices[3 * y1 + 1] + this.vertices[3 * z1 + 1])/2 , (this.vertices[3 * y1 + 2] + this.vertices[3 * z1 + 2])/2);
            //this.vertices.push((this.vertices[y1] + this.vertices[z1])/2 , (this.vertices[y1 + 1] + this.vertices[z1 + 1])/2 , (this.vertices[y1 + 2] + this.vertices[z1 + 2])/2);

            var z2 = this.vertices.length/3;
            this.addVertex((this.vertices[3 * z1] + this.vertices[3 * x1])/2 , (this.vertices[3 * z1 + 1] + this.vertices[3 * x1 + 1])/2 , (this.vertices[3 * z1 + 2] + this.vertices[3 * x1 + 2])/2);
            //this.vertices.push((this.vertices[z1] + this.vertices[x1])/2 , (this.vertices[z1 + 1] + this.vertices[x1 + 1])/2 , (this.vertices[z1 + 2] + this.vertices[x1 + 2])/2);

            this.addFace(x1, x2, z2);
            //this.addFace(y1, y2, x2);
            //this.addFace(z1, z2, y2);
            //this.addFace(x2, y2, z2);


          }
          console.log(this.indices.length/3);
          console.log(this.vertices.length/3);

        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }

    addFace(a,b,c){
      //console.log(a,b,c);
      this.indices.push(a,b,c);
    }

    addVertex(x,y,z){
      var length = Math.sqrt( x*x + y*y + z*z );
      this.vertices.push(x/length,y/length,z/length);
    }

    updateBuffers(complexity){
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}
