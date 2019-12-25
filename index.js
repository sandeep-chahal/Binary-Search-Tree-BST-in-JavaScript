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
    let currentNode = this.root;
    while(currentNode){
      if(currentNode.value === value) return currentNode;
      else if(currentNode.value > value) currentNode = currentNode.left;
      else if(currentNode.value < value) currentNode = currentNode.right;
    }
    return false;
  }

  remove(value){
    if(!this.root) return false;
    let currentNode = this.root;
    let parent = null;
    let replacingNode = null;
    let replacingParent = null;
    while(true){

      if(currentNode.value === value){
        // if it's leaf node
        if(currentNode.left === null && currentNode.right === null){
          if(parent.value > value){
            parent.left = null;
          }else{
            parent.right = null;
          }
          return this;
        }

        // if it doesn't have right node
        if(currentNode.right === null){
          if(parent.value > value){
            parent.left = currentNode.left;
          }else{
            parent.right = currentNode.left;
          }
          return this;
        }else{     //if it have both left and right node
          replacingNode = currentNode.right;
          replacingParent = currentNode;
          while(replacingNode.left !== null){
            replacingParent = replacingNode;
            replacingNode = replacingNode.left;
          }
          if(value === this.root.value){


            return this;
          }
          if(currentNode.right === replacingNode){
            replacingNode.left = currentNode.left;
            if(parent.value > value){
              parent.left = replacingNode
            }else if(parent.value < value){
              parent.right = replacingNode;
            }
            return this;
          }
          if(parent.value > value){
            let replLeft = replacingNode.left;
            replacingNode.left = currentNode.left;
            replacingNode.right = currentNode.right;
            replacingParent.left = replLeft;
            parent.left = replacingNode;
          }else if(parent.value < value){
            let replLeft = replacingNode.left;
            replacingNode.left = currentNode.left;
            replacingNode.right = currentNode.right;
            replacingParent.left = replLeft;
            parent.right = replacingNode;
            

          }
          return this;
        }

      }
      else if(currentNode.value > value){
        parent = currentNode;
        currentNode = currentNode.left;
      } 
      else if(currentNode.value < value){
        parent = currentNode;
        currentNode = currentNode.right;
      }
    }
  return false;

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
myBST.remove(50);
// JSON.stringify(traverse(myBST.root))


function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

