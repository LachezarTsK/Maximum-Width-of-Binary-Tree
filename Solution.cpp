
#include <queue>
#include <vector>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;

    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode* left, TreeNode* right) : val(x), left(left), right(right) {}
};

struct Pair {
    TreeNode* node;
    unsigned long long index;

    Pair(TreeNode* node, unsigned long long index) {
        this->node = node;
        this->index = index;
    }
};

class Solution {
    
public:

    int widthOfBinaryTree(TreeNode* root) {
        unsigned long long maxWidth = 0;
        queue<Pair> queue;
        queue.push(Pair(root, 0));

        while (!queue.empty()) {
            unsigned long long left = queue.front().index;
            unsigned long long right = queue.back().index;
            maxWidth = max(maxWidth, (right - left + 1));
            
            int size = queue.size();
            while (size-- > 0) {
                Pair p = queue.front();
                queue.pop();
                if (p.node->left != nullptr) {
                    queue.push(Pair(p.node->left, 2 * p.index));
                }
                if (p.node->right != nullptr) {
                    queue.push(Pair(p.node->right, 2 * p.index + 1));
                }
                p.node = nullptr;
                delete p.node;
            }
        }
        return maxWidth;
    }
};
