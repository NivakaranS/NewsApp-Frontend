'use client'
import Navigation from "./components/Navigation";
import Summary from "./components/Summary";
import CategorySummary1 from  "./components/CategorySummary"
import CategorySummary2 from "./components/CategorySummary2"
import Opinion from "./components/Opinion"
import Footer from "./components/Footer"
import { useState } from "react";


export default function Home() {
  const [search, setSearch] = useState(false);
  return (
    <div >
      <Navigation />
      <Summary/>
      <CategorySummary1/>
      <CategorySummary2/>
      <Opinion/>
      <Footer/>
    </div>
  );
}
