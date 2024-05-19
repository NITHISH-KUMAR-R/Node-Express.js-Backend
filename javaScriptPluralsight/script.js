'use strict'
// document.addEventListener( 'click', function () {
//     console.log( this ) //#document
// } )

// document.addEventListener( 'click', () => {
//     console.log( this ) //#document
// } )

var invoice={
    number: 123,
    process: function () {
        console.log( this ); //object
    },
    process2: () => {
        console.log( this ); //window
    }
}

invoice.process();
invoice.process2();

//we cannot bin object to the arrow functions

var invoice2={
    number: 123,
    process: function () {
        return () => console.log( this.number );
    },
    process2: () => {
        return () => console.log( this.number );
    }
}

var newInvoice={
    number: 456,
}

//we cannot bin new object to the arrow functions  js engine just ignore the bind
invoice2.process().bind( newInvoice )(); // Returns an arrow function
invoice2.process().bind( newInvoice )(); // Returns another arrow function
invoice2.process().apply( newInvoice );
invoice2.process().call( newInvoice );


//INEs6 for arrow fun we dont have access to prototype field

var getPoduct=function ( productid=1000, type='software' ) {
    console.log( productid+','+type )
}

getPoduct( undefined, 'hardware' )

//we can access function variblae in context fro defualt used in function

//arguments.length still refers to the args that pass to the function it wont take all the args which are in the function() parameters

//🧠🧠🧠🤯🤯🤯
var getDefault=new Function( 'price =20', 'return price' )
console.log( getDefault() )

//...Rest and spread🫡

var showCtaegories=function ( productid, secid, ...categories ) {
    //when calls paramters of the functions length iy will ignore the restparamters now length 2
}
console.log( showCtaegories.length )

var showCtaegories=function ( productid, secid, ...categories ) {
    //Even though two parameters  arguments still going to refer back to the original function
    console.log( arguments.length )
}

showCtaegories( 123, 'search', 'advertising', 'hell' )

//Spread
let prices=[1, 45, 3];
let maxPrice=Math.max( ...prices ) //it took array and converted into list
console.log( maxPrice )

//spread operator breaks out string into individual characters
var maxCode=Math.max( ..."1234903" )
console.log( maxCode )

var codeArray=['A', ...'BCD', 'E'];
console.log( codeArray )