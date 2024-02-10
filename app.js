const express = require("express");
//creation of our own server
const app = express();

//making everything inside of public available
app.use(express.static("public"));

//adding custom middleware to set correct MIME type
app.use((request,response, next)=>{
    if(request.url.endsWith('.css')){
        response.setHeader('Content-Type','text/css');
    }
    next();
})

//routes
app.get('/home',(request,response,next)=>response.sendFile(__dirname + '/views/home-page.html'));
app.get('/about',(request,response,next)=>response.sendFile(__dirname + '/views/about-page.html'));
app.get('/works',(request,response,next)=>response.sendFile(__dirname + '/views/works-page.html'));
//starting server
app.listen(3000, ()=> console.log("Application listening on port 3000!"))