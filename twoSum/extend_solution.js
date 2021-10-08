/*
 * @Description: twoSum - 进阶解法
 * @Author: changhong.wang
 * @Date: 2021-10-08 12:13:05
 * @LastEditors: changhong.wang
 * @LastEditTime: 2021-10-08 16:00:29
 */

/**
 * 查找表法(哈希表)实现twoSum
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
     const keyMap = [];
     for (let i = 0; i < nums.length; i++) {
         const hashNum = target - nums[i];
         if (keyMap[hashNum] != undefined) {
             return [keyMap[hashNum], i];
         }
         keyMap[nums[i]] = i;
     }
};

const res = twoSum([3,2,4], 6);
console.log(res)