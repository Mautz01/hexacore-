const produtos = [
    {
        id: "acer-aspire",
        nome: "Acer Aspire",
        imagem: "https://i.postimg.cc/PqJsCV2K/acer-aspire-5-spin-14-a5sp14-51mtn-with-fingerprint-with-backlit-on-wallpaper-logo-steel-gray-01-tif.jpg",
        alt: "Acer Aspire",
        estrelas: "★★★★☆",
        precoAntigo: "R$ 3.800,00",
        preco: "R$ 2.150,00 no PIX",
        observacao: "",
        descricao: "Acer Aspire. Notebook selecionado da loja HexaCore com ótimo desempenho para estudos, trabalho, produtividade e jogos conforme a configuração do modelo.",
        parcelamento: "✔ 12x sem juros no cartão<br>✔ Frete grátis para todo Brasil<br>✔ Garantia de fábrica",
        pix: "À vista no PIX com desconto especial",
        imagens: [
            "https://i.postimg.cc/PqJsCV2K/acer-aspire-5-spin-14-a5sp14-51mtn-with-fingerprint-with-backlit-on-wallpaper-logo-steel-gray-01-tif.jpg"
        ],
        especificacoes: {
            "Categoria": "Notebook",
            "Condição": "Novo",
            "Garantia": "12 meses",
            "Sistema Operacional": "Windows 11"
        }
    },
    {
        id: "asus-vivobook-15",
        nome: "ASUS Vivobook 15, Intel i5 8GB, 512GB SSD",
        imagem: "https://i.postimg.cc/506H4Z44/OIP-Fh-WYAXP8oe-Dx0AQu-SFLi-XAHa-Ep-w-299-h-188-c-7-r-0-o-7-pid-1.webp",
        alt: "Notebook Custo-Benefício",
        estrelas: "★★★★★",
        precoAntigo: "R$ 3.699,00",
        preco: "R$ 2.720,00",
        observacao: "",
        descricao: "ASUS Vivobook 15 com Intel i5, 8GB de memória RAM e SSD de 512GB. Ideal para estudos, trabalho, navegação, produtividade e uso diário.",
        parcelamento: "✔ 12x sem juros no cartão<br>✔ Frete grátis para todo Brasil<br>✔ Garantia de fábrica",
        pix: "À vista no PIX com desconto especial",
        imagens: [
            "https://i.postimg.cc/506H4Z44/OIP-Fh-WYAXP8oe-Dx0AQu-SFLi-XAHa-Ep-w-299-h-188-c-7-r-0-o-7-pid-1.webp"
        ],
        especificacoes: {
            "Categoria": "Notebook",
            "Processador": "Intel Core i5",
            "Memória RAM": "8GB",
            "Armazenamento": "SSD 512GB",
            "Sistema Operacional": "Windows 11",
            "Garantia": "12 meses"
        }
    },
    {
        id: "notebook-ztell-i5",
        nome: "Notebook Ztell i5-12450H 16GB | 512GB SSD",
        imagem: "https://i.postimg.cc/RZN2TdVy/OIP-T8Swv-F2Qvwe-C-w7aikizrg-Ha-FR-w-278-h-197-c-7-r-0-o-7-pid-1.webp",
        alt: "Notebook Intermediário",
        estrelas: "★★★★★",
        precoAntigo: "R$ 3.990,00",
        preco: "R$ 2.800,00",
        observacao: "",
        descricao: "Notebook Ztell com processador i5-12450H, 16GB de RAM e SSD de 512GB. Modelo intermediário com boa performance para multitarefas.",
        parcelamento: "✔ 12x sem juros no cartão<br>✔ Frete grátis para todo Brasil<br>✔ Garantia de fábrica",
        pix: "À vista no PIX com desconto especial",
        imagens: [
            "https://i.postimg.cc/RZN2TdVy/OIP-T8Swv-F2Qvwe-C-w7aikizrg-Ha-FR-w-278-h-197-c-7-r-0-o-7-pid-1.webp"
        ],
        especificacoes: {
            "Categoria": "Notebook",
            "Processador": "Intel i5-12450H",
            "Memória RAM": "16GB",
            "Armazenamento": "SSD 512GB",
            "Sistema Operacional": "Windows 11",
            "Garantia": "12 meses"
        }
    },
    {
        id: "samsung-galaxy-book",
        nome: "Samsung Galaxy Book, Intel SSD Windows 11",
        imagem: "https://i.postimg.cc/SQ96cMhD/OIP-Jl2g-Sfj-Zc-Zy-D6x-TDLc-Xe-EAHa-FB-w-235-h-180-c-7-r-0-o-7-pid-1.webp",
        alt: "Samsung Galaxy Book",
        estrelas: "★★★★★",
        precoAntigo: "R$ 5.400,00",
        preco: "R$ 3.450,00",
        observacao: "",
        descricao: "Samsung Galaxy Book com processador Intel, SSD e Windows 11. Notebook moderno para produtividade, estudos e uso profissional.",
        parcelamento: "✔ 12x sem juros no cartão<br>✔ Frete grátis para todo Brasil<br>✔ Garantia de fábrica",
        pix: "À vista no PIX com desconto especial",
        imagens: [
            "https://i.postimg.cc/SQ96cMhD/OIP-Jl2g-Sfj-Zc-Zy-D6x-TDLc-Xe-EAHa-FB-w-235-h-180-c-7-r-0-o-7-pid-1.webp"
        ],
        especificacoes: {
            "Categoria": "Notebook",
            "Marca": "Samsung",
            "Armazenamento": "SSD",
            "Sistema Operacional": "Windows 11",
            "Garantia": "12 meses"
        }
    },
    {
        id: "acer-nitro-v15",
        nome: "Acer Nitro V15, i5-13420H Gamer",
        imagem: "https://i.postimg.cc/T15CD79v/OIP-KJn-Sz-N8l-RCIfvb-MKa-LL-Bw-Ha-FU-w-232-h-180-c-7-r-0-o-7-pid-1.webp",
        alt: "Acer Nitro V15",
        estrelas: "★★★★☆",
        precoAntigo: "R$ 6.400,00",
        preco: "R$ 4.451,00",
        observacao: "Ótimo custo-benefício.",
        descricao: "Acer Nitro V15 com processador i5-13420H. Notebook gamer com ótimo custo-benefício para jogos, estudos e produtividade.",
        parcelamento: "✔ 12x sem juros no cartão<br>✔ Frete grátis para todo Brasil<br>✔ Garantia de fábrica",
        pix: "À vista no PIX com desconto especial",
        imagens: [
            "https://i.postimg.cc/T15CD79v/OIP-KJn-Sz-N8l-RCIfvb-MKa-LL-Bw-Ha-FU-w-232-h-180-c-7-r-0-o-7-pid-1.webp"
        ],
        especificacoes: {
            "Categoria": "Notebook Gamer",
            "Processador": "Intel i5-13420H",
            "Linha": "Acer Nitro",
            "Sistema Operacional": "Windows 11",
            "Garantia": "12 meses"
        }
    },
    {
        id: "msi-thin-a15",
        nome: "MSI Thin A15, Ryzen, 16GB, SSD 512GB",
        imagem: "https://i.postimg.cc/LXLV4Y4N/OIP-Mcx34ftr-sm-Y5q-Nwdfwy-Yw-Ha-E4-w-270-h-180-c-7-r-0-o-7-pid-1.webp",
        alt: "MSI Thin A15",
        estrelas: "★★★★★",
        precoAntigo: "R$ 5.200,00",
        preco: "R$ 3.450,00",
        observacao: "Bom para jogos variados, botões programáveis.",
        descricao: "MSI Thin A15 com processador Ryzen, 16GB de RAM e SSD de 512GB. Modelo gamer fino, potente e moderno.",
        parcelamento: "✔ 12x sem juros no cartão<br>✔ Frete grátis para todo Brasil<br>✔ Garantia de fábrica",
        pix: "À vista no PIX com desconto especial",
        imagens: [
            "https://i.postimg.cc/LXLV4Y4N/OIP-Mcx34ftr-sm-Y5q-Nwdfwy-Yw-Ha-E4-w-270-h-180-c-7-r-0-o-7-pid-1.webp"
        ],
        especificacoes: {
            "Categoria": "Notebook Gamer",
            "Processador": "Ryzen",
            "Memória RAM": "16GB",
            "Armazenamento": "SSD 512GB",
            "Garantia": "12 meses"
        }
    },
    {
        id: "asus-tuf-gaming-a15",
        nome: "ASUS TUF Gaming A15, Ryzen 7, RTX 3050, Tela 144Hz",
        imagem: "https://i.postimg.cc/85YVGY5v/OIP-ro-Qk-Io-78OPw0529Ki-wg-Ha-Fj-w-252-h-189-c-7-r-0-o-7-pid-1.webp",
        alt: "ASUS TUF Gaming A15",
        estrelas: "★★★★☆",
        precoAntigo: "R$ 4.420,00",
        preco: "R$ 2.900,00 no PIX",
        observacao: "",
        descricao: "ASUS TUF Gaming A15 com Ryzen 7, placa RTX 3050 e tela de 144Hz. Excelente para jogos e produtividade.",
        parcelamento: "✔ 12x sem juros no cartão<br>✔ Frete grátis para todo Brasil<br>✔ Garantia de fábrica",
        pix: "À vista no PIX com desconto especial",
        imagens: [
            "https://i.postimg.cc/85YVGY5v/OIP-ro-Qk-Io-78OPw0529Ki-wg-Ha-Fj-w-252-h-189-c-7-r-0-o-7-pid-1.webp"
        ],
        especificacoes: {
            "Categoria": "Notebook Gamer",
            "Processador": "Ryzen 7",
            "Placa de Vídeo": "RTX 3050",
            "Tela": "144Hz",
            "Garantia": "12 meses"
        }
    },
    {
        id: "lenovo-gaming-rtx",
        nome: "Lenovo Gaming RTX 16GB SSD 512GB",
        imagem: "https://i.postimg.cc/qRV5GdNr/OIP-h-H94El-HVg2I1nohpc-Ksknw-Ha-GZ-w-221-h-191-c-7-r-0-o-7-pid-1.webp",
        alt: "Lenovo Gaming RTX 16GB SSD 512GB",
        estrelas: "★★★★☆",
        precoAntigo: "R$ 6.000,00",
        preco: "R$ 4.340,00 no PIX",
        observacao: "",
        descricao: "Lenovo Gaming com placa RTX, 16GB de RAM e SSD de 512GB. Notebook gamer equilibrado para jogos e tarefas pesadas.",
        parcelamento: "✔ 12x sem juros no cartão<br>✔ Frete grátis para todo Brasil<br>✔ Garantia de fábrica",
        pix: "À vista no PIX com desconto especial",
        imagens: [
            "https://i.postimg.cc/qRV5GdNr/OIP-h-H94El-HVg2I1nohpc-Ksknw-Ha-GZ-w-221-h-191-c-7-r-0-o-7-pid-1.webp"
        ],
        especificacoes: {
            "Categoria": "Notebook Gamer",
            "Marca": "Lenovo",
            "Memória RAM": "16GB",
            "Armazenamento": "SSD 512GB",
            "Placa de Vídeo": "RTX",
            "Garantia": "12 meses"
        }
    },
    {
        id: "acer-predator-helios",
        nome: "Acer Predator Helios, Intel i7, GeForce RTX 4060 Ti 8GB, 16GB DDR4, SSD M.2 480GB",
        imagem: "https://i.postimg.cc/MTHvtgNc/OIP-0BQFi5j-NOyfdm-Top19tei-AHa-E6-w-254-h-185-c-7-r-0-o-7-pid-1.webp",
        alt: "Acer Predator Helios",
        estrelas: "★★★★★",
        precoAntigo: "R$ 7.970,00",
        preco: "R$ 4.188,00 no PIX",
        observacao: "*Inclui: RTX 4060 / 16GB RAM / SSD 1TB / Fonte 650W",
        descricao: "Acer Predator Helios com Intel i7, GeForce RTX 4060 Ti, 16GB DDR4 e SSD M.2. Modelo de alta performance para jogos.",
        parcelamento: "✔ 12x sem juros no cartão<br>✔ Frete grátis para todo Brasil<br>✔ Garantia de fábrica",
        pix: "À vista no PIX com desconto especial",
        imagens: [
            "https://i.postimg.cc/MTHvtgNc/OIP-0BQFi5j-NOyfdm-Top19tei-AHa-E6-w-254-h-185-c-7-r-0-o-7-pid-1.webp"
        ],
        especificacoes: {
            "Categoria": "Notebook Gamer",
            "Processador": "Intel i7",
            "Placa de Vídeo": "GeForce RTX 4060 Ti",
            "Memória RAM": "16GB DDR4",
            "Armazenamento": "SSD M.2",
            "Garantia": "12 meses"
        }
    },
    {
        id: "alienware-16-aurora",
        nome: "Alienware 16 Aurora | RTX 8GB | 32GB RAM | SSD 1TB | Windows 11 Pro | Premium",
        imagem: "https://i.postimg.cc/NFJhDzhV/OIP-mp-A0UY1x-Ws-UAE467Afdu3g-Ha-GJ-w-234-h-194-c-7-r-0-o-7-pid-1.webp",
        alt: "Alienware 16 Aurora",
        estrelas: "★★★★★",
        precoAntigo: "R$ 10.499,00",
        preco: "R$ 8.990,00",
        observacao: "*Inclui: RTX 4070 / 32GB RAM / SSD 2TB",
        descricao: "Alienware 16 Aurora premium com RTX, 32GB RAM, SSD de 1TB e Windows 11 Pro. Produto de alto desempenho.",
        parcelamento: "✔ 12x sem juros no cartão<br>✔ Frete grátis para todo Brasil<br>✔ Garantia de fábrica",
        pix: "À vista no PIX com desconto especial",
        imagens: [
            "https://i.postimg.cc/NFJhDzhV/OIP-mp-A0UY1x-Ws-UAE467Afdu3g-Ha-GJ-w-234-h-194-c-7-r-0-o-7-pid-1.webp"
        ],
        especificacoes: {
            "Categoria": "Notebook Gamer Premium",
            "Memória RAM": "32GB",
            "Armazenamento": "SSD 1TB",
            "Sistema Operacional": "Windows 11 Pro",
            "Garantia": "12 meses"
        }
    },
    {
        id: "lenovo-legion-slim",
        nome: "Lenovo Legion Slim",
        imagem: "https://i.postimg.cc/59h9hXDm/OIP-mj-Uc4CVVBLx3YNY4y-I5i-Nw-Ha-EK-w-251-h-180-c-7-r-0-o-7-pid-1.webp",
        alt: "Lenovo Legion Slim",
        estrelas: "★★★★★",
        precoAntigo: "R$ 8.999,00",
        preco: "R$ 6.450,00",
        observacao: "*Inclui: RTX 4080 / 32GB RAM / Tela 165Hz",
        descricao: "Lenovo Legion Slim. Notebook gamer premium com excelente desempenho, design moderno e tela de alta frequência.",
        parcelamento: "✔ 12x sem juros no cartão<br>✔ Frete grátis para todo Brasil<br>✔ Garantia de fábrica",
        pix: "À vista no PIX com desconto especial",
        imagens: [
            "https://i.postimg.cc/59h9hXDm/OIP-mj-Uc4CVVBLx3YNY4y-I5i-Nw-Ha-EK-w-251-h-180-c-7-r-0-o-7-pid-1.webp"
        ],
        especificacoes: {
            "Categoria": "Notebook Gamer Premium",
            "Placa de Vídeo": "RTX 4080",
            "Memória RAM": "32GB",
            "Tela": "165Hz",
            "Garantia": "12 meses"
        }
    },
    {
        id: "lenovo-loq-ryzen-5",
        nome: "Lenovo LOQ, Ryzen 5, RTX 4050",
        imagem: "https://i.postimg.cc/GpFvD0Gc/OIP-1BF-d-a-X8IH7Y2Ih-Xzk-FQg-Ha-Ha-w-185-h-185-c-7-r-0-o-7-pid-1.webp",
        alt: "Lenovo LOQ Ryzen 5 RTX 4050",
        estrelas: "★★★★☆",
        precoAntigo: "R$ 4.900,00",
        preco: "R$ 2.458,00 no PIX",
        observacao: "Fonte 650W, Tela 165Hz",
        descricao: "Lenovo LOQ com Ryzen 5 e RTX 4050. Opção gamer com bom desempenho e excelente valor no PIX.",
        parcelamento: "✔ 12x sem juros no cartão<br>✔ Frete grátis para todo Brasil<br>✔ Garantia de fábrica",
        pix: "À vista no PIX com desconto especial",
        imagens: [
            "https://i.postimg.cc/GpFvD0Gc/OIP-1BF-d-a-X8IH7Y2Ih-Xzk-FQg-Ha-Ha-w-185-h-185-c-7-r-0-o-7-pid-1.webp"
        ],
        especificacoes: {
            "Categoria": "Notebook Gamer",
            "Processador": "Ryzen 5",
            "Placa de Vídeo": "RTX 4050",
            "Tela": "165Hz",
            "Garantia": "12 meses"
        }
    },
    {
        id: "asus-rog-strix-g16",
        nome: "Asus ROG Strix G16, i9 Gaming Laptop",
        imagem: "https://i.postimg.cc/MHNn4tVd/OIP-aw-Jo-y0NDDx-Jv-MKrs-O5jhg-Ha-FT-w-257-h-184-c-7-r-0-o-7-pid-1.webp",
        alt: "Asus Rog Strix G16",
        estrelas: "★★★★★",
        precoAntigo: "R$ 18.999,00",
        preco: "R$ 12.450,00",
        observacao: "Processador i9, excelente para jogos e produtividade.",
        descricao: "Asus ROG Strix G16 com processador i9. Notebook gamer de alta performance para jogos, produtividade e uso profissional pesado.",
        parcelamento: "✔ 12x sem juros no cartão<br>✔ Frete grátis para todo Brasil<br>✔ Garantia de fábrica",
        pix: "À vista no PIX com desconto especial",
        imagens: [
            "https://i.postimg.cc/MHNn4tVd/OIP-aw-Jo-y0NDDx-Jv-MKrs-O5jhg-Ha-FT-w-257-h-184-c-7-r-0-o-7-pid-1.webp"
        ],
        especificacoes: {
            "Categoria": "Notebook Gamer Premium",
            "Processador": "Intel i9",
            "Linha": "ROG Strix",
            "Sistema Operacional": "Windows 11",
            "Garantia": "12 meses"
        }
    },
    {
        id: "gigabyte-aorus-17",
        nome: "Gigabyte Aorus 17, RTX 4070 Gaming Laptop",
        imagem: "https://i.postimg.cc/3wzJ3WWc/OIP-Ave14IOohs-Fgwy-Ch-Jd-TPt-QHa-E8-w-265-h-180-c-7-r-0-o-7-pid-1.webp",
        alt: "Gigabyte Aorus 17",
        estrelas: "★★★★☆",
        precoAntigo: "R$ 24.999,00",
        preco: "R$ 20.499,00",
        observacao: "RTX 4070, excelente para jogos e produtividade.",
        descricao: "Gigabyte Aorus 17 com RTX 4070. Notebook gamer premium com alto desempenho para jogos, criação de conteúdo e produtividade.",
        parcelamento: "✔ 12x sem juros no cartão<br>✔ Frete grátis para todo Brasil<br>✔ Garantia de fábrica",
        pix: "À vista no PIX com desconto especial",
        imagens: [
            "https://i.postimg.cc/3wzJ3WWc/OIP-Ave14IOohs-Fgwy-Ch-Jd-TPt-QHa-E8-w-265-h-180-c-7-r-0-o-7-pid-1.webp"
        ],
        especificacoes: {
            "Categoria": "Notebook Gamer Premium",
            "Placa de Vídeo": "RTX 4070",
            "Linha": "Aorus",
            "Sistema Operacional": "Windows 11",
            "Garantia": "12 meses"
        }
    }
];

function buscarProdutoPorId(id) {
    return produtos.find(function (produto) {
        return produto.id === id;
    });
}

function abrirPaginaProduto(id) {
    window.location.href = "produtodetalhe.html?id=" + encodeURIComponent(id);
}

function criarCardProduto(produto) {
    return `
        <div class="produto-loja">
            <img src="${produto.imagem}" alt="${produto.alt}">

            <div class="info">
                <h2>${produto.nome}</h2>

                <div class="estrelas">
                    ${produto.estrelas}
                </div>

                <p class="preco-antigo">
                    de ${produto.precoAntigo}
                </p>

                <p class="preco">
                    Por ${produto.preco}
                </p>

                <button class="btn-comprar" onclick="abrirPaginaProduto('${produto.id}')">
                    Comprar
                </button>

                ${
                    produto.observacao
                        ? `<p style="font-size:12px; color:#aaa; margin-top:8px;">${produto.observacao}</p>`
                        : ""
                }
            </div>
        </div>
    `;
}

function renderizarProdutos() {
    const areaProdutos = document.getElementById("listaProdutos");

    if (!areaProdutos) {
        return;
    }

    areaProdutos.innerHTML = produtos
        .map(function (produto) {
            return criarCardProduto(produto);
        })
        .join("");
}

let imagemAtual = 0;
let imagensProduto = [];

function atualizarImagem() {
    const imagemPrincipal = document.getElementById("imagemPrincipal");

    if (!imagemPrincipal || imagensProduto.length === 0) {
        return;
    }

    imagemPrincipal.src = imagensProduto[imagemAtual];
}

function proximaImagem() {
    imagemAtual++;

    if (imagemAtual >= imagensProduto.length) {
        imagemAtual = 0;
    }

    atualizarImagem();
}

function imagemAnterior() {
    imagemAtual--;

    if (imagemAtual < 0) {
        imagemAtual = imagensProduto.length - 1;
    }

    atualizarImagem();
}

function selecionarImagem(index) {
    imagemAtual = index;
    atualizarImagem();
}

function criarItemEspecificacao(nome, valor) {
    return `
        <div class="item-spec">
            <span class="nome-spec">${nome}</span>
            <span class="valor-spec">${valor}</span>
        </div>
    `;
}

function carregarProdutoDetalhe() {
    const params = new URLSearchParams(window.location.search);
    const idProduto = params.get("id");

    const produto = buscarProdutoPorId(idProduto) || produtos[0];

    imagensProduto = produto.imagens && produto.imagens.length > 0
        ? produto.imagens
        : [produto.imagem];

    imagemAtual = 0;

    document.title = "HexaCore - " + produto.nome;

    const container = document.getElementById("produtoDetalhe");

    if (!container) {
        return;
    }

    container.innerHTML = `
        <div class="galeria">
            <div class="container-imagem">
                <button class="seta esquerda" onclick="imagemAnterior()">❮</button>

                <img
                    src="${imagensProduto[0]}"
                    class="imagem-principal"
                    id="imagemPrincipal"
                    alt="${produto.alt}"
                >

                <button class="seta direita" onclick="proximaImagem()">❯</button>
            </div>

            <div class="miniaturas">
                ${
                    imagensProduto
                        .map(function (imagem, index) {
                            return `
                                <img
                                    src="${imagem}"
                                    alt="Imagem ${index + 1} - ${produto.nome}"
                                    onclick="selecionarImagem(${index})"
                                >
                            `;
                        })
                        .join("")
                }
            </div>
        </div>

        <div class="info-produto">
            <h1 class="titulo">${produto.nome}</h1>

            <div class="avaliacao">
                ${produto.estrelas} (57 avaliações)
            </div>

            <div class="preco-antigo">
                ${produto.precoAntigo}
            </div>

            <div class="preco">
                ${produto.preco}
            </div>

            <div class="pix">
                ${produto.pix}
            </div>

            <div class="parcelamento">
                ${produto.parcelamento}
            </div>

            <button class="botao-comprar">
                COMPRAR AGORA
            </button>

            <button class="botao-carrinho">
                ADICIONAR AO CARRINHO
            </button>
        </div>

        <div class="descricao">
            <h2>Descrição do Produto</h2>

            <p>${produto.descricao}</p>

            <div class="especificacoes">
                ${
                    Object.entries(produto.especificacoes)
                        .map(function ([nome, valor]) {
                            return criarItemEspecificacao(nome, valor);
                        })
                        .join("")
                }
            </div>
        </div>
    `;
}