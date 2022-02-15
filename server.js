const http = require("http");
const fs = require("fs");
const port = 3000;
    const ip = "127.0.0.1";

const sendResponse = (filename,statusCode,response)=>{
    fs.readFile('./'+filename, (error,data)=>{
        if(error){
            response.statusCode=500;
            response.setHeader("Content-Type", "text/plain");
            response.end("Internal Error");
        }else{
            response.statusCode=statusCode;
            response.setHeader("Content-Type", "text/html");

            response.end(data);
        }
    });
};

const server = http.createServer((request, response) => {
    console.log(request.url,request.method);
    const method = request.method;
    let url = request.url;
    

    if(method ==="GET"){
        const requestURL = new URL(url,"http://"+ip+':'+port);
        console.log(requestURL);
        url = requestURL.pathname;
        const lang = requestURL.searchParams.get("lang");
        let selector;

        if(lang ===null || lang==="en"){
            selector = "";
        }else if(lang==="zh"){
            selector = "-zh";
        }else{
            selector="";
        }

        if(url === '/' || url ==="/index.html"){
            sendResponse("index.html",200,response);
        }else if(url === '/album/album.html'){
            sendResponse("album/album.html",200,response);
        }else if(url === '/course.html'){
            sendResponse("course.html",200,response);
        }else if(url === '/chatbot/test.html'){
            sendResponse("chatbot/test.html",200,response);
        }
        else{sendResponse("404"+selector+".html",404,response);}
    }else{

    }
});


server.listen(port,ip,() =>{
    console.log('Server is runningt at http://127.0.0.1:3000');
});
