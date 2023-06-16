const{pool}=require("../database")

const register=async(req,res)=>{
    try{
        const{name,last_name,email,photo,password}=req.body;
        let sql="INSERT INTO user(name,last_name,email,photo,password) VALUES(?,?,?,?,?)"
        let values=[name, last_name, email, photo, password];
        await pool.query(sql,values);
        res.send({mensaje:"usuario registrado"})
        
        }catch(error){
            console.log(error);
            res.send({error:true, codigo:200, mensaje:"error al registrar"})
        }
    }


const login=async(req,res)=>{
   try{
    console.log(req.body);
    if(req.body.email && req.body.password){
        let sql="SELECT id_user, name, last_name, email, photo FROM user WHERE email='"+req.body.email+"'and password='"+req.body.password+"'"
        console.log(sql)
        let[result]=await pool.query(sql);
        console.log(result)
        if(result.length>0){
            respuesta={error:false, codigo:200, mensaje:"log correcto",data_user :result}
            res.send(respuesta)
        }
    }else{
        respuesta={error:true, codigo:200,mensaje:"email o contraseña incorrectos"}
        res.send(respuesta)
    }
   }catch(err){
    console.log(err);
    res.send({error:true, codigo:200, mensaje:"error al logear"})
   }
}
const update=async(req,res)=>{
    console.log("entrando");
  try{  let {id_user}=req.body
    let{name, last_name,email,photo,password }=req.body
    await pool.query(
        "UPDATE user SET name=?, last_name=?, email=?, photo=?, password=? WHERE id_user=?",[name, last_name,email,photo,password,id_user]
    )
    res.send({error:false, codigo:200, mensaje:"usuario actualizado"})
    console.log("cambiado");
} catch (error){
    console.log(error);
    res.send({error:true, codigo:200, mensaje:"no actualizado"})
    console.log("error");
}
}


module.exports={register, login, update}







// try{
//     const{email,password}=req.body;
//     console.log("inicio",email,password);
//     const query="SELECT id_user, name, last_name, email, photo FROM user WHERE email = ? AND password = ?"
//     const values=[email,password]
//     console.log("consulta",query);
//     console.log("valor consulta",values);
//     const[result]= await pool.query(query,values);
//     console.log("resultado",result);
//     if(result.length===0){
//         console.log("usuario no encontrado");
//         res.send({error: true, codigo:500, message:"email o contraseña incorrectos"})
//     }else{
//         const user=result[0];
//         delete user.password
//         console.log("usuario encontrado",user);
//         res.send(user)
//     }
// }catch(error){
//     console.log(error);
//     console.log("error en el inicio de sesion",error);
//     res.send({error:true, codigo:200, mensaje:"error inesperado"})
// }