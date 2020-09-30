var buttonLogin = document.getElementById("INICIAR");

var users=[
    {email:"lux.prueba@gmail.com", pass:"contraFacil"},
    {email:"spinner@gmail.com", pass:"contraDificil"},
    {email:"spear@gmail.com", pass:"spear"},
    {email:"joel.tlou@gmail.com", pass:"joelMM"},
    {email:"neutron.owo@gmail.com", pass:"neutral"},
    {email:"turboman@gmail.com", pass:"ajaja"}
];

buttonLogin.addEventListener("click", function(){

    var email = document.getElementById("EMAIL");
    var pass = document.getElementById("PASS");
    var resp = document.getElementById("RESP");

    if(email.value=="" && pass.value==""){

        resp.style.color="red";
        resp.innerHTML="Ingresa tu Email y tu contraseña";

    }else if(email.value==""){

        resp.style.color="red";
        resp.innerHTML="Ingresa tu Email";


    }else if(pass.value==""){1

        resp.style.color="red";
        resp.innerHTML="Ingresa tu Contraseña";

    }else{

        users.forEach((item) =>{


            //resp.innerHTML=item.email;
            //resp.innerHTML=item.pass;

            if(item.email==email.value && item.pass==pass.value){
                resp.style.color="black";
                resp.innerHTML="Iniciando sesion...."
            }else if(item.email!=email.value && item.pass!=pass.value){
                
                resp.style.color="red";
                resp.innerHTML="El Email y la Contraseña no existen o no coiciden";

            }else if(item.pass!=pass.value){
                
                resp.style.color="red";
                resp.innerHTML="La contraseña es incorrecta";

            }

        });


    }


});