const{pool}=require("../database")


const getUserBooks=async (req, res)=>{
    const {id_user}=req.params
    try{
        let respuesta
        let sql='SELECT * FROM book WHERE id_user=?'
        const[books]=await pool.query(sql , [id_user])
        console.log(books)
        respuesta={ error:false, codigo:200, mensaje:'libros encontrados',data : books}
        res.send(respuesta)
        console.log(respuesta);
    }catch(error){
        respuesta={error:true, codigo:200, mensaje:'error al obtener libros',error}
        console.log(error);
        console.log('error al obtener los libros de usuario',error);
        res.send(respuesta);
        
    } 
}

const getBookUser=async (req,res)=>{
    const{id_user, id_book}=req.params
    try{

        let sql = "SELECT * FROM book WHERE id_user=? AND id_book=?"
      
        const[book]=await pool.query(sql,  [id_user,id_book] )
        if (book.length===0){
            respuesta={error:true, codigo:404, mensaje:"libro no encontrado"}
            console.log('libro no encontrado');
            res.send(respuesta)
        }else{
            respuesta={error:false, codigo:200, mensaje:'libros obtenidos correctamente',data : book}
            res.send(respuesta)
        }
    }catch(error){
        respuesta={error:true, codigo:200, mensaje:"error al obtener los datos",error}
        console.log(error);
        console.log("error al obtener los datos",error);
        res.send(respuesta)
    }
}

const addUserBook=async(req,res)=>{
    const{id_user}=req.params
    const {title,type,author,price,photo}=req.body; 
    try{
        await pool.query("INSERT INTO book(id_user,title,type,author,price,photo) VALUES (?,?,?,?,?,?) ",[id_user,title,type,author,price,photo])
       respuesta={error:false, codigo:200, mensaje:"libro añadido"}
        res.send(respuesta)
    }catch(error){
        respuesta= {error:true, codigo:200, mensaje:"error al añadir libro",error}
        console.log(error);
        log("error al obtener el libro",error)
        res.send(respuesta)
    }
}


const updateUserBook=async (req,res)=>{
    const {id_user,id_book}=req.params
    const {title,type,author,price,photo}=req.body
    try{
        const [search]=await pool.query("SELECT * FROM book WHERE id_user= ? AND id_book=?",[id_user, id_book]);
        if (search.length===0){
            respuesta={error:true, error:404, mensaje:"id no coincide"}
            res.send(respuesta)
        }else{
            await pool.query( "UPDATE book SET title=?, type=?, author=?, price=?, photo=? WHERE id_user=? and id_book=?",[title,type,author,price,photo,id_user,id_book])
            respuesta={error:true , codigo:200 , mensaje:"libro actualzado"}
            res.send(respuesta)
        }
    }catch(error){
        respuesta={error:true, codigo:200, mensaje:"error al actualizar", error}
        console.log(error);
        console.log("error al actualizar",error);
        res.send(respuesta)
    }
}

const deleteUserBook=async (req,res)=>{
    
    const{id_user,id_book}=req.params;
    try{
        const [search]=await pool.query("SELECT * FROM book WHERE id_user= ? AND id_book=?",[id_user, id_book]);
        if (search.length===0){
           respuesta={error:true, error:404, mensaje:"id existe"}
            res.send(respuesta)
        }else{
            await pool.query( "DELETE FROM book WHERE id_user=? AND id_book=?",[id_user,id_book])
            respuesta={error:true , codigo:200 , mensaje:"libro eliminado"}
            res.send(respuesta)  
        }
    }catch(error){
       respuesta={error:true, codigo:200, mensaje:"error al eliminar", error}
        console.log(error);
        console.log("error al eliminar",error);
        res.send(respuesta)
    }
}
  
module.exports={getUserBooks,getBookUser,addUserBook,updateUserBook,deleteUserBook}


// {
//     "title":"titulo",
//     "type": "tipo",
//     "author": "autor",
//     "price": 10,
//     "photo": "foto"
// }