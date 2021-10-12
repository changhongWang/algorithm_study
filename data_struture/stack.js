/*
 * @Description: 实现一个栈
 * @Author: changhong.wang
 * @Date: 2021-10-11 11:48:28
 * @LastEditors: changhong.wang
 * @LastEditTime: 2021-10-11 12:17:46
 */
function Stack() {
    this.dataStore = []; // 初始化为空
    this.top = 0; // 记录栈顶位置

    this.pop = pop; // 出栈
    this.push = push; // 入栈
    // this.peek = peek; // 查看栈顶元素
    // this.length = length; // 长度
    // this.clear = clear; // 清空
}

/**
 * 将一个新元素入栈，放到数组中top对应的位置上面，并将top的值+1，让其指向数组的下一个空位置
 * @param {*} ele 
 */
function push(ele) {
    this.dataStore[this.top++] = ele;
}

/**
 * 出栈 取出栈顶元素
 */
function pop() {
    return this.dataStore[--this.top];
}

/**
 * 查看栈顶元素
 */
function peek() {
    if (this.top > 0) {
        return this.dataStore[this.top - 1];
    }
    return 'Empty';
}

function length() {
    return this.top;
}

function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.top = 0;
}
const stack = new Stack();

stack.push('Apple');
stack.push('Banana');
stack.push('Orange');

console.log(stack.pop());
console.log(stack.top);