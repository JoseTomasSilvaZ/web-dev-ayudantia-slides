# Mongoose
Mongoose es una librería para Node.js que nos permite escribir consultas para una base de datos de MongooDB, con características como validaciones, construcción de queries, middlewares, conversión de tipos y algunas otras, que enriquecen la funcionalidad de la base de datos.

#### Creando un esquema con mongoose
```javascript {all}{maxHeight:'290px', lines:false}
import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
  author: String,
  body: String,
  likes: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const tweetModel = mongoose.model("Tweet", tweetSchema);

export default tweetModel;

```