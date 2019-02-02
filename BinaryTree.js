class BinaryTree {
  constructor (root) {
    this.root = root
  }
  *getLevelOrder () {
    const stack = [this.root]
    while (stack.length) {
      const current = stack.shift()
      if (current.left) stack.push(current.left)
      if (current.right) stack.push(current.right)
      yield current
    }
  }
  *getPreorder () {
    const stack = [this.root]
    while (stack.length) {
      const current = stack.pop()
      if (current.right) stack.push(current.right)
      if (current.left) stack.push(current.left)
      yield current
    }
  }
  *getInorder () {
    const stack = []
    let current = this.root
    while (true) {
        while (current) {
            stack.push(current)
            current = current.left
        }
        
        if (!stack.length) break
        
        let popped = stack.pop()
        yield popped
        current = popped.right
    }
  }
  *getPostorder () {
    const preStack = [this.root]
    const postStack = []
    while (preStack.length) {
      const current = preStack.pop()
      postStack.push(current)
      if (current.left) preStack.push(current.left)
      if (current.right) preStack.push(current.right)
    }
    while (postStack.length) {
      yield postStack.pop()
    }
  }
}

module.exports = BinaryTree
