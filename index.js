const express = require('express')
    // require('./connection');
const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/home', (req, res) => {
    res.send('Servidor express funcionando :D')
});

// Middlewares
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// Settings
// app.set('port', process.env.PORT || 3000);
// Routes
// app.use(require('./routes/user.routes'));

app.listen(4000, () => {
    console.log('Servidor express funcionando :3')
});


// commit con comentario