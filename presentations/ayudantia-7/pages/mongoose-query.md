# Haciendo Peticiones con mongoose

<div class='flex flex-col gap-4'>

#### Buscando bajo un parámetro
```javascript {all}{maxHeight:'290px', lines:false}
import mongoose from "mongoose";

const tweets = await tweetModel.find({author:'Francisco Galvez'});
```

#### Guardando un registro
```javascript {all}{maxHeight:'290px', lines:false}
import mongoose from "mongoose";

const tweet = new tweetModel({
    author: "Sofia Belmar",
      body: "Body of the twweet",
    });
await tweet.save();
```
</div>