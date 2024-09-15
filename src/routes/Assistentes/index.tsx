import Header from "../../components/Header/Header";
import MenuList from "../../components/Globais/MenuList";
import Avatar from "../../components/Globais/Avatar";
import Input from "../../components/Globais/Input";
import Chat from "../../components/Assistentes/ChatActive";
import './index.css'
import InfoBot from "../../components/Assistentes/Infobot";
import MessageSelf from "../../components/Assistentes/MessageSelf";
import MessageOther from "../../components/Assistentes/MessageOther";

function Assistentes(){

    document.title = "Lele's Repairs - Assistentes";
    
    return (
      <Header>
        <nav className="h-[900px] px-6 pt-6 pb-8 bg-color_2 rounded-[30px] border-2 border-color_6 flex-col justify-between items-start inline-flex">
          <div className="self-stretch h-[402px] flex-col justify-start items-start gap-[52px] flex">
            <Avatar src={'/avatar.png'} name={'Pedro Henrique Vasco Antonieti'} email={'rm556253@fiap.com.br'}/>
            <div className="h-[300px] flex-col justify-start items-start gap-6 inline-flex">
              <MenuList icon={'bg-icon-robot'} select={true} to={'/assistentes'} value="Assistentes"/>
              <MenuList icon={'bg-icon-car'} select={false} to={'/meus-carros'} value="Meus Carros"/>
              <MenuList icon={'bg-icon-conhecimento'} select={false} to={'/conhecimentos'} value="Conhecimentos"/>
              <MenuList icon={'bg-icon-info'} select={false} to={'/sobre'} value="Sobre"/>
            </div>
          </div>
          <div className="self-stretch h-14 flex-col justify-start items-start gap-2 flex">
            <MenuList icon={'bg-icon-logout'} select={false} to={'/sair'} value="Sair"/>
          </div>
        </nav>
        <main className="w-[1084px] h-[900px] bg-color_2 rounded-[30px] border-2 border-color_6 flex flex-row pt-6 pb-6 px-6 gap-[25px]">
          <section className="relative flex-col justify-center items-start inline-flex gap-[25px]">
            <div className="w-[340px] justify-center items-center inline-flex">
              <h1 className="pt-8 px-20 text-center text-color_11 text-[32px] font-bold leading-10">Assistentes</h1>
            </div>
            <form className="flex-col justify-center items-start gap-2.5 inline-flex">
              <Input icon="bg-icon-search" classname={'w-[340px] h-14 p-4 pl-12 font-normal text-sm box-border rounded-2xl border-2 border-color_7 bg-color_3 focus:outline-color_9 drop-shadow-row placeholder-color_9 text-color_9'} type="text" placeholder="Buscar..." name={"txtBuscar"} id={'buscar'} required={false}/>
            </form>
            <div className="w-[340px] h-[670px] bg-white rounded-2xl border-2 border-neutral-200 flex p-3 flex-col gap-5 overflow-x-hidden shadow-bg_gray">
              <Chat name={"Diogo Albuquerque"} categoria={"Óleo do Motor"} last_message={"Ótimo. Com base nas informações passadas por você, consegui identificar que seu carro pode estar com o óleo do motor vencido. A vibração que você sente acontece por atrito entre os pistões, anéis aumentam considerávelmente."} last_message_date={"15h atrás"} avatar={"/bot-1.svg"}/>
              <Chat name={"Alexandre Castilho"} categoria={"Fluído de Freio"} last_message={"Última menssagem"} last_message_date={"10h atrás"} avatar={"/bot-2.svg"}/>
              <Chat name={"Rose David"} categoria={"Rodas e Pneus"} last_message={"Última menssagem"} last_message_date={"10h atrás"} avatar={"/bot-8.svg"}/>
              <Chat name={"Teófilo"} categoria={"Pastilhas"} last_message={"Última menssagem"} last_message_date={"10h atrás"} avatar={"/bot-4.svg"}/>
              <Chat name={"Ayxa Sam"} categoria={"Filtro de Ar"} last_message={"Última menssagem"} last_message_date={"10h atrás"} avatar={"/bot-9.svg"}/>
              <Chat name={"Samira Alencar"} categoria={"Bateria"} last_message={"Última menssagem"} last_message_date={"10h atrás"} avatar={"/bot-7.svg"}/>
              <Chat name={"Caio Vinícius"} categoria={"Vela de Ingnição"} last_message={"Última menssagem"} last_message_date={"10h atrás"} avatar={"/bot-6.svg"}/>
              <Chat name={"Victor Miranda"} categoria={"Correira Dentada"} last_message={"Última menssagem"} last_message_date={"10h atrás"} avatar={"/bot-3.svg"}/>
              <Chat name={"Vinícius Silva"} categoria={"Filtro do Combustível"} last_message={"Última menssagem"} last_message_date={"10h atrás"} avatar={"/bot-5.svg"}/>
              <Chat name={"José Almeida"} categoria={"Água do Radiador"} last_message={"Última menssagem"} last_message_date={"10h atrás"} avatar={"/bot-10.svg"}/>
            </div>
          </section>
          <section className="w-[667px] h-[848px] flex-col items-start gap-[25px] inline-flex">
            <div className="w-[667px] h-[152px] flex-col justify-center items-center flex bg-white rounded-2xl border-2 border-neutral-200 shadow-bg_gray">
              <InfoBot name={"Diogo Albuquerque"} categoria={"Óleo do Motor"} avatar={"/bot-1.svg"} tags={['Óleo', 'Motor', 'Vazamento']}/>
            </div>
            <div className="w-[667px] h-[671px] flex-col justify-start items-start flex bg-white rounded-2xl border-2 border-neutral-200 shadow-bg_gray p-5 gap-5">
              <div className="w-[623px] flex flex-grow flex-col shrink basis-0 justify-start items-start gap-5 overflow-x-hidden">
                <MessageSelf menssagem={"Olá, meu carro está com problema, me ajuda!!! 😔"} tempo={"17h atrás"} avatar={"/avatar.png"}/>
                <MessageOther menssagem={"Olá Pedro, fique tranquilo, irei te dar um diagnóstico, mas para isso preciso de algumas informações."} tempo={"16h atrás"} avatar={"/bot-1.svg"}/>       
                <MessageSelf menssagem={"Pelo que reparei ele vibra muito quando meu câmbio está no ponto morto."} tempo={"16h atrás"} avatar={"/avatar.png"}/>
                <MessageOther menssagem={"Certo, no painel do seu carro aparece alguma luz acessa?"} tempo={"16h atrás"} avatar={"/bot-1.svg"}/> 
                <MessageSelf menssagem={"Tem uma luz com um simbolo de óleo."} tempo={"15h atrás"} avatar={"/avatar.png"}/>
                <MessageOther menssagem={"Ótimo. Com base nas informações passadas por você, consegui identificar que seu carro pode estar com o óleo do motor vencido. A vibração que você sente acontece por atrito entre os pistões, anéis aumentam considerávelmente."} tempo={"15h atrás"} avatar={"/bot-1.svg"}/> 
              </div>
              <form className="flex-col justify-center items-start gap-2.5 inline-flex">
                <Input classname={'w-[623px] h-14 p-4 pl-5 font-normal text-sm box-border rounded-2xl border-2 border-color_7 bg-color_3 focus:outline-color_9 drop-shadow-row placeholder-color_9 text-color_9'} type="text" placeholder="Digite aqui sua mensagem..." name={"txtMenssagem"} id={'menssagem'} required={false}/>
              </form>
            </div>
          </section>
        </main>
      </Header>
    );
}

export default Assistentes;