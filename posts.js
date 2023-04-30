
let posts = [

    {
        titulo: "Servidor de Dragon Block",
        ip: 'dbc.com.br',
        discord: 'https://discord.gg/R2mgyyJb',
        imagem: 'maxresdefault',
        descricao: 'esse server é um coco',
        
    },

    {
        titulo: "Servidor de One Piece",
        ip: 'onepiece.com.br',
        discord: 'https://discord.gg/R2mgyyJb',
        imagem: 'servidoronepiece',
        descricao: 'esse server é um coco'
    }


   


    
]

function exibirPosts() {
    let div = document.createElement("div");
    div.classList.add("card-wrap")
    posts.forEach(function(post) {
        let item = document.createElement("div");
        item.classList.add("cards");
        item.innerHTML = 
        `
        <div class="card">
            <div class="img-card">
                <img src="${post.imagem}.jpg" alt="" >
            </div>
            <div class="text-card">
                <h2>${post.titulo}</h2>
                <div class="info">
                    <div class="lado1">
                        <p id="ipAdd">IP:${post.ip}</p>
                        <p>Discord: <a href="${post.discord}" target="_blank">link</a></p>
                    </div>
                    <div class="lado2">
                        <p>ModPack Direto: <a href="">link</a></p>
                        <p>ModPack Technic <a href="">link</a></p>
                    </div>
                </div>
                <br>
                <h3>Descrição</h3>
                <p>${post.descricao}</p> 
            </div>
        </div>
        `;
        div.appendChild(item);
    });
    document.body.appendChild(div);
    
}

let novaPostagem = {
    titulo: "Servidor de Dragon Block",
    ip: "dbc.com.br",
    discord: "https://discord.gg/bTQJDVAXqe",
    imagem: "outroserver",
    descricao: 'esse server é é uma bosta, já foi muito bom, mas é ruim'
}





posts.push(novaPostagem);
exibirPosts();

