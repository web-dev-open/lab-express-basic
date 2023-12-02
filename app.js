const express = require('express')

const app=express()
app.use(express.static('public'));

app.get('/', (req , res) => {
    res.send(`<html>
        <head>
          <meta charset="utf-8">
          <title>Bae Suzy</title>
          <link rel="stylesheet" href="/stylesheet/style.css" />
        </head>
        <body>
        <div class="intro">
          <h1>Bae Suzy</h1>
          <h2>Actress and Idol</h2>
          <img src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/660190_v9_ba.jpg" alt="pic" />
        <div class="btns">
        <form action="/about" method="post">
            <input type="submit" value="About">
        </form>
        <form action="/works" method="post">
            <input type="submit" value="Works">
        </form>
        <form action="/gallery" method="post">
            <input type="submit" value="Gallery">
        </form>
        <div>
        </div>
        </body>
      </html>`);
  });
 
app.post('/about' ,(req , res) =>{
      res.send(`<html>
      <head>
        <meta charset="utf-8">
        <title>About</title>
        <link rel="stylesheet" href="/stylesheet/style.css" />
      </head>
      <body>
      <h1>About</h1>
      <div>Bae Su-ji (Korean: 배수지; born October 10, 1994), better known as Bae Suzy or simply Suzy, is a South Korean singer, actress and model. She is a former member of the girl group Miss A under JYP Entertainment. She made her debut as an actress with television series Dream High (2011) and has gone on to appear in series such as Gu Family Book (2013), Uncontrollably Fond (2016), While You Were Sleeping (2017), Vagabond (2019), Start-Up (2020), Anna (2022), and Doona! (2023). She made her film debut in Architecture 101 (2012). Since her successful film debut, she has been hailed as "The Nation's First Love" in her home country.</div>
      </body>
    </html>`)
        
}) 

app.post('/works' ,(req,res)=>{
    res.send(`<head>
    <meta charset="utf-8">
    <title>Works</title>
    <link rel="stylesheet" href="/stylesheet/style.css" />
  </head>
  <body>
    <h1>Series staring Suzy</h1>
    <div class="movies">
      <div>
        <img src="https://m.media-amazon.com/images/M/MV5BZGEzMjMxNmItYWM2MC00MGU3LTk2YmQtYjUyOTVjYTRlZDQ3XkEyXkFqcGdeQXVyNDU4MDQ0MjM@._V1_.jpg" alt="pic">
        <h2>Start Up</h2>
        <h3>IMBD Rating : 8</h3>
      </div>
      <div>
        <img src="https://m.media-amazon.com/images/M/MV5BNDYwNjViZWUtMDU0NC00OTNmLTlmNWItNjFkODM1ZjgwZTZhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg" alt="pic">
        <h2>Vagabond</h2>
        <h3>IMBD Rating : 8.1</h3>
      </div>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/en/a/a0/Anna_%28South_Korean_TV_series%29.jpg" alt="pic">
        <h2>Anna</h2>
        <h3>IMBD Rating : 7.5</h3>
      </div>
      <div>
        <img src="https://m.media-amazon.com/images/M/MV5BZjMxYjY2NDktNGEyNi00YzJjLThiMzUtMmEwOTBlYmNmMDA1XkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_FMjpg_UX1000_.jpg" alt="pic">
        <h2>Dream High</h2>
        <h3>IMBD Rating : 8</h3>
      </div>
    </div>
  </body>
    </html>`)
})

app.post('/gallery' , (req,res)=>{
    res.send(`<head>
    <meta charset="utf-8">
    <title>Gallery</title>
    <link rel="stylesheet" href="/stylesheet/style.css" />
  </head>
  <body>
  <h1>Image Gallery</h1>
  <div class='gallery'>
     <img src="https://0.soompi.io/wp-content/uploads/2020/11/16161022/Suzy-2.jpg" alt="p">
     <img src="https://m.media-amazon.com/images/M/MV5BYTUxMjYyZGYtMzE0NS00OWQ0LTkyODUtMjJhM2E3ZGMzY2RjXkEyXkFqcGdeQXVyNDY5MjMyNTg@._V1_.jpg" alt="p">
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOYMlVI-MO3BAMLDzDdBQ8APtdwFRKfwchSLmv4pTLFJ7_DY_rc5kbaUEa42SNbpupo-w&usqp=CAU" alt="p">
     <img src="https://1.bp.blogspot.com/-7XFt0Mbg-SI/XCrt9JJHzJI/AAAAAAABCRw/8As_NvVu-AgJfJr-TGOV5gRVN3Kt5GkOQCLcBGAs/s1600/49164647_2028624663884747_5772770915834134528_o.jpg" alt ="p">
  </div>
  </body>
    </html>`)
})
app.listen(8000 , ()=>{
    console.log("Server is running on port 8000")
})

