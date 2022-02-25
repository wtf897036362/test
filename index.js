/*
 * @Author: your name
 * @Date: 2022-02-25 22:52:32
 * @LastEditTime: 2022-02-25 22:59:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \444\index.js
 * 
 */
console.log(1)


const fn = (time) => {
  let timer = setInterval(() => {
    console.log("你是个傻逼")
  }, time)
  clearInterval(timer)
}

fn(1000)

