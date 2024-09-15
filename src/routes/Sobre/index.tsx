import Avatar from "../../components/Globais/Avatar";
import MenuList from "../../components/Globais/MenuList";
import Header from "../../components/Header/Header";

function Sobre(){

    document.title = "Lele's Repairs -  Sobre";
    
    return (
      <Header>
        <nav className="h-[900px] px-6 pt-6 pb-8 bg-color_2 rounded-[30px] border-2 border-color_6 flex-col justify-between items-start inline-flex">
          <div className="self-stretch h-[402px] flex-col justify-start items-start gap-[52px] flex">
            <Avatar src={'/user-logged.png'} name={'Pedro Henrique Vasco Antonieti'} email={'rm556253@fiap.com.br'}/>
            <div className="h-[300px] flex-col justify-start items-start gap-6 inline-flex">
              <MenuList icon={'bg-icon-robot'} select={false} to={'/assistentes'} value="Assistentes"/>
              <MenuList icon={'bg-icon-car'} select={false} to={'/meus-carros'} value="Meus Carros"/>
              <MenuList icon={'bg-icon-conhecimento'} select={false} to={'/conhecimentos'} value="Conhecimentos"/>
              <MenuList icon={'bg-icon-info'} select={true} to={'/sobre'} value="Sobre"/>
            </div>
          </div>
          <div className="self-stretch h-14 flex-col justify-start items-start gap-2 flex">
            <MenuList icon={'bg-icon-logout'} select={false} to={'/'} value="Sair"/>
          </div>
        </nav>
        <main className="w-[1084px] h-[900px] bg-color_2 rounded-[30px] border-2 border-color_6 flex flex-row pt-6 pb-6 px-6 gap-[25px]">
          <div className="relative flex-col justify-center items-start inline-flex gap-[25px]">
            <div className="w-[1032px] justify-center items-center inline-flex">
              <h1 className="pt-8 px-20 text-center text-color_11 text-[32px] font-bold leading-10">Sobre</h1>
            </div>
            <div className="w-[1032px] h-[751px] flex p-5 flex-col justify-center bg-white rounded-2xl border-2 border-neutral-200 shadow-bg_gray gap-5">
              <div className="self-stretch justify-start items-center gap-3 inline-flex">
                <img className="w-[200px] h-[200px] rounded-full" src="/contribuinte-andre.png"/>
                    <div className="w-auto bg-color_3 rounded-[30px] border-l-[5px] border-color_7 p-[15px_15px_15px]">
                        <div className="relative text-left text-color_11 text-[25px] font-bold">André Rogério Vieira Pavanela Altobelli Antunes</div>
                        <div className="w-[235px] text-color_11 text-[20px] font-normal text-justify">RM: 554764</div>
                        <div className="h-8 justify-start items-center inline-flex">
                          <a href="https://www.linkedin.com/in/andr%C3%A9-altobelli-antunes-99377425b/" target="_blank" className="w-8 h-8 relative bg-icon-linkedin bg-center"/>
                          <a href="https://www.instagram.com/_andre.rogerio/" target="_blank" className="w-8 h-8 relative bg-icon-instagram bg-center"/>
                          <a href="https://github.com/andrealtobelli" target="_blank" className="w-8 h-8 relative bg-icon-github bg-center"/>
                        </div>
                    </div>
              </div>
              <div className="self-stretch justify-start items-center gap-3 inline-flex">
                <img className="w-[200px] h-[200px] rounded-full" src="/contribuinte-leticia.png"/>
                    <div className="w-auto bg-color_3 rounded-[30px] border-l-[5px] border-color_7 p-[15px_15px_15px]">
                        <div className="relative text-left text-color_11 text-[25px] font-bold">Leticia Cristina dos Santos Passos</div>
                        <div className="w-[235px] text-color_11 text-[20px] font-normal text-justify">RM: 555241</div>
                        <div className="h-8 justify-start items-center inline-flex">
                          <a href="https://www.linkedin.com/in/leticia-cristina-dos-santos-passos-a1a988233/" target="_blank" className="w-8 h-8 relative bg-icon-linkedin bg-center"/>
                          <a href="https://www.instagram.com/passos_ley/" target="_blank" className="w-8 h-8 relative bg-icon-instagram bg-center"/>
                          <a href="https://github.com/lecristina" target="_blank" className="w-8 h-8 relative bg-icon-github bg-center"/>
                        </div>
                    </div>
              </div>
              <div className="self-stretch justify-start items-center gap-3 inline-flex">
                <img className="w-[200px] h-[200px] rounded-full" src="/contribuinte-pedro.png"/>
                    <div className="w-auto bg-color_3 rounded-[30px] border-l-[5px] border-color_7 p-[15px_15px_15px]">
                        <div className="relative text-left text-color_11 text-[25px] font-bold">Pedro Henrique Vasco Antonieti</div>
                        <div className="w-[235px] text-color_11 text-[20px] font-normal text-justify">RM: 556253</div>
                        <div className="h-8 justify-start items-center inline-flex">
                          <a href="https://www.linkedin.com/in/pedrohenriquev/" target="_blank" className="w-8 h-8 relative bg-icon-linkedin bg-center"/>
                          <a href="https://www.instagram.com/vascoantonieti/" target="_blank" className="w-8 h-8 relative bg-icon-instagram bg-center"/>
                          <a href="https://github.com/P3terHenry" target="_blank" className="w-8 h-8 relative bg-icon-github bg-center"/>
                        </div>
                    </div>
                    
              </div>
            </div>
          </div>
        </main>
      </Header>
    );
}

export default Sobre;