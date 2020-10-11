export default{


    afectados: [

        {nombre: "Alexa Bliss", infectado:"Asechador", estado:"Hospitalizado", image:"img/afecteds/AlexaBliss.jpg"},
        {nombre: "Juan Carlos Bodoque", infectado:"Corredor", estado:"Hospitalizado", image:"img/afecteds/bodoque.png"},
        {nombre: "Carl Johnson", infectado:"Chasqueador", estado:"Desaparecido", image:"img/afecteds/CarlJohnson.png"},
        {nombre: "Cristiano Ronaldo", infectado:"Rey Rata", estado:"Infectado", image:"img/afecteds/CristianoRonaldo.jpg"},
        {nombre: "Evo Morales", infectado:"Tambaleante", estado:"Fallecido", image:"img/afecteds/EvoMorales.jpg"},
        {nombre: "John Cena", infectado:"Asechador", estado:"Hospitalizado", image:"img/afecteds/JohnCena.jpg"},
        {nombre: "Johnny Cage", infectado:"Asechador", estado:"Infectado", image:"img/afecteds/JohnnyCage.jpg"},
        {nombre: "Lars Ulrich", infectado:"Tambaleante", estado:"Hospitalizado", image:"img/afecteds/LarsUlrich.jpg"},
        {nombre: "Leo Rey", infectado:"Corredor", estado:"Desaparecido", image:"img/afecteds/LeoRey.jpg"},
        {nombre: "Niko Bellic", infectado:"Chasqueador", estado:"Fallecido", image:"img/afecteds/NikoBellic.jpg"},
        {nombre: "Roman Reings", infectado:"Chasqueador", estado:"Infectado", image:"img/afecteds/RomanReigns.jpg"},
        {nombre: "Sebastián Piñera", infectado:"Rey Rata", estado:"Desaparecido", image:"img/afecteds/SebastianPiñera.jpeg"}

    ],

    data: `
        
        <h1>Infectados Actuales</h1>

        <div id="listAllInfecteds" class="infectedsAll">


        </div>
    
    `,


    list: function (){

        var list = document.getElementById("listAllInfecteds");


        var cardInfectado="";

        this.afectados.forEach(item => {

            cardInfectado += `

                <div class="cardInfected">
                    <img src="${item.image}">
                    <div class="detailInfected">

                        <h2>${item.nombre}</h2>
                        <h4>Infectado por</h4>
                        <p>${item.infectado}</p>
                        <h4>Estado</h4>
                        <p>${item.estado}</p>
                

                    </div>
                </div>    
            
            `;

        });


        list.innerHTML = cardInfectado;
        
        




    } 












}