
import java.util.LinkedList;

public class Solution {

    class Pair {
        TreeNode node;
        int index;

        public Pair(TreeNode node, int index) {
            this.node = node;
            this.index = index;
        }
    }

    public int widthOfBinaryTree(TreeNode root) {        
        
        LinkedList<Pair> queue = new LinkedList<>();
        queue.add(new Pair(root, 0));
        int maxWidth = 0;

        while (!queue.isEmpty()) {
            int left = queue.peekFirst().index;
            int right = queue.peekLast().index;
            maxWidth = Math.max(maxWidth, (right - left + 1));
            
            int size = queue.size();
            while (size-- > 0) {
                Pair p = queue.removeFirst();
                if (p.node.left != null) {
                    queue.add(new Pair(p.node.left, 2 * p.index));
                }
                if (p.node.right != null) {
                    queue.add(new Pair(p.node.right, 2 * p.index + 1));
                }
            }
        }

        return maxWidth;
    }
}

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode() {}

    TreeNode(int val) {
        this.val = val;
    }

    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
