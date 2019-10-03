function sayHello(name) {
    return `Hello, ${name}`
}

sayHello = name => `Hello, ${name}`

Test.assertEquals(sayHello('Mr. Spock'), 'Hello, Mr. Spock')
Test.assertEquals(sayHello('Captain Kirk'), 'Hello, Captain Kirk')
Test.assertEquals(sayHello('Liutenant Uhura'), 'Hello, Liutenant Uhura')
Test.assertEquals(sayHello('Dr. McCoy'), 'Hello, Dr. McCoy')

/*
=====SOAL======
Debugging sayHello function
The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

Example output:

Hello, Mr. Spock
*/