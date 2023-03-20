const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./utils/database');
const initModels = require('./models/initModels');
const userRouter = require("./routes/user.routes");
const ConversationRouter = require("./routes/conversations.routes");
const messageRouter = require('./routes/messages.routes')
initModels();

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const PORT = 8000;

db.authenticate()
    .then(() => {
        console.log('Base de datos conectada');
    })
    .catch((error) => console.log(error));

db.sync({ alter:true})
    .then(() => console.log("Base de datos sync"))
    .catch((error) => console.log(error));


app.use(userRouter);
app.use(ConversationRouter);
app.use(messageRouter);

app.get('/', (req, res) => {
    res.send('welcome to my API');
})

// errorHandlerRouter(app);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});