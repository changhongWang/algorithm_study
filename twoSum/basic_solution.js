/*
 * @Description: twoSum - 基础解法
 * @Author: changhong.wang
 * @Date: 2021-10-08 12:02:34
 * @LastEditors: changhong.wang
 * @LastEditTime: 2021-10-08 12:13:48
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};