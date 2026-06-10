import ProdutoLista from "./componentes/ProdutoLista";
const produtos = [
    {
        id:1,
        imagem:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAETCAMAAABDSmfhAAAAA1BMVEX9zdt1M38GAAAASElEQVR4nO3BgQAAAADDoPlT3+AEVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8A8WoAAHxScUAAAAAAElFTkSuQmCC",
        nome:"Modelo Camisa polo", 
        preco:"50,00"
    },
    {
        id:2,
        imagem:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAETCAMAAABDSmfhAAAAA1BMVEX9zdt1M38GAAAASElEQVR4nO3BgQAAAADDoPlT3+AEVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8A8WoAAHxScUAAAAAAElFTkSuQmCC",
        nome:"Modelo Bone", 
        preco:"50,00"
    },
    {
        id:3,
        imagem:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAETCAMAAABDSmfhAAAAA1BMVEX9zdt1M38GAAAASElEQVR4nO3BgQAAAADDoPlT3+AEVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8A8WoAAHxScUAAAAAAElFTkSuQmCC",
        nome:"Modelo Camisa polo", 
        preco:"50,00"
    },
    {
        id:4,
        imagem:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAETCAMAAABDSmfhAAAAA1BMVEX9zdt1M38GAAAASElEQVR4nO3BgQAAAADDoPlT3+AEVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8A8WoAAHxScUAAAAAAElFTkSuQmCC",
        nome:"Modelo Camisa dry fit", 
        preco:"50,00"
    },
    {
        id:5,
        imagem:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAETCAMAAABDSmfhAAAAA1BMVEX9zdt1M38GAAAASElEQVR4nO3BgQAAAADDoPlT3+AEVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8A8WoAAHxScUAAAAAAElFTkSuQmCC",
        nome:"Modelo Jaqueta", 
        preco:"50,00"
    },
    {
        id:6,
        imagem:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAETCAMAAABDSmfhAAAAA1BMVEX9zdt1M38GAAAASElEQVR4nO3BgQAAAADDoPlT3+AEVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8A8WoAAHxScUAAAAAAElFTkSuQmCC",
        nome:"Modelo Colete", 
        preco:"50,00"
    },
    {
        id:7,
        imagem:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAETCAMAAABDSmfhAAAAA1BMVEX9zdt1M38GAAAASElEQVR4nO3BgQAAAADDoPlT3+AEVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8A8WoAAHxScUAAAAAAElFTkSuQmCC",
        nome:"Modelo Avental", 
        preco:"50,00"
    },
    {
        id:8,
        imagem:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAETCAMAAABDSmfhAAAAA1BMVEX9zdt1M38GAAAASElEQVR4nO3BgQAAAADDoPlT3+AEVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8A8WoAAHxScUAAAAAAElFTkSuQmCC",
        nome:"Modelo Macacão", 
        preco:"50,00"
    }
];
function App() {
    return (
    <div>
      <main className="pagina-princ">
        <h2 className="titulo-pagiPrinc">Nossos Modelos</h2>
        <ProdutoLista produtos={produtos}/>
      </main>
    </div>
    );
  }
  
  export default App;