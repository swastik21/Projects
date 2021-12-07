// let total_num = (n) => {
//     total = 0
//     for (let i = 0; i <= n; i++) total += i
//     return total
// }

// let total_num2 = n => {
//     return n*(n+1)/2
// }
const {performance} = require('perf_hooks');

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


//RECURSION

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

//SEARCHING

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