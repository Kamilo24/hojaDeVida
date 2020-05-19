const express = require('express'),
    app = express(),
    path = require('path');

app.use(express.static(path.join(__dirname, "/public")));


app.get('/', (peticion, respuesta)=>{
    respuesta.sendFile(`${__dirname}/vews/hojaIndex.html`);
});

app.get('/Experiencia', (peticion, respuesta)=>{
    respuesta.sendFile(`${__dirname}/vews/expe.html`);
})


app.get('/contactenos/?', (peticion, respuesta)=>{
    if(peticion.query.nombre !== "" && peticion.query.password !==""){
        respuesta.sendFile(`${__dirname}/vews/contactenos.html`);
        console.log(peticion.query);

    }else{
        respuesta.sendFile(`${__dirname}/vews/denegado.html`);
    }
})

app.listen(3001);
console.log('Si pa :V');        

