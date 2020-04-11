const http = require('http');
const server = http.createServer((request, response) =>
{
    response.end(`
        <HTML>
            <HEAD>
                <meta charset="utf-8">
            </HEAD>
            <BODY>
                <H1>Subiu!</H1>
            </BODY>
        <HTML>`)
});

server.listen('3000');