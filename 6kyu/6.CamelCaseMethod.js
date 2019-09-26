function camelCaseMethod(str) {
    let temp = ''
    let output = ''

    if (str.length == 0) {
        return ""
    }
    for (let i = 0; i < str.length; i++) {
        if (temp) {
            if (str[i] == ' ') {
                output += temp
                temp = ''
            } else {
                temp += str[i]
            }
        } else {
            if (str[i] != ' ') {
                temp += str[i].toUpperCase()
            }
        }
    }
    output += temp
    return output
}

console.log(camelCaseMethod("test case")) //"TestCase"
console.log(camelCaseMethod("camel case method")) //"CamelCaseMethod"
console.log(camelCaseMethod("say hello ")) //"SayHello"
console.log(camelCaseMethod(" camel case word")) //"CamelCaseWord"
console.log(camelCaseMethod("")) //  ""

/*
Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord
Don't forget to rate this kata! Thanks :)
*/

/*
CARA ORANG

String.prototype.camelCase=function(){
    if(this==''){
      return ''
    }
   var res = this.split(' ')
          for (let i in res) {
          if(res[i].split('')[0]){
            res[i] = res[i].replace(res[i].split('')[0], res[i].split('')[0].toUpperCase())
          }else{
            res[i]=''
          }  
        }
        return res.join('')
}
*/