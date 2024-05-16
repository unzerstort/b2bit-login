import Button from "../Components/button";
import Card from "../Components/card";
import NavBar from "../Components/navbar";

export default function Profile() {
    return (
        <div className="flex-1 flex flex-col overflow-hidden">
            <NavBar></NavBar>
            
            <div className="flex-1 overflow-auto p-4 min-h-screen profile-background--color">
                
            </div>
        </div>
    );
}