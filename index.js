//const os=require("os");
//console.log(os.hostname());
const http=require("http");
const port=400;
const hostname="localhost";
const server=http.createServer((request,response)=>{
request.parmas;
response.end("<h1> <b> Hello World !<b> <h1>");
});
server.listen(port,hostname,()=>{
    console.log(`server is working on http://${hostname}:${port}`);
});

