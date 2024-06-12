### Hablemos de buenas prácticas en una API REST
Hay algunas buenas prácticas que es importante que sepan a la hora de desarrollar su API.

<div class='grid grid-cols-2 gap-10'>
<div class='space-y-10'>
<div>

##### No usar verbos en los endpoints

```javascript
❌ router.post('/producto/crear')
❌ router.post('/crear/producto')
✅ router.post('/producto')
```
</div>
<div>

##### Recibamos y enviemos información en JSON

```javascript
//...
    res.status(400).json({
        message: 'Bad Request'
    })
    res.status(201).json({
        message: 'Product created'
        product: newProduct
    })
//...
```
</div>
</div>

<div>

##### Utilicemos HTTP Status Codes

```javascript
//...
    res.status(500).json({
        message: 'Something went wrong, try again later.'
    })
    res.status(200).json({
        products: arrayOfProducts
    })
//...
```
</div>
</div>