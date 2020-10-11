export default{


    infectados: [

        {nombre:"Corredor", daño: "Bajo", nombreIngles:"Runner", image:"img/infecteds/corredor.jpg"},
        {nombre:"Asechador", daño: "Medio", nombreIngles:"Stalker", image:"img/infecteds/asechador.jpg"},
        {nombre:"Chasqueador", daño: "Alto", nombreIngles:"Clicker", image:"img/infecteds/chasqueador.jpg"},
        {nombre:"Inchado", daño: "Muy Alto", nombreIngles:"Shambler", image:"img/infecteds/inflado.jpg" },
        {nombre:"Tambaleante", daño: "Alto", nombreIngles:"Bloater", image:"img/infecteds/bloater.png" },
        {nombre:"Rey Rata", daño: "Extremo", nombreIngles:"Rat King", image:"img/infecteds/ReyRata.png" }


    ],

    data: `
        
        <h1>Clases de Infectados</h1>

        <div id="listAllInfecteds" class="infectedsAll">


        </div>
    
    `,


    lista: function (){

        var list = document.getElementById("listAllInfecteds");


        var cardInfectado="";

        this.infectados.forEach(item => {

            cardInfectado += `

                <div class="cardInfected">
                    <img src="${item.image}">
                    <div class="detailInfected">

                        <h2>${item.nombre}</h2>
                        <h4>Daño</h4>
                        <p>${item.daño}</p>
                        <h4>Nombre en Inglés</h4>
                        <p>${item.nombreIngles}</p>
                

                    </div>
                </div>    
            
            `;

        });


        list.innerHTML = cardInfectado;
        
        




    } 

}