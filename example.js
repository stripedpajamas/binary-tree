const BinaryTree = require('./BinaryTree')

class Node {
  constructor (data) {
    this.data = data
    this.left = this.right = null
  }
}

const root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.right.left = new Node(6)

const tree = new BinaryTree(root)

console.log('level order traversal:')
for (let node of tree.getLevelOrder()) {
  process.stdout.write(`${node.data} `)
}
console.log('')

console.log('preorder traversal:')
for (let node of tree.getPreorder()) {
  process.stdout.write(`${node.data} `)
}
console.log('')

console.log('inorder traversal:')
for (let node of tree.getInorder()) {
  process.stdout.write(`${node.data} `)
}
console.log('')

console.log('postorder traversal:')
for (let node of tree.getPostorder()) {
  process.stdout.write(`${node.data} `)
}
console.log('')

