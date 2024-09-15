import Header from "../../components/Header/Header";
import MenuList from "../../components/Globais/MenuList";
import Avatar from "../../components/Globais/Avatar";
import Input from "../../components/Globais/Input";
import Car from "../../components/MeusCarros/Car";
import InfoCar from "../../components/MeusCarros/InfoCar";

function MeusCarros(){

    document.title = "Lele's Repairs - Meus Carros";
    
    return (
      <Header>
        <nav className="h-[900px] px-6 pt-6 pb-8 bg-color_2 rounded-[30px] border-2 border-color_6 flex-col justify-between items-start inline-flex">
          <div className="self-stretch h-[402px] flex-col justify-start items-start gap-[52px] flex">
            <Avatar src={'/avatar.png'} name={'Pedro Henrique Vasco Antonieti'} email={'rm556253@fiap.com.br'}/>
            <div className="h-[300px] flex-col justify-start items-start gap-6 inline-flex">
              <MenuList icon={'bg-icon-robot'} select={false} to={'/assistentes'} value="Assistentes"/>
              <MenuList icon={'bg-icon-car'} select={true} to={'/meus-carros'} value="Meus Carros"/>
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
              <h1 className="pt-8 px-20 text-center text-color_11 text-[29px] font-bold leading-10">Meus Carros</h1>
            </div>
            <form className="flex-col justify-center items-start gap-2.5 inline-flex">
              <Input icon="bg-icon-search" classname={'w-[340px] h-14 p-4 pl-12 font-normal text-sm box-border rounded-2xl border-2 border-color_7 bg-color_3 focus:outline-color_9 drop-shadow-row placeholder-color_9 text-color_9'} type="text" placeholder="Buscar..." name={"txtBuscar"} id={'buscar'} required={false}/>
            </form>
            <div className="w-[340px] h-[670px] bg-white rounded-2xl border-2 border-neutral-200 flex p-3 flex-col gap-5 overflow-x-hidden shadow-bg_gray">
              <Car apelido={"Carro 1"} marca={"Chevrolet"} modelo={"Onix"} ano={2018} img_car={"/car_chevrolet.svg"} km={100}/>
              <Car apelido={"Carro 2"} marca={"Fiat"} modelo={"Mobi"} ano={2019} img_car={"/car_fiat.svg"} km={10}/>
              <Car apelido={"Carro 3"} marca={"Toyota"} modelo={"Etios"} ano={2020} img_car={"/car_toyota.svg"} km={23}/>
              <Car apelido={"Carro 4"} marca={"BMW"} modelo={"iX1"} ano={2021} img_car={"/car_BMW.svg"} km={123}/>
              <Car apelido={"Carro 5"} marca={"Lamborghini"} modelo={"Aventador"} ano={2022} img_car={"/car_lamborghini.svg"} km={234}/>
              <Car apelido={"Carro 6"} marca={"Ferrari"} modelo={"F430"} ano={20223} img_car={"/car_ferrari.svg"} km={43}/>
              <Car apelido={"Carro 7"} marca={"Rolls Royce"} modelo={"Cullinan"} ano={2024} img_car={"/car_rollsroyce.svg"} km={1}/>
              <Car apelido={"Carro 8"} marca={"Land Rover"} modelo={"Range Rover"} ano={2024} img_car={"/car_landrover.svg"} km={100}/>
              <Car apelido={"Carro 9"} marca={"Tesla"} modelo={"Model 3"} ano={2017} img_car={"/car_tesla.svg"} km={100}/>
              <Car apelido={"Carro 10"} marca={"Ford"} modelo={"RANGER"} ano={2024} img_car={"/car_ford.svg"} km={100}/>
              <button className="w-[310px] h-[41.67px] justify-center items-center gap-2.5 inline-flex" type="submit">
                <img src="./icon_plus.svg"></img>
                <h1 className="flex-col justify-start items-start inline-flex text-[#0077ca] text-[15px] font-bold">Cadastrar novo veículo</h1>
              </button>
            </div>
          </section>
          <section className="w-[667px] h-[848px] flex-col items-start gap-[25px] inline-flex">
            <div className="w-[667px] h-[152px] flex-col justify-center items-center flex bg-white rounded-2xl border-2 border-neutral-200 shadow-bg_gray">
              <InfoCar apelido={"Carro 1"} marca={"Chevrolet"} modelo={"Onix"} ano={2018} img_car={"/car_chevrolet.svg"} km={100}/>
            </div>
            <div className="w-[667px] h-[671px] flex-col justify-start items-start flex bg-white rounded-2xl border-2 border-neutral-200 shadow-bg_gray">
            </div>
          </section>
        </main>
      </Header>
    );
}

export default MeusCarros;