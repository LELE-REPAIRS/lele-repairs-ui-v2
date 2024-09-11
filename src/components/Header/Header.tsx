type HeaderProps = {
    children: React.ReactNode
}


function Header({children}: HeaderProps) {
    return (
        <header className="w-screen h-screen flex flex-row justify-center items-center">
            <div className="flex flex-row justify-center items-center drop-shadow-row gap-5">
                {children}
            </div>
        </header>
    );
}

export default Header;