class TreeNode<T> {
  left: TreeNode<T>;
  right: TreeNode<T>;
  data: T;

  constructor(value: T) {
    this.data = value;
  }
}

class BinaryTree<T> {
  root: TreeNode<T>;

  public add(data: T) {
    const node = new TreeNode(data);
    if (!this.root) {
      this.root = node; 
    } else {
      this.insertNode(this.root, node);
    }
  }

  public delete(data: T) {
    this.root = this.deleteNode(this.root, data);
  }

   private insertNode(root: TreeNode<T>, newNode: TreeNode<T>) {
    if (newNode.data > root.data) {
      if (!root.right) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    } else if (newNode.data < root.data) {
      if (!root.left) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    }
  }

  public print() {
    this.recursivePrint(this.root);
  }

  private recursivePrint(root: TreeNode<T>) {
    if (!root) {
      return;
    }
    this.recursivePrint(root.left);
    console.log(root.data);
    this.recursivePrint(root.right);
  }

  private deleteNode(root: TreeNode<T>, data: T) {
    if (root === null) {
      return root;
    } else if (data < root.data) {
      root.left = this.deleteNode(root.left, data);
    } else if (data > root.data) {
      root.right = this.deleteNode(root.right, data);
    } else {
      if (!root.left && !root.right) {
        return null;
      } else if (root.left === null) {
        let deletedNode = root;
        root = root.right;
        deletedNode = null;
      } else if (root.right === null) {
        let deletedNode = root;
        root = root.left;
        deletedNode = null;
      } else {
        let temp = root.right;
        
        while (temp.left) {
          temp = temp.left;
        }

        root.data = temp.data;
        root.right = this.deleteNode(root.right, temp.data);
      }
    } 

    return root;
  }

  public search(data: T) {
    let currentNode = this.root;

    while (currentNode) {
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        currentNode = currentNode.right;
      } else {
        return currentNode.data
      }
    }

    return null;
  }

  public levelOrder() {
    if (!this.root) {
      return;
    }

    const queue: TreeNode<T>[] = [];

    queue.push(this.root);

    while (queue.length > 0) {
      const [currrentNode] = queue;
      console.log(currrentNode.data);

      if (currrentNode.left) {
        queue.push(currrentNode.left);
      }

      if (currrentNode.right) {
        queue.push(currrentNode.right)
      }

      queue.shift();
    }
  }
}

const tree = new BinaryTree();

tree.add(46);
tree.add(24);
tree.add(22);
tree.add(26);
tree.add(30);
tree.add(49);
tree.add(90);
tree.add(47);
tree.add(80);

tree.levelOrder();

const searchResult = tree.search(90);
console.log('search result', searchResult);
tree.delete(49);

tree.print();