// let total_num = (n) => {
//     total = 0
//     for (let i = 0; i <= n; i++) total += i
//     return total
// }

// let total_num2 = n => {
//     return n*(n+1)/2
// }
const {performance} = require('perf_hooks');
const { stderr } = require('process');
// let t1 = performance.now()
// total_num(100000000)
// let t2 = performance.now()
// console.log(`Time took by first method: ${(t2 - t1) / 1000} seconds`)

// let t3 = performance.now()
// total_num2(100000000)
// let t4 = performance.now()
// console.log(`Time took by second method: ${(t4 - t3) / 1000} seconds`)
// n = 5
// t1 = performance.now()
// for (let i = 0; i <= n; i++){
//     for (let j = 0; j <= i; j++){
//         if ((i + j) % 2 == 0) process.stdout.write(1 + " ")
//         else process.stdout.write(0 + " ")
//     }
//     console.log()
// }
// t2 = performance.now()
// console.log('=======================================')

// console.log(`Time took: ${(t2 - t1) / 1000} seconds`)

// const charCount = str => {
//     let obj = {}
//     str = str.toLowerCase()
//     for (let char of str){
//         if (/[a-z0-9]/.test(char)) {
//             obj[char] = ++obj[char] || 1
//         }
//     }
//     return obj
//     }
// console.log(charCount('my PIN number is 400701'))

//||====================================||//
//                                        //
//          PROBLEM SOLVING ALGOS         //
//                                        //
//||====================================||//

// NAIVE SOLUTION (O(n2))
// t1 = performance.now()
// function same(arr1,arr2) {
//     if (!(arr1.length === arr2.length)) return false
//     let index
//     for (let i in arr1){
//         let currentIndex = arr2.indexOf(arr1[i]**2)
//         if( currentIndex === -1) return false
//         console.log(arr2)
//         arr2.splice(currentIndex, 1)
//     }
//     return true
// }
// t2 = performance.now()
// console.log(same([3, 1, 2, 3, 4, 9, 5, 7, 4, 5, 9, 1], [4, 9, 1, 9, 16, 81, 25, 49, 16, 25, 81, 1]))

// t3 = performance.now()
// function same_freq(arr1, arr2) {
//     if (!(arr1.length === arr2.length)) return false
//     const freq1 = {}
//     const freq2 = {}
    
//     for (let key of arr1) {
//         freq1[key] = ++freq1[key] ||1
//     }
//     for (let key of arr2) {
//         freq2[key] = ++freq2[key] || 1
//     }
//     console.log(freq1)
//     console.log(freq2)

//     for (let key in freq1) {
//         if (!(key ** 2 in freq2)) return false
//         if (freq1[key] !== freq2[key ** 2]) return false
//     }
//     return true
// }
// t4 = performance.now()
// console.log(same_freq([3, 1, 2, 3, 4, 9, 5, 7, 4, 5, 9, 1], [4, 9, 1, 9, 16, 81, 25, 49, 16, 25, 81, 1]))
// console.log(`Time took by novice method: ${(t2 - t1) / 1000} seconds`)
// console.log(`Time took by frequency counter method: ${(t4 - t3) / 1000} seconds`)

//ANAGRAM

// function anagram(arr1, arr2) {
//     if (!(arr1.length === arr2.length)) return false
//     const freq1 = {}
//     const freq2 = {}
    
//     for (let key of arr1) {
//         freq1[key] = ++freq1[key] ||1
//     }
//     for (let key of arr2) {
//         freq2[key] = ++freq2[key] || 1
//     }
//     console.log(freq1)
//     console.log(freq2)

//     for (let key in freq1) {
//         if (!(key in freq2)) return false
//         if (freq1[key] !== freq2[key]) return false
//     }
//     return true
// }
// console.log(anagram('texttwisttime','timetwisttext'))

//MULTIPLE POINTERS

// function countUnique(arr) {
//     if(arr.length === 0) return 0
//     let i = 0
//         for (j = 1; j < arr.length; j++){
//             if (arr[i] !== arr[j]) {
//                 i++
//                 // arr[i] = arr[j]
//                 arr.splice(i,0,arr[j])
//             }
//         }
    
//     return i + 1
// }
// console.log(countUnique([1,1,2,3,3,4,5,5,6,6,7]))

//=====================
// SLIDING WINDOW
//=====================

// novice method

// function maxSubArray(arr, num) {
//     if (num > arr.length) return null
//     let max = - Infinity
//     for (let i = 0; i < arr.length; i++){
//         let temp = 0
//         for (let j = 0; j < num; j++){
//             temp += arr[i+j]
//         }
//         if (temp > max) {
//             max = temp
//         }
//     }
//     return max
// }

// console.log(maxSubArray([1, 2, 3, 4, 5, 6, 7, 8], 3))

//sliding window method

// function maxSubArray(arr, num) {
//     if (num > arr) return null
//     let maxSum = 0
//     let tempSum = 0
//     for (let i = 0; i < num; i++){
//         maxSum += arr[i]
//     }
//     tempSum = maxSum
//     for (let i = num; i < arr.length; i++) {
//         tempSum = tempSum - arr[i - num] + arr[i]
//         maxSum = Math.max(maxSum, tempSum)
//     }
//     return maxSum
// }
// console.log(maxSubArray([1, 2, 3, 4, 5, 6, 7, 8], 3))

//DIVIDE AND CONQUER

// const {array} = require('./integer_arrray_sorted')
// function search(arr, val) {
//     let min = 0
//     let max = arr.length - 1
//     let middle = 0
//     while ( arr[middle] !== val && min <= max) {
//         middle = Math.floor((min + max) / 2)

//         if (val < arr[middle]) max = middle - 1
        
//         else if (val > arr[middle]) min = middle + 1
//     }
//     return arr[middle] === val ? middle : "Not Found"
// }
// console.log(search(array,10))

// function findLongestSubstring(str) {
//     let longest = 0;
//     let seen = {};
//     let start = 0;
//
//     for (let i = 0; i < str.length; i++) {
//       let char = str[i];
//       if (seen[char]) {
//         start = Math.max(start, seen[char]);
//       }
//       // index - beginning of substring + 1 (to include current in count)
//       longest = Math.max(longest, i - start + 1);
//       // store the index of the next char so as to not double count
//       seen[char] = i + 1;
//     }
//     return longest;
// }
// console.log(findLongestSubstring('swastikpoojari'))


//||====================================||//
//                                        //
//            RECURSION                   //
//                                        //
//||====================================||//

// function power(base, exponent) {
//     if(exponent===0) return 1
//     return base * power(base,exponent - 1)
// }

// console.log(power(2, 3))

// function fact(num) {
//     if (num === 1) return 1
//     return num * fact(num-1)
// }

// console.log(fact(4))

// function productOfArray(arr) {
//     if (arr.length === 0) return 1
//     return arr[0] * productOfArray(arr.slice(1))
// }

// console.log(productOfArray([1,2,3,4]))

// function recursiveRange(n) {
//     if (n === 0) return 0
//     return n + recursiveRange(n-1)
// }

// console.log(recursiveRange(4))

// function fib(n) {
//     if (n <= 2) return 1
//     return fib(n-1) + fib(n-2)
// }

// console.log(fib(10))

//||====================================||//
//                                        //
//            SEARCHING                   //
//                                        //
//||====================================||//

// const { array } = require('./integer_array_unsorted')

// function linearSearch(arr, val) {
//     let index = []
//     for (let i in arr){
//         if (arr[i] === val) {
//             index.push(i)
//         }
//     }
//     if (index.length>0) {
//         return (
//             console.log(`Found at index: ${index.join(', ')}`)
//         )
//     }
//     return console.log('Not Found')
// }
// linearSearch(array,97)

// const {array} = require('./integer_arrray_sorted')
// function binarySearch(arr, val) {
//     let min = 0
//     let max = arr.length - 1
//     let middle = 0
//     while ( arr[middle] !== val && min <= max) {
//         middle = Math.floor((min + max) / 2)

//         if (val < arr[middle]) max = middle - 1
        
//         else if (val > arr[middle]) min = middle + 1
//     }
//     return arr[middle] === val ? middle : "Not Found"
// }
// console.log(binarySearch(array,10))

//using naive string matching
/* function subString(str, substr) {
    let count = 0
    for (let i = 0; i < str.length;i++) {
        for (let j = 0; j < substr.length;j++) {
            
            if (substr[j] !== str[i + j]) break
            if (j === substr.length - 1) count ++
        }
    }
    return count
}

console.log(subString("lorie loled", "lol")) */

//using KMP string matching
/* function computeLPSArray(pat, m) {
    let len = 0
    let i = 1
    let lps = [0 * m]
    lps[0] = 0
    while (i < m) {
        if (pat[len] === pat[i]) {
            lps[i] = len + 1
            len+=1
            i+=1
        }
        else {
            if (len !== 0){
                len = lps[len - 1]
            }
            else {
                lps[i] = 0
                i+=1
            }
        }
    }
    return lps
}

function KMPSearch(pat, txt) {
    let N = txt.length
    let M = pat.length
    let index = []
    let LPS = computeLPSArray(pat, M)
    let j = 0
    let i = 0
    while (i < N) {
        if (j !== M) {
            if (txt[i] === pat[j]) {
                i += 1
                j += 1
            }
            else {
                if (j !== 0) j = LPS[j - 1]
                else i += 1
            }
        } else {
            index.push(i - j)
            j = LPS[j - 1]
        }
    }
    return index.length > 0 ? console.log(`Found at index: ${index.join(', ')}`) : console.log('Not Found')
}

KMPSearch('lol', 'lorie loled lolie') */
// const { array } = require('./integer_array_unsorted')


//||====================================||//
//                                        //
//            SORTING ALGOS               //
//                                        //
//||====================================||//


/* function bubbleSort_inefficient(a) {
    for (let i = 0; i < a.length; i++){
        for (let j = 0; j < a.length; j++){
            console.log(a,a[j],a[j+1])
            //SWAP
            if (a[j] > a[j + 1]) {
                let temp = a[j]
                a[j] = a[j + 1]
                a[j+1] = temp
            }
        }
    }
    console.log(a)
}
bubbleSort_inefficient([5,2,6,1,4]) */

/* function bubbleSort_efficient(a) {
    let noSwaps
    for (let i = a.length; i > 0; i--){
        noSwaps = true
        for (let j = 0; j < i - 1; j++){
            console.log(a,a[j],a[j+1])
            //SWAP
            if (a[j] > a[j + 1]) {
                let temp = a[j]
                a[j] = a[j + 1]
                a[j + 1] = temp
                noSwaps = false
            }
        }
        if (noSwaps) break
    }
    console.log(a)
}
bubbleSort_efficient([1,2,6,3,4,5]) */


/* function selectionSort(a) {
    for (let i = 0; i < a.length; i++){
        let min = i
        for (let j = i + 1; j < a.length; j++){
            if (a[j] < a[min]) {
                min = j
            }
        }
        if (i !== min) {
            console.log(a)
            console.log(i,min)
            let temp = a[i]
            a[i] = a[min]
            a[min] = temp
        }
    }
    console.log(a)
}
selectionSort([5,2,6,1,4]) */

/* function insertionSort(a) {
    let i
    let j
    for (i = 1; i < a.length; i++){
        let currentValue = a[i]
        for (j = i - 1; j >= 0 && a[j] > currentValue; j--){
            a[j+1] = a[j]
        }
        a[j+1] = currentValue
    }
    console.log(a)
}
insertionSort([5,2,6,1,4]) */

//MERGE SORT

/* function merge(a, b) {
    let result = []
    let i = 0
    let j = 0
    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            result.push(a[i])
            i++
        }
        else{
            result.push(b[j])
            j++
        }
    }
    while (i < a.length) {
        result.push(a[i])
        i++
    }
    while (j < b.length) {
        result.push(b[j])
        j++
    }
    return result
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left,right)
}

console.log(mergeSort([10,24,73,76])) */

//QUICKSORT

/* function pivot(arr, start, end) {
  function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }
    let pivot = arr[start]
    let swapIdx = start
    for (let i = start + 1; i <= end; i++){
        if (pivot > arr[i]) {
            swapIdx++
            swap(arr,swapIdx,i)
        }
    }
    swap(arr, start, swapIdx)
    return swapIdx
}

function quickSort(arr,left=0,right=arr.length-1) {
    if (left < right) {
        let pivotIdx = pivot(arr, left, right)
        //left side
        quickSort(arr, left,pivotIdx - 1)
        //right side
        quickSort(arr,pivotIdx+1,right)
    }
    return arr
}
console.log(quickSort([-3,2,4,6,9,1,2,5,3,23])) */

//RADIX SORT
/* function getDigits(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digiCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digiCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(arr) {
  let maxDigits = mostDigits(arr);
  for (let i = 0; i < maxDigits; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      let bucketNo = getDigits(arr[j], i);
      buckets[bucketNo].push(arr[j]);
    }
    arr = [].concat(...buckets);
  }
  console.log(arr);
}
radixSort([23, 345, 5467, 12, 2345, 9852]); */

//||====================================||//
//                                        //
//            DATA STRUCTURES             //
//                                        //
//||====================================||//

//Singly Linked List

/* class Node {
  constructor(val) {
    (this.val = val), (this.next = null);
  }
}

class SinglyLinkedList {
  constructor() {
    (this.head = null), (this.tail = null), (this.length = 0);
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return console.log("List is empty!");
    let pre = this.head;
    for (let i = 1; i < this.length - 1; i++) {
      pre = pre.next;
    }
    let temp = this.tail;
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return this;
  }

  shift() {
    if (!this.head) return console.log("List is empty!");
    let temp = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return this;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null
    let current = this.head;
    let counter = 0
    while (counter !== index) {
      current = current.next
      counter++
    }
    return current
  }
  
  set(index, val) {
    let node = this.get(index)
    if(node){
      node.val = val
      return true
    }
    else {
      return console.log("Invalid Index!")
    }
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return console.log("Invalid Input")
    if (index === 0) return this.unshift(val)
    if (index === this.length) return this.push(val)
    
    const node = new Node(val)
    const prev = this.get(index - 1)
    let temp = prev.next
    prev.next = node
    node.next = temp
    this.length++
    return true
  }

  remove(index) {
    if (index < 0 || index > this.length) return console.log("Invalid Input")
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()

    const prevNode = this.get(index - 1)
    const removed = prevNode.next
    prevNode.next = removed.next
    this.length--
    return true
  }

  print() {
    let arr = []
    let current = this.head
    while (current) {
      arr.push(current.val)
      current = current.next
    }
    console.log(arr)
  }

  reverse() {
    let node = this.head
    this.head = this.tail
    this.tail = node
    let next
    let prev = null
    for (let i = 0; i < this.length; i++){
      next = node.next
      node.next = prev
      prev = node
      node = next
    }
  }

}

const list = new SinglyLinkedList(); */

//Doubly linked list
/* class Node{
  constructor(val){
  this.val = val
  this.prev = null
  this.next = null
}
}

class DoublyLinkedList{
  constructor(){
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return true
  }

  pop() {
    if (!this.head) return console.log("List is empty")
    let temp = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else{
      this.tail = temp.prev
      this.tail.next = null
      temp.prev = null
    }
    this.length--
    return console.log(temp)
  }

  shift() {
    if (!this.head) return console.log("List is empty")
    let temp = this.head
    if (this.length === 1) {
      this.head = null
      this.temp = null
    } else {
      this.head = temp.next
      this.head.prev = null
      temp.next = null
    }
    this.length--
    return console.log(temp)
  }

  unshift(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return true
  }

  get(index) {
    if (index < 0 || index >= this.length) return null
    let count, current;
    if (index <= this.length / 2) {
      count = 0
      current = this.head
      while (count !== index) {
        current = current.next
        count++
      }
    }
    else {
      count = this.length - 1
      current = this.tail
      while (count !== index) {
        current = current.prev
        count--
      }
    }
    return current
  }

  set(index, val) {
    let node = this.get(index)
    if (node !== null) {
      node.val = val
      return console.log("Value has been set")
    }
    return console.log("Invalid Index")
  }

  insert(index,val) {
    if (index < 0 || index > this.length) return console.log("Invalid Index")
    if (index === 0) return this.unshift(val)
    if (index === this.length) return this.push(val)

    let newNode = new Node(val)
    let beforeNode = this.get(index - 1)
    let afterNode = beforeNode.next

    beforeNode.next = newNode, newNode.prev = beforeNode
    newNode.next = afterNode, afterNode.prev = newNode
    this.length++
    return true
  }

  remove(index) {
    if (index < 0 || index >= this.length) return console.log("Invalid Index")
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()

    let removedNode = this.get(index)
    removedNode.prev.next = removedNode.next
    removedNode.next.prev = removedNode.prev

    removedNode.prev = null
    removedNode.next = null

    this.length--
    return console.log(removedNode)
    
  }

  print() {
    let arr = []
    let current = this.head
    while (current) {
      arr.push(current.val)
      current = current.next
    }
    console.log(arr)
  }
}

const list = new DoublyLinkedList() */

//STACKS

/* class Node{
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class Stack{
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }

  push(val) {
    const newNode  = new Node(val)
    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      newNode.prev = this.last
      this.last = newNode
    }
    this.length++
    return true
  }

  pop() {
    if (!this.first) return console.log("List is empty!")
    let temp = this.last
    if (this.length === 1) {
      this.first = null
      this.last = null
    }else{
      this.last = temp.prev
      this.last.next = null
      temp.prev = null
    }
    this.length--
    return console.log(temp)
  }

  print() {
    let current = this.first
    let arr = []
    while (current) {
      arr.push(current.val)
      current = current.next
    }
    return console.log(arr)
  }
}

const stack = new Stack() */

/* class Node{
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Queue{
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }

  enqueue(val) {
    const newNode = new Node(val)
    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    this.length++
    return true
  }

  dequeue() {
    if (!this.first) return console.log("List is empty!")
    let temp = this.first
    if (this.length === 1) {
      this.first = null
      this.last = null
    }
    else {
      this.first = temp.next
    }
    this.length--
    return temp
  }

  print() {
    let current = this.first
    let arr = []
    while (current) {
      arr.push(current.val)
      current = current.next
    }
    return console.log(arr)
  }

}

const queue = new Queue() */

//Binary Search Tree
/* class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
    this.count = 0;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      this.root.count++;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (val === current.val) {
          current.count++;
          return this;
        }
        if (val < current.val) {
          if (!current.left) {
            current.left = newNode;
            current.left.count++;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.val) {
          if (!current.right) {
            current.right = newNode;
            current.right.count++;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(val) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else if (val === current.val) {
        found = true;
      }
    }
    if (!found) return console.log("Not Found");
    return console.log(`Found: ${current.val}`);
  }

  BFS() {
    let node = this.root,
      visited = [],
      queue = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      visited.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return console.log(visited);
  }

  DFS_preorder() {
    let visited = []
    function traverse(node) {
      visited.push(node.val)
      if (node.left) traverse(node.left)
      if(node.right) traverse(node.right)
    }
    traverse(this.root)
    return console.log(visited)
  }

  DFS_postorder() {
    let visited = []
    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      visited.push(node.val)
    }
    traverse(this.root)
    return console.log(visited)
  }

  DFS_inorder() {
    let visited = []
    function traverse(node) {
      if (node.left) traverse(node.left)
      visited.push(node.val)
      if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return console.log(visited)
  }

}

const tree = new BinarySearchTree(); */


//Binary heaps

/* class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(val) {
    if (val > 0) {
      this.values.push(val);
      console.log(this.values);
      let index = this.values.length - 1;
      const element = this.values[index];
      while (index > 0) {
        let parentIndex = Math.floor((index - 1) / 2);
        let parent = this.values[parentIndex];
        if (element <= parent) break;
        this.values[parentIndex] = element;
        this.values[index] = parent;
        index = parentIndex;
      }
    }
    console.log(this.values);
  }

  extractMax() {
    let max = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      let idx = 0;
      let element = this.values[idx];
      let length = this.values.length;

      while (true) {
        let leftChildIdx = 2 * idx + 1;
        let rightChildIdx = 2 * idx + 2;
        let leftChild, rightChild;
        let swap = null;

        if (leftChildIdx < length) {
          leftChild = this.values[leftChildIdx];
          if (leftChild > element) {
            swap = leftChildIdx;
          }
        }

        if (rightChildIdx < length) {
          rightChild = this.values[rightChildIdx];
          if (
            (swap === null && rightChild > element) ||
            (swap !== null && rightChild > leftChild)
          ) {
            swap = rightChildIdx;
          }
        }

        if (swap === null) break;
        this.values[idx] = this.values[swap];
        this.values[swap] = element;
        idx = swap;
      }
    }
    return console.log(this.values);
  }
}

const heap = new MaxBinaryHeap(); */


//Priority Queue
/* class Node{
  constructor(val, priority) {
    this.val = val
    this.priority = priority
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const newNode = new Node(val,priority)
      this.values.push(newNode);
      console.log(this.values);
      let index = this.values.length - 1;
      const element = this.values[index];
      
      while (index > 0) {
        let parentIndex = Math.floor((index - 1) / 2);
        let parent = this.values[parentIndex];
        if (element.priority >= parent.priority) break;
        this.values[parentIndex] = element;
        this.values[index] = parent;
        index = parentIndex;
      }
    console.log(this.values);
  }

  dequeue() {
    let min = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      let idx = 0;
      let element = this.values[idx];
      let length = this.values.length;

      while (true) {
        let leftChildIdx = 2 * idx + 1;
        let rightChildIdx = 2 * idx + 2;
        let leftChild, rightChild;
        let swap = null;

        if (leftChildIdx < length) {
          leftChild = this.values[leftChildIdx];
          if (leftChild.priority < element.priority) {
            swap = leftChildIdx;
          }
        }

        if (rightChildIdx < length) {
          rightChild = this.values[rightChildIdx];
          if (
            (swap === null && rightChild.priority < element.priority) ||
            (swap !== null && rightChild.priority < leftChild.priority)
          ) {
            swap = rightChildIdx;
          }
        }

        if (swap === null) break;
        this.values[idx] = this.values[swap];
        this.values[swap] = element;
        idx = swap;
      }
    }
    return console.log(min);
  }
}

const ER = new PriorityQueue(); */

//HASH TABLE

/* class HashTable{
  constructor(size = 53) {
    this.keyMap = new Array(size)
  }

  _hash(key) {
    let total = 0
    let prime = 31
    for (let i = 0; i < Math.min(key.length, 100); i++){
      let char = key[i]
      let value = char.charCodeAt(0) - 96
      total = (total*prime+value) % this.keyMap.length
    }
    return total
  }

  set(key, value) {
    let index = this._hash(key)
    if (!this.keyMap[index]) {
      this.keyMap[index] = []
      this.keyMap[index].push([key, value])
    } else {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          this.keyMap[index][i][1] = value
        } else {
          this.keyMap[index].push([key, value])
        }
      }
    }
    console.log(this.keyMap)
  }

  get(key) {
    let index = this._hash(key)
    if (!this.keyMap[index]) {
      return console.log('Key not found')
    }
    for (let i = 0; i < this.keyMap[index].length; i++){
      if (this.keyMap[index][i][0] === key){
        return console.log(this.keyMap[index][i][1])
      }
    }
  }

  values() {
    let valueArr = []
    for (let i = 0; i < this.keyMap.length; i++){
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++){
          if(!valueArr.includes(this.keyMap[i][j][1])){
            valueArr.push(this.keyMap[i][j][1])
          }
        }
      }
    }
    return console.log(valueArr)
  }

  keys() {
    let keysArr = []
    for (let i = 0; i < this.keyMap.length; i++){
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++){
            keysArr.push(this.keyMap[i][j][0])
          
        }
      }
    }
    return console.log(keysArr)
  }
} */

//Graph

/* class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (this.adjacencyList[vertex])
      throw new Error("VertexError: Vertex already exist");
    this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2])
      throw new Error("VertexError: Invalid Vertex");
    for (let e of this.adjacencyList[v1]) {
      if (e === v2) throw new Error("EdgeError: Connection already exist");
    }
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2])
      throw new Error("VertexError: Invalid Vertex");
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex])
      throw new Error("VertexError: Invalid Vertex");
    while (this.adjacencyList[vertex].length) {
      let adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(adjacentVertex, vertex);
    }
    delete this.adjacencyList[vertex];
  }

  displayGraph() {
    console.log(this.adjacencyList);
  }

  DFS_recursive(start) {
    let result = []
    let visited = {}
    const adjacencyList = this.adjacencyList

    function dfs(vertex) {
      if (!vertex) return null
      visited[vertex] = true
      result.push(vertex)
      adjacencyList[vertex].forEach(neighbour => {
        if (!visited[neighbour]) {
          return dfs(neighbour)
        }
      })
    }

    dfs(start)
    return console.log(result)
  }

  DFS_iterative(start) {
    let result = []
    let visited = {}
    let stack = [start]
    let currentVertex
    
    visited[start] = true
    while (stack.length) {
      currentVertex = stack.pop()
      result.push(currentVertex)

      this.adjacencyList[currentVertex].forEach(neighbour => {
        if (!visited[neighbour]) {
          visited[neighbour] = true
          stack.push(neighbour)
        }
      })
    }
    return console.log(result)
  }

  BFS(start) {
    let result = []
    let visited = {}
    let queue = [start]
    let currentVertex
    
    visited[start] = true
    while (queue.length) {
      currentVertex = queue.shift()
      result.push(currentVertex)

      this.adjacencyList[currentVertex].forEach(neighbour => {
        if (!visited[neighbour]) {
          visited[neighbour] = true
          queue.push(neighbour)
        }
      })
    }
    return console.log(result)
  }
} */

//Dijkstra

/* class Node{
  constructor(val, priority) {
    this.val = val
    this.priority = priority
  }
}

class PriorityQueue{
  constructor() {
    this.values = []
  }

  enqueue(val, priority) {
    const newNode = new Node(val,priority)
      this.values.push(newNode);
      let index = this.values.length - 1;
      const element = this.values[index];
      
      while (index > 0) {
        let parentIndex = Math.floor((index - 1) / 2);
        let parent = this.values[parentIndex];
        if (element.priority >= parent.priority) break;
        this.values[parentIndex] = element;
        this.values[index] = parent;
        index = parentIndex;
      }
    return this.values
  }

  dequeue() {
    let min = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      let idx = 0;
      let element = this.values[idx];
      let length = this.values.length;

      while (true) {
        let leftChildIdx = 2 * idx + 1;
        let rightChildIdx = 2 * idx + 2;
        let leftChild, rightChild;
        let swap = null;

        if (leftChildIdx < length) {
          leftChild = this.values[leftChildIdx];
          if (leftChild.priority < element.priority) {
            swap = leftChildIdx;
          }
        }

        if (rightChildIdx < length) {
          rightChild = this.values[rightChildIdx];
          if (
            (swap === null && rightChild.priority < element.priority) ||
            (swap !== null && rightChild.priority < leftChild.priority)
          ) {
            swap = rightChildIdx;
          }
        }

        if (swap === null) break;
        this.values[idx] = this.values[swap];
        this.values[swap] = element;
        idx = swap;
      }
    }
    return min;
  }

}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (this.adjacencyList[vertex])
      throw new Error("VertexError: Vertex already exist");
    this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2,weight) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2])
      throw new Error("VertexError: Invalid Vertex");
    for (let e of this.adjacencyList[v1]) {
      if (e['node'] === v2) throw new Error("EdgeError: Connection already exist");
    }
    this.adjacencyList[v1].push({node:v2,weight});
    this.adjacencyList[v2].push({node:v1,weight});
  }

  Dijkstra(start,finish) {
    const distances = {}
    const previous = {}
    let smallest
    const node = new PriorityQueue()
    let path = []

    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0
        node.enqueue(vertex,0)
      } else {
        distances[vertex] = Infinity
        node.enqueue(vertex,Infinity)
      }
      previous[vertex] = null
    }

    while (node.values.length) {
      smallest = node.dequeue().val
      if (smallest === finish) {
        console.log(previous)
        console.log(distances)
        while (previous[smallest]) {
          path.push(smallest)
          smallest = previous[smallest]
        }
        break
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor]
          let candidate = distances[smallest] + nextNode.weight
          let nextNeighbor = nextNode.node
          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate
            previous[nextNeighbor] = smallest
            node.enqueue(nextNeighbor,candidate)
          }
        }
      }
    }
    path = path.concat(smallest).reverse().join('-->')
    console.log(path)
  }

  displayGraph() {
    console.log(this.adjacencyList);
  }
} */

//||====================================||//
//                                        //
//           DYNAMIC PROGRAMMING          //
//                                        //
//||====================================||//

//Recursive fibonacci

/* function fib(n) {
  if (n <= 2) return 1
  return fib(n-1) + fib(n-2)
}
console.log(fib()) */

//Memoization

/* function fib(n, memo = []) {
  if(memo[n] !== undefined) return memo[n]
  if (n <= 2) return 1
  let res = fib(n - 1,memo) + fib(n - 2,memo)
  memo[n] = res
  return res
}
console.log(fib(100)) */

//tabulation

/* function fib(n, memo = []) {
  if (n <= 2) return 1
  fibNums = [undefined, 1, 1]
  for (let i = 3; i <= n; i++){
    fibNums[i] = fibNums[i-1] + fibNums[i-2]
  }
  return fibNums[n]
}
console.log(fib(1000)) */