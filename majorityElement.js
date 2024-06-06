

// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.


function majorityElement(a, size)
    {
        let counter = new Map();
        let sizeCheck = Math.ceil(size/2);
        let maxFreq = -Infinity;
        let maxKey = 0;
        
        for(let num of a){
            counter.set(num, (counter.get(num) || 0) +1);
        }
        
        for(let [key,value] of counter){
            if(counter.get(key) >= sizeCheck){
                maxFreq = Math.max(maxFreq, value);
                maxKey = key;
            }
        }

        if(maxFreq === -Infinity){
            maxKey = -1;
        }

        return maxKey;
    }

    let a = [3,2,3];
    let size = 3;
    console.log(majorityElement(a, size));