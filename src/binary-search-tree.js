const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class treeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  rootNode = null;

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addData(this.rootNode, data);

    function addData(node, data) {
      if (node === null) return new treeNode(data);

      if (node.data === data) return node;

      if (data > node.data) node.right = addData(node.right, data);
      else node.left = addData(node.left, data);

      return node;
    }
  }

  has(data) {
    return searchData(this.rootNode, data);
    function searchData(node, data) {
      if (node === null) return false;
      if (node.data === data) return true;
      if (data < node.data) return searchData(node.left, data);
      else return searchData(node.right, data);
    }
  }

  find(data) {
    return findData(this.rootNode, data);
    function findData(node, data) {
      if (node === null || node.data === data) return node;
      if (data < node.data) return findData(node.left, data);
      else return findData(node.right, data);
    }
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);
    function removeNode(node, data) {
      if (node === null) return node;
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (node.left === null && node.right === null) return null;
        if (node.left === null) {
          node = node.right;
          return node;
        }
        if (node.right === null) {
          node = node.left;
          return node;
        }
        let leftMax = node.left;
        while (leftMax.right) {
          leftMax = leftMax.right;
        }
        node.data = leftMax.data;

        node.left = removeNode(node.left, leftMax.data);

        return node;
      }
    }
  }

  min() {
    if (this.rootNode === null) return;
    let currentNode = this.rootNode;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.data;
  }

  max() {
    if (this.rootNode === null) return;
    let currentNode = this.rootNode;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree,
};
