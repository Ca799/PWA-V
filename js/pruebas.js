let getUsuario=(id,callback)=>{
    let usuario={
        "id":id,
        "nombre":"carlos"
    };
    
    if(id === 11){
        callback(`el usuario 13 no existe`)
    }else
    callback(null,usuario);
}
getUsuario(13,(err,user)=>{
    if(err){
        console.log(err);
    }else{
        console.log(user);
    }
})




