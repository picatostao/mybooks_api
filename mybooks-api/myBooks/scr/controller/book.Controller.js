
const { Book } = require('../models/book')


let book=new Book()


function getBook(request, response){
let respuesta
console.log(request.body)
if( book!=null)
  respuesta=book
    else
respuesta={error:true, codigo:200, mensaje:"no existe libro"}
response.send(respuesta)
}
function postBook(request,response){
    let respuesta;
    if (book===null){
        
        book={
            id_book: request.body.id_book,
            title: request.body.title,
            type: request.body.type,
            author: request.body.author,
            price: request.body.price,
            photo: request.body.photo
        }
        respuesta={
            
            error:false ,codigo:200, mensaje:'libro creado',data:book
        }
    }
    else
        respuesta={
            error:true, codigo:200, mensaje:'error, libro ya existente'
        }
        response.send(respuesta)
        

}
function putBook(request, response){
let respuesta
console.log(request.body)
if(book!=null){
    book.id_book= request.body.id_book,
    book.title= request.body.title,
    book.type= request.body.type,
    book.author= request.body.author,
    book.price= request.body.price,
    book.photo= request.body.photo
    respuesta={eror:false, codigo:200, mensaje:'libro actualizado',data:book
    }
}
else
respuesta={
    error:true, codigo:200, mensaje:'El libro no existe', data:book
}
response.send(respuesta)
}
function deleteBook(request, response){
    let respuesta
    if(book !=null){
        book=null
        respuesta={
            error:false, codigo:200, mensaje: "libro borrado",data:book
        }
    }
    else
        respuesta={
            error: true, codigo:200, mensaje:'el libro que quieres borrar no existe',data:book
        }
        response.send(respuesta)
    }
module.exports={getBook,postBook,putBook,deleteBook}

