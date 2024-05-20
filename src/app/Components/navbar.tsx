import Button from "./button";

interface NavBarProps {
    onLogout?: () => void;
}

export default function NavBar({ onLogout } : NavBarProps) {
    return (
        <header className="lg:px-16 px-4 bg-white flex flex-wrap justify-end py-4">
            <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
                <svg className="fill-current text-gray-900"
                    xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <title>menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </label>

            <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
                <nav className="w-64">
                    <Button type={'button'} label={'Logout'} onClick={onLogout}></Button>
                </nav>
            </div>
        </header>
    );
}