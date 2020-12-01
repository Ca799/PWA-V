let usuario={
    "name":"ctarlos",
    "job":"estudent"
}
console.log(usuario);

fetch("https://regres.in/api/users",{
    method:"POST",
    headers:{
    'Content-Type':'applicatio/son'
    },
    body:JSON.stringify(usuario)
})

.then(resp=>{ return resp.json() })
.catch(err=>{console.log(err)})
.then(rJson=>console.log(rJson))
.catch(console.err)