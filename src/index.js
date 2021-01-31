// Importación de librerías
import "dotenv/config";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import morganBody from "morgan-body";

// Importación de componentes de la API
import models from './models';
import controllers from './controllers'
import routes from './routes'
import passport from './services/passport';

const app = express();

// BodyParser y Morgan
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'))
morganBody(app);

// Enrutamiento

// Conexión a MongoDB a través de Mongoose
mongoose.connect(process.env.DB_URI, { userNewUrlParser:true, userUnifiedTopology: true }, (err) => {
  if (err) {
    console.log(`Error de conexión a la base de datos: ${JSON.stringify(err)}`);
  } else {
    console.log(`Conexión correcta a la base de datos: ${process.env.DB_URI}`);
    app.listen(process.env.PORT, () => {
      console.log(`Escuchando el puerto ${process.env.PORT}`);
    });
  }

});

