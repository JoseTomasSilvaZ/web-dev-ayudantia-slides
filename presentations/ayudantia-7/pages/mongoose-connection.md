# Creando una conexión con mongoose
La URL se consigue al configurar exitosamente un cluster en Mongodb Atlas
```javascript {all}{maxHeight:'290px', lines:false}
import mongoose from "mongoose";

const URL =
  "mongodb+srv://username_here:password_here@tweets.vkau0wl.mongodb.net/dbname";
mongoose
  .connect(URL)
  .then(() => console.log("database connected"))
  .catch((error) => console.log("Error connecting to db: ", error));


```