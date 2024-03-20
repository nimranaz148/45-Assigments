//•equality and inequality test.1
console.log("Equality test with string: ","Apple" ==="Apple");
//•for equality and inequality test 2
console.log("Inequality test with string: ",("Apple"as string) != "Orange");

//Tests using the lower case function
console.log("Lower case function test: ","HELLO".toLowerCase() === "hello");

//Numerical tests involving equality, 
console.log("Equality test with number: ", 45 === 45);
//Numerical tests involving inequality
console.log("Inequality test with number: ",(22 as number) != 45); 

//greater than test, 
console.log("Greater than test: ", 33 > 21);
//less than test,
console.log("Less than test: ", 21 < 33);

//greater than or equal to, 
console.log("greater than or equal to test: ", 32 >= 32);
//less than or equal to
console.log("less than or equal to test: ", 18 <= 20);

//Tests using "and"  operators
console.log("And operator test: ", 5===5 && 10 > 5);
//Tests using  "or" operators
console.log("Or operator test: ", 5===5 || false);

// Test whether an item is in a array
const fruit : string[] = ['Apple','Mango','Orange'];
console.log('Test "Mango" in the array:',fruit.includes("Mango"));

//Test whether an item is not in a array
console.log('Test "Papaya" is not in the array:',!fruit.includes("Papaya"));



