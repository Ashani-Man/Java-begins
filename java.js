/*Pseudocode
Steps :
1.Declare Message and send to Console Log
2. Assign 3 unique arithmetic operations to varriables
3.Each variable should equal a specfic number to be use as the code
4.Write another varibale that will have the first meassage and also the sums of the 3 arithmetic operations
5.Display Message in Alert or on html page

*/

// Intial Message is Given before sum of arithmetic operations are added
const Message = ("You have received this message because you have been chosen to open an important vault. Here is the secret combination:")
console.log(Message);

// Arithmetic operations are being summed up and sent to console log
let code =  9 + 1
console.log(code );

let Code2 = code * 4
console.log(Code2)

let code3 = Code2 - 1
console.log(code3)

//finalMessage is Intial message and the sums of the arithmetic operations all placed toghether in one Message
const finalMessage = (Message + code + "," + Code2 + "," + code3)
console.log(finalMessage)

//pop up that shows on html page the finalMessage
alert(finalMessage)




