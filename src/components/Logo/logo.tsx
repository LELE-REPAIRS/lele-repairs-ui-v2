import LogoPorto from '../../../public/logo.svg';

export default function Logo(){
    return(
        <picture className="w-[238px] h-[63px] bg-cover bg-no-repeat">
            <img src={LogoPorto} alt='Logomarca da Porto Seguro'></img>
        </picture>
    );
}