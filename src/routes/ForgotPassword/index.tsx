import { Link } from "react-router-dom";
import Checkmark from "../../components/Globais/Checkmark";
import Input from "../../components/Globais/Input";
import Logo from "../../components/Globais/Logo";
import Header from "../../components/Header/Header";

function ForgotPassword(){
    
    document.title = "Lele's Repairs - Esqueci a Senha ";
    
    return (
        <Header>
            <main className="flex flex-row justify-center items-center drop-shadow-row">
                <section className="w-[328px] h-full rounded-[30px] border-[2px] border-color_6 bg-color_2">
                    <div className="w-full h-full inline-flex flex-col items-center p-4 gap-4">
                        <Logo/>
                        <div className="w-72 h-full flex flex-col items-center gap-4">
                            <p className="font-normal leading-normal text-color_8 text-sm text-justify">Para recuperar a sua senha, informe seu endereço de e-mail que nós exibiremos a sua senha cadastrada!</p>
                            <form className="w-72h-full flex flex-col items-center gap-3" action="/forgot-password" method="get">
                                <Input icon="bg-icon-email" classname={'w-72 h-12 p-3 pl-10 font-normal text-sm box-border rounded-full border-2 border-color_7 bg-color_3 focus:outline-color_9 drop-shadow-row placeholder-color_9 text-color_9'} type="text" placeholder="E-mail" name={"txtEmail"} id={'email'} required={true}/>
                                <Checkmark name={'forgot-password'} id={'forgot-password'} required={true} value={'Aceito os Termos & Condições'}/>
                                <button className="flex items-center justify-center gap-2.5 h-11 px-11 rounded-full border-2 border-color_6 bg-color_3 shadow-button font-semibold text-color_11 cursor-pointer hover:bg-color_4" id="button-submit" type="submit">Enviar</button>
                            </form>
                            <Link className="font-normal leading-normal text-xs underline text-color_9" to="/">Voltar {'>'}</Link>
                        </div>
                    </div>
                </section>
            </main>
        </Header>
    );
}

export default ForgotPassword;