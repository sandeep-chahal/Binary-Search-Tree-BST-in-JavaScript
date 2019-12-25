class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST{
  constructor(){
    this.root = null;
  }

  insert(value){
    const newNode = new Node(value);
    if(!this.root){
      this.root = newNode;
      return this;
    }
    let focusedNode = this.root;
    while(focusedNode !== null){
      if(focusedNode.value > value){
        if(focusedNode.left === null){
          focusedNode.left = newNode;
          return this;
        }
        focusedNode = focusedNode.left;
      }else if(focusedNode.value < value){
        if(focusedNode.right === null){
          focusedNode.right = newNode;
          return this;
        }
        focusedNode = focusedNode.right;
      }
    }
  }

  lookup(value){
    
}

const myBST = new BST();
myBST.insert(50);
myBST.insert(25);
myBST.insert(75);
myBST.insert(10);
myBST.insert(35);
myBST.insert(30);


  }

}

const myBST = new BST();
myBST.insert(50);
myBST.insert(25);
myBST.insert(75);
myBST.insert(10);
myBST.insert(35);
myBST.insert(30);
myBST.insert(70);
myBST.insert(100);
myBST.insert(90);

JSON.stringify(traverse(myBST.root))


function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

