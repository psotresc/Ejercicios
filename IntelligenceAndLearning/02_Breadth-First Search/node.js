function Node(val){
  this.value = val;
  this.edges = [];
  this.searched = false;
  this.parent = null;
}

Node.prototype.addEdge = function (neighbor){
    this.edges.push(neighbor)
    // Both edges
    neighbor.edges.push(this);
}
