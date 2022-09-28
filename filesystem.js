let data="writing to file"
//module provides working with files 
//has two approach async and synchronous
const fs=require("fs")
// async readFile
// fs.readFile("./dummy.txt",function(err,value){
//  if(err) {throw err}
//  console.log(value.toString())
// })
// //sync readFile
// fs.readFileSync("./dummy.txt",function(err,value){
//  if(err){throw err}
//  console.log(value.toString())
// })
//fs.readFile and fs.writeFile only allowed to read and write
//fs.open(path,flag,mode,callback) 
//path-filepath,flag
/**
 * modes
 * +-read x-open or fail
 * a-open for append create if not exist
 * ax-open or fails
 * a+-read or append create if not exist
 * ax+-same as a+ but fail if not exist
 * as- open for appending in synchronous
 * as+-open for read+append in sync
 * r-open file for read exception occur if not exist
 * r+-open file for read and write
 * rs+-open for read+write in sync
 * w-open for write
 * w+-open for write+read
 * wx- open for write but fail if path not exist
 * 
 */
fs.open("./dummy.txt","a+",function(err,value){
 if(err) throw err;
 console.log(value.toString())
})
//fs.writeFile(path,data,option,callback)---------- removes old and replace new 
// fs.writeFile("./dummy.txt",data,function(){
//  fs.readFile("./dummy.txt",function(err,value){
//   if(err) throw err
//   console.log(value.toString())
//  })
// })
//fs.appendFile(filePath,option,data,callback)

// fs.appendFile("./dummy.txt",data,function(err){
//  if(err) throw err
//  fs.readFile("./dummy.txt",function(err,value){
//   if(err) throw err
//   console.log(value.toString())
//  })
// })
//closing the file
//fs.close(fd,callback) 
// calling fs.close() on a file and then other operation being performed on it may lead to undefined behaviour
// fs.close(10,function(err){
//  if(err) {console.log(err)}
//  console.log("file is closed")
// })


//deleting a file
//fs.unlink(path,callback)
// fs.unlink("./dummy.txt",function(err){
//  if(err){console.log(err)}
//  console.log("file deleted")
// })