


// First test ...
// Declaring variables ...
let name = 'Hassan';
    proffession = 'Programmer';
    gender = 'male';
    handle = 'x.com/j0ker_jnr1';
    console.log(name,proffession,gender,handle);


    // Second test ...
    // Operators ...
    let firstNum = 10;
        secondNum = 5;

        console.log(firstNum + secondNum);
        console.log(firstNum - secondNum);
        console.log(firstNum * secondNum);
        console.log(firstNum / secondNum);
        console.log(firstNum % secondNum);
        console.log(firstNum ** secondNum);



        // Third test ...
        // Comparison operators ...
        // Relational operators ...

        let favNum1 = 20;
            favnum2 = 50;

        console.log( favNum1 > favnum2);
        console.log( favNum1 < favnum2);
        console.log( favNum1 >= favnum2);
        console.log( favNum1 <= favnum2);
        
        
        console.log( favNum1 === favnum2);
        console.log( favNum1 !== favnum2);
        console.log( favNum1 == favnum2);
        console.log( favNum1 != favnum2);



        // CONDITIONAL STATEMENTS ...
        // Fourth test ...
        // if statements ...

        let password = 9;

        if ( password === 8 ) {
            console.log('Welcome');
        }
        else if ( password <= 8 ) {
            console.log('Password is too short');
        }

        else if ( password >= 8) {
            console.log(' Too long password' + ' & ' + 'password should be 8 characters');
        }
        else  {
            console.log('Please provide a password');
        }


        // More practice ...
        // Grade score ...


        let score = 20;

        if  (score >= 75) {
            console.log('Your grade is A');
        }
        else if (score >= 70) {
            console.log('Your score is AB');
        }
        else if (score >= 65) {
            console.log('Your score is B');
        }
        else if (score >= 60) {
            console.log('Your grade is BC');
        }
        else if (score >= 55) {
            console.log('Your grade is C');
        }
        else if (score >= 50) {
            console.log('Your grade is CD');
        }
        else if (score >= 45) {
            console.log('Your grade is D');
        }
        else if (score >= 40) {
            console.log('Your grade is E');
        }
        else if (score <= 39) {
            console.log('Your grade is F');
        }
        else {
            console.log('Try again later');
        }

        
        // Switch statements ...
        // fifth test ...

        let fruit = "mango";

        switch (fruit) {
            case 'banana':
                console.log('Banana is good!');
                break;
            
            case 'orange':
                console.log('I am not a fan of orange');
                break;

            case 'apple':
                console.log('How you like them apples');
                break;

                default:
                    console.log('I have never heared of that fruit');
        }




        // For-loop ...
        // test six
        // adding names ...

        for (let k = 1; k <= 100; k++) {
            console.log(k, 'i love you');
        }


        
        // while-loop ...
        // test seven
        // adding names ...

        let i = 10;
        while (i <= 100) {
            console.log(i, 'Hassan');
            i++;
        }


        // Do-while loop
        // test eight

        let p = 20;

        do {
            console.log(p, 'hassan');
            p++;
        }while ( p <= 400);


        // ARRAYS ...
        // test nine ...

        let favSingers = ['jet li', 'J.chan', 'rambo'];
        console.log(favSingers[0]);

        let favNumbers = [ 10, 20, 30, 40];
        console.log(favNumbers);

        let mixxedArr = ['string', ['otherarray'], 123, true];
        console.log(mixxedArr);
        console.log(mixxedArr[0]);
        console.log(mixxedArr[1]);
        console.log(mixxedArr[2]);
        console.log(mixxedArr[3]);


        // Basci ARRAY Methods ...

        // PUSH ...

        let fruits = [
            'mango',
            'apples',
            'stawberries',
            'pineapples',
            'grapes'
        ]

        fruits.push('banana');
        console.log(fruits);

        fruits.pop(); 
        console.log(fruits);

        fruits.shift();
        console.log(fruits);

        fruits.unshift('oranges');
        console.log(fruits);

        let moreFruits = [
            'tomato',
            'guava',
            'irish',
            'cocoyam',
        ]

        let totalFruits = fruits.concat(moreFruits);
        console.log(totalFruits);


        // OBJECTS ....

        let person = {
            firstName: 'Tijani',
            lastName: 'Hassan',
            Age: 30,
            location: ['Abuja','Nigeria'],
            100: 'hundred',
        }
        console.log(person);


        // test ten ...

        let car = {
            type: 'Lexus',
            model: 2020,
            color: 'Black'
        }
        car.wheels = 4;
        console.log(typeof car);
        console.log(type = 'Toyota');
        console.log(car);


        // FUNCTIONS ...
        // Function Decleration without parameters ...
        function Greetings() {
            console.log(` Hello function`);
        }
        Greetings();


        // Function Decleration with parameters ...
        function sayHello(name) {
            console.log(`Hello  ${name}`);
        }

        sayHello(`Joker`);

        // RETURN KEYWORD ...
        function add(x, y) {
            return x + y ;
        }
        const result = add( 20, 5);
        const result1 = add( 220, 100);
        const result2 = add( 550, 150);

        console.log(result);
        console.log(result1);
        console.log(result2);


        // test eleven ...

        function myFunction( t, h) {
            return t * h;
        }
        let res = myFunction(5, 5);
        console.log(res);


        // FUNCTION DECLERATION ...
        function sayName(user1) {
            console.log(`Hello ${user1}`);
        }
        sayName(`Idris Tboy`);


         // FUNCTION EXPRESSION ...

         let Greetings1 = function (user2) {
            console.log(`Hello ${user2}`);
         }
         Greetings1(`Munirat Awwel`);


         // CALLBACK FUNCTION ...

         function greetings2(welcome) {
            let value = 20;
            welcome(value);
         }
         greetings2(function (value){
            console.log(value);
         });

         // OR

         // USING TWO VARIABLES ...

         function greetings3(user3, user4) {
            console.log(`Welcome ${user3}`);
            user4();
         }
        
         greetings3( `Ibrahim`,  function user4() {
            console.log(`How are you doing Ibrahim`);
         });



         // Test Twelve ...

         function showCallFunc(fn) {
            let value1 = "Something Else ";
            fn(value1);
         }
         showCallFunc(function (value1){
            console.log(value1);
         });


         function sub (a,b,total) {
            let sum = a + b;
            total(sum);
         }
         sub(8,2,function(sum){
            console.log(sum);
         });

         function mul(a,b,div){
            let cal = a + b;
            console.log(`The sum is ${cal}`);
            div();
         }
         mul(8,2, function div() {
            console.log(`i am an aspiring developer`);
        });


        // METHODS 

        function real() {
            return `Hello, My name is ${persons.identity} and i am ${persons.ages} years old..`
        }
        const persons = {
            identity: `Hassan`,
            ages: 19,
            real,
        };
        console.log(persons.real());


        // OR

        const id = {
            first: `obaje Leo`,
            years: 20,
            dom: function dom() {
                return `Hello, name is ${id.first} and i am ${id.years} years old`
            }
        };

        console.log(id.dom());


        // JSON ( JAVASCRIPT OBJECT NOTATION)..

        let json 