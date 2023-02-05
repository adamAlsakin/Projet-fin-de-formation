import React from "react";
import ReactDOM from "react-dom";

//pour que ca fonction il faut metre le cdn et le client id du compte pay pal dans index.html

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function Cotisation() {
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "5", //la somme que va payer les gens
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    console.log(data);
    return actions.order.capture();
  };

  return (
    <div className="app">
      <div className="wrapper">
        <PayPalButton
          createOrder={(data, actions) => createOrder(data, actions)}
          onApprove={(data, actions) => onApprove(data, actions)}
        />
        <h2>Le montant de la cotisation mensuel est de 5 euro</h2>
        <h2> Pour payer par virement bancaire</h2>

        <p>Merci de contacter le secretaire au tel: 00000000000 ou par</p>
        <p>busokozakIRIKOU@gmail.com</p>
      </div>
    </div>
  );

  //   return (

  {
    /* <h1>cotisation page</h1>
      <p>
        <h1>
          pour faire la cotisatuion,une personne doit remplir une formilaire.
          cette formilaire sera envoyer dans la table cotisatio lors que la
          personne va regler la somme par virement ou par liquide ou par paypal.
          Dans ma logique je crois que par paypal il doit y avoir un retour de
          chez paypal qui va actionner le submit et le fetch dans la base de
          donne de facon automatique
        </h1>
      </p>
    </div> */
  }

  //   );
}

export default Cotisation;
