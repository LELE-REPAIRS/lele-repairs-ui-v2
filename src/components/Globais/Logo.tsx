import LogoPorto from '/logo.svg';

export default function Logo(){
    return(
        <picture className="bg-cover bg-no-repeat">
            <img src={LogoPorto} alt='Logomarca da Porto Seguro'></img>
        </picture>
    );
}