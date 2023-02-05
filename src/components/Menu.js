import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import QuiSommesNous from "./pages/QuiSommesNous";
import Connexion from "./pages/Connexion";
import ContactUs from "./pages/ContactUs";
import Chat from "./pages/Chat";
import Incription from "./pages/Incription";
import Entrainement from "./pages/Entrainement";
import Don from "./pages/Don";
import AdminSit from "./pages/AdminSit";
import Cotisation from "./pages/Cotisation";
import Actualite from "./pages/Actualite";
// import{Protected } from ".";

import ProtectedRoute   from "./ProtectedRoute";

function Menu() {
  return (
    <div>
      <>
      <Route path="/" exact component={Home} />
      <Route path="/services" component={Services} />

      <ProtectedRoute noauth = {true}>
      <Route path="/quiSommesNous" component={QuiSommesNous} />
      </ProtectedRoute>

      <Route path="/connexion" component={Connexion} />
      <Route path="/cotisation" component={Cotisation} />

      <Route path="/contactUs" component={ContactUs} />

      <Route path="/chat" component={Chat} />
      <Route path="/actualite" component={Actualite} />

      <ProtectedRoute noauth = {true}>
      <Route path="/contact" component={Incription} />
      </ProtectedRoute>
      

      <Route path="/entrainement" component={Entrainement} />
      <Route path="/don" component={Don} />
      <Route path="/admin_sat" component={AdminSit} />
      </>
    </div>
  );
}

export default Menu;
