console.log('Node works beautifully :) ')

// ------------------------------------------------------
//                    CHALK
// ------------------------------------------------------

/*
const chalk = require('chalk');

console.log(chalk.blue('Hello world!'));

console.log(chalk.blue.bgRed.bold('Hello world!'));

const error = chalk.bold.red;
const warning = chalk.keyword('orange');

console.log(error('Error!'));
console.log(warning('Warning!'));
*/

// ------------------------------------------------------
//            FAKER ACTIVITY
// ------------------------------------------------------

/*
var faker = require('faker');

for (let i = 0; i< 10; i++) {
    console.log( faker.commerce.productName() , faker.commerce.price()) 
}
*/

// ------------------------------------------------------
//            CREATING A SERVER IN NODE
// ------------------------------------------------------

/*
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/

// ------------------------------------------------------
//                       EXPRESS
// ------------------------------------------------------


const express = require('express')
const app = express() 
app.use((req, res, next) => {
    console.log('In the middleware! ')
    next()
})

app.use( express.static(__dirname + '/public') )
app.get('/' , ( req, res ) => {
    res.sendFile(__dirname + '/views/home.html')
})


app.get('/about' , ( req, res ) => {
    res.sendFile(__dirname + '/views/about.html')
})


app.get('/about/:user', (req, res) => {
    res.send('Works ' + req.params.user)
})


app.get('/works', (ihreq, ihres) => {
    ihres.sendFile(__dirname + '/views/works.html')
})

app.get('/gallery' , ( req, res ) => {
    res.sendFile(__dirname + '/views/gallery.html')
})

app.get('/:user', (req, res) => {
    const {user, age}  = req.params
    res.send('Hey '+ user + ' ' + age)
})

app.get('/', (req, res) => {
    res.send("Hi there, welcome to my assignment!")
})


app.get('/speak/:animal', (req, res) => {
    const {animal} = req.params

    switch( animal ) {
        case 'pig':
            res.send("The pig says 'Oink!'") 
            break;
        case 'dog':
            res.send("The dog says 'Woff Woof!'")
            break;
        case 'cow':
            res.send("The cow says 'Moo'")   
            break;       
    }
})

app.get('/greet/:text/:num', (req, res) => {
    const {text, num} = req.params
    res.send( (text + ' ').repeat(num)  )
})

app.get('*', (req, res) => {
    res.send("Sorry, page not found...Blame our developer")
})

app.use((req, res) => {
     res.send("Sorry, page not found...Blame our developer")
})

app.listen(3000)