type HeaderProps = {
    children: React.ReactNode
}


function Header({children}: HeaderProps) {
    return (
        <header className="w-screen h-screen flex flex-row justify-center items-center">
             {children}
        </header>
    );
}

export default Header;