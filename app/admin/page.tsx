'use client'

import Navigation from "./components/Navigation";
import TopNavigation from "./components/TopNavigation";
import Rooms from "./pages/Rooms"; // Fixed import

import { useState } from "react";
import Restuarant from "./pages/Restuarant";
import Dashboard from "./pages/Home";
import Guests from "./pages/Guests";
import Reservations from "./pages/Reservations";
import Settings from "./pages/Settings";
import Message from "./pages/Message";
import Parking from "./pages/Parking"

export default function Home() {
  const [navClick, setNavClick] = useState("User Management");

  const handleNavClick = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    setNavClick((e.target as HTMLElement).innerText);
    
  };

  return (
    <div className="flex flex-row overflow-hidden">
      <Navigation navClick={navClick} handleNavClick={handleNavClick} />
      <div className="w-[83vw] h-[100vh]">
        <TopNavigation />
        {navClick === "Rooms" ? 
        <Rooms /> : (
        navClick === "Restuarant" ?
        <Restuarant /> 
        : ( 
          navClick === "Dashboard" ? 
          <Dashboard/> : (
            navClick === "Articles Management" ?
            <Guests/> : (
              navClick === "Media Library" ?
              <Reservations/> : (
                navClick === "Settings" ?
                <Settings/>
                : (
                  navClick === "Analytics & Reports" ?
                  <Message/> : (
                    navClick === "User Management" ?
                    <Parking/> : (
                      navClick === "News Organization" ?
                      <Rooms/> : (
                        <div>Home Content</div>
                    ))
                     
                  
                  )
                  
                )
              )
              
            )
            
          )
          

        )
          
      )
        }
      </div>
      
    </div>
  );
}
