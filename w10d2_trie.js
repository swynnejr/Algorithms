// Javascript - search and insert operations on Trie
// Alphabet size (# of symbols)
let ALPHABET_SIZE = 26;
 
// trie node
class TrieNode
{
    constructor(val)
    {
        this.isEndOfWord = false;
        this.val = val;
        this.children = new Array(ALPHABET_SIZE);
        for (let i = 0; i < ALPHABET_SIZE; i++)
            this.children[i] = null;
    }
}
 
let root;

// If not present, inserts key into trie
    // If the key is prefix of trie node,
    // just marks leaf node
function insert(key) {
    let level;
    let length = key.length;
    let index;
    let keystr = "";
    let pCrawl = root;

    for (level = 0; level < length; level++) {
        index = key[level].charCodeAt(0) - 'a'.charCodeAt(0);
        console.log("index",index)
        keystr += key[level]
        if (pCrawl.children[index] == null)
            pCrawl.children[index] = new TrieNode(keystr);
            pCrawl = pCrawl.children[index];
            console.log("pCrawl", pCrawl)
        }
        // mark last node as leaf
        pCrawl.isEndOfWord = true;
}
function contains(word) {
    let level;
    let length = word.length;
    let index;
    let pCrawl = root;

    for (level = 0; level < length; level++) {
        index = word[level].charCodeAt(0) - 'a'.charCodeAt(0);
        //console.log("index",index)
        if (pCrawl.children[index] == null) {
            return false;
        }
        pCrawl = pCrawl.children[index];
    }
        return (pCrawl.isEndOfWord);
}


root = new TrieNode();



//console.log("root",root)
insert("banana")
insert("ball")
//console.log(root)

console.log(contains("ball"))
console.log(contains("Gyro"))