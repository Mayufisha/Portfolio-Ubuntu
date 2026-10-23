import {readFile,writeFile} from 'node:fs/promises';
const html=await readFile('dist/index.html','utf8');
const js=html.match(/<script[^>]+src="([^"]+)"[^>]*><\/script>/);
const css=html.match(/<link[^>]+href="([^"]+\.css)"[^>]*>/);
const bundle=(await readFile('dist/'+js[1],'utf8')).replace(/<\/script/gi,'<\\/script');
const styles=await readFile('dist/'+css[1],'utf8');
const output=html.replace(js[0],()=>'<script type="module">'+bundle+'</script>').replace(css[0],()=>'<style>'+styles+'</style>');
await writeFile('dist/desktop.html',output);
console.log('Packaged dist/desktop.html for direct browser opening');
