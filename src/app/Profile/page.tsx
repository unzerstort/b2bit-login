"use client"

import Card from "../Components/card";
import Input from "../Components/input";
import NavBar from "../Components/navbar";
import Image from "next/image";
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";

export default function Profile() {
    const [userData, setUserData] = useState({ name: '', email: '', profilePicture: '' });
    const router = useRouter();

    useEffect(() => {
        const token = window.localStorage.getItem('authToken');
        if (token) {
            const storedUserData = JSON.parse(token);

            // Atualiza o estado com os dados do usuário
            setUserData({
                name: storedUserData.user.name || '',
                email: storedUserData.user.email || '',
                profilePicture: storedUserData.user.avatar.high || ''
            });
        }
    }, []);

    // const handleLogout = () => {

    //     window.localStorage.clear();        
    //     router.push('/SignIn');
    // };

    return (
        <div className="flex-1 flex flex-col overflow-hidden">
            {/* <NavBar onLogout={() => {

window.localStorage.clear();        
router.push('/SignIn');
}}></NavBar> */}
            
            <div className="flex flex-col items-center min-h-screen profile-background--color">
                <Card 
                    title="Profile picture"
                    image={
                        <Image alt="User picture" src={userData.profilePicture} width={200} height={200}/>
                    }
                    content={
                        <div>
                            <Input
                                label="Your Name"
                                type="text"
                                id="name"
                                htmlFor="name"
                                name="name"
                                value={userData.name}
                                readOnly={true}
                            />
                            <Input
                                label="Your E-mail"
                                type="email"
                                id="email"
                                htmlFor="email"
                                name="email"
                                value={userData.email}
                                readOnly={true}
                            />
                        </div>
                    }
                />
            </div>
        </div>
    );
}