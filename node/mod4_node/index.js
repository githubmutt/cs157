const os = require("os")


console.log( "hi" )


console.log( os.platform() )


console.log( os.platform() )


const uc = require("upper-case")

console.log( uc.upperCase("rog") )


const math = require("./math.js")

console.log("sum =" + math.sum(2,3))

console.log("area =" + math.area(31))

console.log("course =" + math.cs157 )

const http = require("http")
const fs = require("fs")

const server = http.createServer(  function(req,res){

     if(  req.url == "/"){

        res.writeHead(200 , { "Content-Type" : "text/html"})

        fs.readFile("./public/index.html" ,  function(err, data){
                if(!err){
                    res.write(data)
                }else{



                }

                res.end()

        })


     // search for mime types
     //}else if ( req.url == "/jsonresponse"){
     }else if( req.url == "/jsonresponse"){

        res.writeHead(200 , { "Content-Type" : "application/json"})



        let course = {
                name: "CS157",
                title: "Full-Stack Web Development",
                dept: "Computer Science",
                college : "LA City College",
                term: "Fall 2022"
        }        

        console.table( course )
        res.write( JSON.stringify(course))
        res.end()

     }


    })

server.listen(3000 , ()=>{

       console.log("port 3000 running")



 })// server.listen