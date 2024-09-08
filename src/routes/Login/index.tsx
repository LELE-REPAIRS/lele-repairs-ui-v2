import { Link } from "react-router-dom";
import Input from "../../components/Globais/Input";
import Logo from "../../components/Globais/Logo";
import Checkmark from "../../components/Globais/Checkmark";

function Login(){

    document.title = "Lele's Repairs - Login";
    
    return (
      <div className="w-screen h-screen flex flex-row justify-center items-center">
        <main className="flex flex-row justify-center items-center drop-shadow-row">
          <section className="w-[328px] h-full rounded-[30px] border-[2px] border-color_6 bg-color_2">
            <div className="w-full h-full inline-flex flex-col items-center p-4 gap-4">
              <Logo/>
              <div className="w-72 h-full flex flex-col items-center gap-4">
                <form className="w-72h-full flex flex-col items-center gap-3" action="/assistentes" method="get">
                  <Input icon="bg-icon-email" classname={'w-72 h-12 p-3 pl-10 font-normal text-sm box-border rounded-full border-2 border-color_7 bg-color_3 focus:outline-color_9 drop-shadow-row placeholder-color_9 text-color_9'} type="email" placeholder="E-mail" name={"txtEmail"} id={'email'} required={true}/>
                  <Input icon="bg-icon-password" classname={'w-72 h-12 p-3 pl-10 font-normal text-sm box-border rounded-full border-2 border-color_7 bg-color_3 focus:outline-color_9 drop-shadow-row placeholder-color_9 text-color_9'} type="password" placeholder="Senha" name={"txtSenha"} id={'senha'} minlength={8} maxlength={16} required={true}/>
                  <Checkmark name={'forgot-password'} id={'forgot-password'} required={false} value={'Lembrar senha'}/>
                  <button className="flex items-center justify-center gap-2.5 h-11 px-11 rounded-full border-2 border-color_6 bg-color_3 shadow-button font-semibold text-color_11 cursor-pointer hover:bg-color_4" id="button-submit" type="submit">Entrar</button>
                  <Link className="font-normal leading-normal text-xs underline text-color_9" to="/forgot-password">Esqueci a senha?</Link>
                  <Link className="font-normal leading-normal text-xs underline text-color_9" to="/cadastro">Primeiro acesso?</Link>
                  <div className="h-8 justify-start items-center inline-flex">
                    <div className="w-8 h-8 relative bg-icon-facebook bg-center"/>
                    <div className="w-8 h-8 relative bg-icon-instagram bg-center"/>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
}

export default Login;