import http from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=path.join(path.dirname(fileURLToPath(import.meta.url)),'dist');
const types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.jpg':'image/jpeg','.png':'image/png','.pdf':'application/pdf','.svg':'image/svg+xml'};
http.createServer(async(req,res)=>{try{const name=decodeURIComponent(new URL(req.url,'http://localhost').pathname);const file=path.resolve(root,'.'+(name==='/'?'/index.html':name));if(!file.startsWith(root+path.sep)||!(await stat(file)).isFile())throw Error();res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream'});res.end(await readFile(file));}catch{res.writeHead(404);res.end('Not found');}}).listen(Number(process.env.PORT||5173),'127.0.0.1',()=>console.log('Portfolio: http://127.0.0.1:'+Number(process.env.PORT||5173)));
