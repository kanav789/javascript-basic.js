//  1 Write a function that takes two numbers (a and b) as argument. Sum a and b. Return the result
{
  function myfunc(a, b) {
    console.log(a + b);
  }
  myfunc(10, 20);
}

// 2 Write a function that takes two values, say a and b, as arguments. Return true if the two values are equal and of the same type
{
  function myfunc(a, b) {
    console.log(a === b);
  }
  myfunc(10, 10);
}

//  3 Write a function that takes a value as argument. Return the type of the value.
{
  function myfunc(a) {
    console.log(typeof a);
  }
  myfunc("a");
}

//  4  Write a function that takes a string (a) and a number (n) as argument. Return the nth character of 'a'.

{
  function myfunc(a, n) {
    console.log(a[n - 1]);
  }
  myfunc("absce", 3);
}

// 5 Write a function that takes a string (a) as argument. Remove the first 3 characters of a. Return the result

{
  function myfunc(a) {
    console.log(a.slice(3));
  }
  myfunc("kaanb");
}

// 6 Write a function that takes a string (a) as argument. Get the first 3 characters of a. Return the result

{
  function myfunc(a) {
    console.log(a.slice(0, 3));
  }
  myfunc("1234565");
}

// 7 Write a function that takes a string as argument. The string contains the substring 'is'. Return the index of 'is'

{
  function myfunc(a) {
    console.log(a.indexOf("is"));
  }
  myfunc("praise");
}

// 8 Write a function that takes a string (a) as argument Extract the first half a Return the result

{
  function myfunc(a) {
    console.log(a.slice(0, a.length / 2));
  }
  myfunc("praisea");
}

//  9 Write a function that takes a string (a) as argument. Remove the last 3 characters of a. Return the result

{
  function myfunc(a) {
    console.log(a.slice(0, -3));
  }
  myfunc("praisea");
}

//  10 Write a function that takes two numbers (a and b) as argument. Return b percent of a

{
  function myfunc(a, b) {
    console.log((b / 100) * a);
  }
  myfunc(10, 20);
}

// 11 Write a function that takes 6 values (a,b,c,d,e,f) as arguments. Sum a and b. Then substract by c. Then multiply by d and divide by e. Finally raise to the power of f and return the result. Tipp: mind the order.

{
  function myfunc(a, b, c, d, e, f) {
    console.log((((a + b - c) * d) / e) ** f);
  }
  myfunc(1, 2, 3, 4, 5, 6);
}

// 12 Write a function that takes two strings (a and b) as arguments. If a contains b, append b to the beginning of a. If not, append it to the end. Return the concatenation

function myFunction(a, b) {
  console.log(a.includes(b) ? b + a : a + b); //ternary oprator
}

myFunction("cheese", "cake");
myFunction("cake", "cake i");

// 13 Write a function that takes a number as argument. If the number is even, return true. Otherwise, return false

function myFunction(a) {
  console.log(a % 2 === 0);
}
myFunction(5);

//   14 Write a function that takes two strings (a and b) as arguments. Return the number of times b occurs in a.
{
  function myFunction(a, b) {
    console.log(b.split(a).length - 1);
  }
  myFunction("a", "abcdejw a fdgbhb a");
}
// 15 Write a function that takes a number (a) as argument. If a is a whole number (has no decimal place), return true. Otherwise, return false.
{
  function myFunction(a) {
    return console.log(a - Math.floor(a) === 0);
  }
  myFunction(1);
}

// 15 Write a function that takes two numbers (a and b) as arguments. If a is smaller than b, divide a by b. Otherwise, multiply both numbers. Return the resulting value

{
  function myFunction(a, b) {
    return a < b ? a / b : a * b;
  }

  myFunction(1, 2);
}

// 16 Write a function that takes a number (a) as argument. Round a to the 2nd digit after the comma. Return the rounded number

{
  function myFunction(a) {
    return Number(a.toFixed(2));
  }
  myFunction(2.73);
}

// 17 Write a function that takes a number (a) as argument. Split a into its individual digits and return them in an array. Tipp: you might want to change the type of the number for the splitting

{
  function myFunction(a) {
    return a
      .toString()
      .split("")
      .map((charNum) => parseInt(charNum));
  }
}

// 18 Write a function that takes an array (a) and a value (n) as argument. Return the nth element of 'a'v

function myFunction(a, n) {
  return a[n - 1];
}

//             thank you
