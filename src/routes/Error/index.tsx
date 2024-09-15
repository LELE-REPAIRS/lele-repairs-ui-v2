import { Link } from "react-router-dom";
import Logo from "../../components/Globais/Logo";
import Header from "../../components/Header/Header";

function Error(){

    document.title = "Lele's Repairs - Erro";
    
    return (
      <Header>
        <main className="flex flex-row justify-center items-center drop-shadow-row">
        <section className="w-[328px] h-full rounded-[30px] border-[2px] border-color_6 bg-color_2">
          <div className="w-full h-full inline-flex flex-col items-center p-4 gap-4">
            <Logo/>
            <div className="w-72 h-full flex flex-col items-center gap-4">
              <h1 className="font-normal leading-normal text-color_9 text-2xl">Ops!</h1>
              <p className="font-normal leading-normal text-color_8 text-lg text-center">Infelizmente a página que você tentou acessar não existe.</p>
              <Link className="flex items-center justify-center gap-2.5 h-11 px-11 rounded-full border-2 border-color_6 bg-color_3 shadow-button font-semibold text-color_11 cursor-pointer hover:bg-color_4" to={"/Assistentes"}>Voltar à página inicial</Link>
            </div>
          </div>
        </section>
        </main>
      </Header>
    );
}

export default Error;