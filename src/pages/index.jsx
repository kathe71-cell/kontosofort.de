import Layout from "./Layout.jsx";

import Datenschutz from "./Datenschutz";

import Home from "./Home";

import Impressum from "./Impressum";

import Tarifrechner from "./Tarifrechner";
import KontoOhneGehaltseingang from "./KontoOhneGehaltseingang";
import TagesgeldZinsenVergleich from "./TagesgeldZinsenVergleich";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Datenschutz: Datenschutz,
    
    Home: Home,
    
    Impressum: Impressum,
    
    Tarifrechner: Tarifrechner,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/Datenschutz" element={<Datenschutz />} />
                <Route path="/datenschutz" element={<Datenschutz />} />
                <Route path="/zdatenschutz" element={<Datenschutz />} />
                
                <Route path="/Home" element={<Home />} />
                <Route path="/home" element={<Home />} />
                
                <Route path="/Impressum" element={<Impressum />} />
                <Route path="/impressum" element={<Impressum />} />
                <Route path="/zimpressum" element={<Impressum />} />
                
                <Route path="/Tarifrechner" element={<Tarifrechner />} />
                <Route path="/tarifrechner" element={<Tarifrechner />} />
                <Route path="/rechner" element={<Tarifrechner />} />

                <Route path="/kostenloses-girokonto-ohne-gehaltseingang" element={<KontoOhneGehaltseingang />} />
                <Route path="/girokonto-ohne-gehaltseingang" element={<KontoOhneGehaltseingang />} />
                <Route path="/ohne-gehaltseingang" element={<KontoOhneGehaltseingang />} />

                <Route path="/tagesgeld-zinsen-vergleich" element={<TagesgeldZinsenVergleich />} />
                <Route path="/tagesgeld-zinsen" element={<TagesgeldZinsenVergleich />} />
                <Route path="/zinsen" element={<TagesgeldZinsenVergleich />} />
                
            </Routes>
        </Layout>
    );
}

import VercelAnalytics from "@/components/VercelAnalytics";

export default function Pages() {
    return (
        <Router>
            <VercelAnalytics />
            <PagesContent />
        </Router>
    );
}