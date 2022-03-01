
/**
 * @param {number} val
 * @param {TreeNode} left
 * @param {TreeNode} right
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * @param {TreeNode} node
 * @param {number} index
 */
function Pair(node, index) {
    this.node = node;
    this.index = index;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function (root) {

    const queue = new Queue();
    queue.enqueue(new Pair(root, 0));

    let maxWidth = 0;
    let startIndexCurrentLevel = 0;
    let endIndexCurrentLevel = 0;

    while (!queue.isEmpty()) {

        let size = BigInt(queue.size());
        let startLevel = BigInt(queue.size()) - BigInt(1);
        let endLevel = BigInt(0);

        while (size-- > 0) {

            const p = queue.dequeue();
            if (size === startLevel) {
                startIndexCurrentLevel = BigInt(p.index);
            }
            if (size === endLevel) {
                endIndexCurrentLevel = BigInt(p.index);
            }

            if (p.node.left !== null) {
                queue.enqueue(new Pair(p.node.left, BigInt(2) * BigInt(p.index)));
            }
            if (p.node.right !== null) {
                queue.enqueue(new Pair(p.node.right, BigInt(2) * BigInt(p.index) + BigInt(1)));
            }
        }

        if (maxWidth < (endIndexCurrentLevel - startIndexCurrentLevel + BigInt(1))) {
            maxWidth = (endIndexCurrentLevel - startIndexCurrentLevel + BigInt(1));
        }

    }
    return maxWidth;
};
