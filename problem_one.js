
// DATE: 17/08/2024

// 1) WAP to print the nth Fibonacci number based on the user input:

// input: Enter fib position: 7
// output: 8


num=7
a=0,b=1
i=1
while(i<=num){
    if(i==num)
    console.log(a)
    c=a+b
    a=b
    b=c
    i++
}