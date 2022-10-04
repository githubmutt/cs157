//const { fstat } = require("fs");
const http = require("http");
const fs = require("fs");

const server = http.createServer(function(req, res) {

  /*  PART 1  
      Create an endpoint handler for the root path "/" that reads
      the ./public/index.html file and sends it to the client.

      Step 1: Create the endpoint handler for url "/"
      Step 2. Import (require) the file system module, read the "./public/index.html"
              file and send the file contents to the client as the response.
      Step 3. Start your Node app and refresh the preview page to see the index.html page

      Reference: Combining HTTP with File System Module - https://ilearn.laccd.edu/courses/202867/pages/module-4-nodejs-reference
  */

  // Part 1 Code Here
     if( req.url == "/"){

        res.writeHead(200 , {"Content-Type" : "text/html"} )
        fs.readFile("./public/index.html", function(err,data){
                 if(!err){
                      res.write(data)

                 }else{


                 }
                 res.end()

        })
     }
  


  // Begin Parts 2 to 4 AFTER your Node app is able to load the index.html file from part 1 above

  /*  PART 2
      Create an endpoint handler for "/hello" and have Node send back a
      text/plain response of "Hello Client!"

      Step 1: Create the endpoint handler for url "/hello" that returns a content-type of text/plain.
      Step 2: Send the client "Hello Client" as the response.

      Reference: HTTP Module - https://ilearn.laccd.edu/courses/202867/pages/module-4-nodejs-reference
  */

  // Part 2 Code Here
     else if( req.url == "/hello"){

            console.log("hello")
            res.writeHead(200 , {"Content-Type" : "text/plain"} )
            res.write("Hello")
            res.end()

     }
     else if( req.url == "/hello2"){

        console.log("hello2")
        res.writeHead(200 , {"Content-Type" : "application/json"} )
        let j = {
                    name: "Web Full-Stack",
                    id: "CS157"
        }
        res.write(JSON.stringify(j))
        res.end()

 }


  /*  PART 3
      Create an endpoint handler for "/quote" that uses the quotegen
      module provided for you in this project to generate a random quote
      that is sent to the client. The quotegen module has a single function
      called getQuote() that automatically returns a random quote for you.

      Step 1: Create the endpoint handler for "/quote" that returns a content-type of text/html.
      Step 2: Import (require) the quotegen module
      Step 3: Use the getQuote() function to get a random quote from the module
      Step 4: Send the client the quote as the response.

      Reference: Loading Modules - https://ilearn.laccd.edu/courses/202867/pages/module-4-nodejs-reference
  */

  // Part 3 Code Here
  else if( req.url == "/quote"){
     q = require("./quotegen")

    let quote = q.getQuote()
    console.log(q)
    res.writeHead(200, {"Content-Type": "text/html" })
    res.write( quote )
    res.end()

}



  /*  PART 4
      Create an endpoint handler for "/address" that creates a
      random name/address object, stringifys the object into a JSON
      string and send it to the client as an application/json content-type.

      Step 1: Create the endpoint handler for "/address" that returns a content-type of application/json.
      Step 2: Create an object with properties for: name, street, city, state and zip
      Step 3: Stringify the object into a JSON string using JavaScript's JSON function.
      Step 4: Send the client the JSON string as the response.

      Reference: 14. JavaScript Objects - https://ilearn.laccd.edu/courses/202867/pages/module-2-introduction-to-javascript-and-reference
      Reference: JSON - https://ilearn.laccd.edu/courses/202867/pages/module-3-json
  */

  // Part 4 Code Here
  else if( req.url == "/address"){
      class OBJr {
           constructor(name, street,city,state,zip){
              this.name =  name
              this.street = street
              this.city =  city
              this.state =  state
              this.zip = zip
           }
    }    
     
    let addr =  new Array()
    addr.push ( new  OBJr ( "Odell Beckem Jr.", "23 Duane", "New York", "NY", 23123) )
    addr.push ( new  OBJr ( "Wes Jones", "3500 Golden Plaza", "New York", "NY", 23124) )
    addr.push ( new  OBJr ( "Tyler Rogers", "2 Rengstorff Drive", "San Mateo", "CA", 92323 ) )
    addr.push ( new  OBJr ( "Joe Zelensky", "2d Palace Road", "Kyiev", "UK", "PSA-92323" ) )

    console.table(addr )

    //  taken from quotegen.js
    let generateRandomInt = function(from,to) {return Math.floor(Math.random() * (to - from + 1)) + from }
    let r = generateRandomInt(0, addr.length - 1)

    res.writeHead( 200, {"Content-Type": "application/json"} )
    let js = JSON.stringify( addr[r])
    res.write( js )

/*
    res.writeHead(200, {"Content-Type": "text/html" })
   res.write("<center><h1>")
   res.write( addr[r].name + "<br>" + addr[r].street + "<br>" + addr[r].city + "  " + addr[r].state + "   " +addr[r].zip   )
   res.write("</h1</center>")
*/
   
   res.end()

}


});

server.listen(3000 ,() => { console.log("port 3000 running")});