import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Incription({item}) {

  


    return (
        <div>
            <h1>
            <Formik
        initialValues={{
           nom: item.nom,
           prenom: item.prenom,
          email: "",
          password: "",
          confirmPassword: "",
          telephone: "",
        }}
        validationSchema={Yup.object().shape({
            nom: Yup.string().required("Saisissez votre nom"),
            prenom: Yup.string().required("Saisissez votre prenom"),
          email: Yup.string()
            .email("Saisissez une adresse email valide")
            .required("Saisissez votre adresse mail"),
          password: Yup.string()
            .min(4, "Le mot de passe doit contenir au moins 4 caractères")
            .required("Saisissez un mot de passe"),
          confirmPassword: Yup.string()
            .oneOf(
              [Yup.ref("password"), null],
              "Les mots de passes ne sont pas identiques"
            )
            .required("Confirmez votre mot de passe"),
            telephone: Yup.string().required("Saisissez votre telephone"),
        })}
        onSubmit={(fields) => {
          // console.log(fields);
          delete fields.confirmPassword;
          fields.role = 1;
          fields.is_active = 1;
          fields.deleted = 0;
          // const fields=fields.
          const body = JSON.stringify(fields);
          const headers = {'Content-Type':'application/json'}
          fetch("http://localhost:3005/utilisateur/create", { method: "POST", body, headers }).then(
            (response) => {

              // return response.text().then((text) => {
              //   if (text===true) {
                    
              //           window.location.href = "/";
              //         //Error Message with Modal
                   
           
              //   } else {
              //    console.log("inscription imposible")
              //   }
              // });
              if (response)  window.location.href = "/";
              else {
                console.log("inscription imposible")
               }




            }
          );
        }}
      >
        {({ errors, isValid, dirty, touched }) => (
          <>
            <h3 className="text-center mt-3">Inscription</h3>

            <Form className="col-6 offset-3">
              <div className="form-group pb-3">
                <label htmlFor="nom">nom</label>
                <Field
                  name="nom"
                  type="text"
                  className={
                    "form-control" +
                    (errors.nom && touched.nom ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="nom"
                  component="div"
                  className="invalid-feedback position-absolute"
                />
              </div>

              <div className="form-group pb-3">
                <label htmlFor="prenom">prenom</label>
                <Field
                  name="prenom"
                  type="text"
                  className={
                    "form-control" +
                    (errors.prenom && touched.prenom ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="prenom"
                  component="div"
                  className="invalid-feedback position-absolute"
                />
              </div>

              <div className="form-group pb-3">
                <label htmlFor="email">Email</label>
                <Field
                  name="email"
                  type="text"
                  className={
                    "form-control" +
                    (errors.email && touched.email ? " is-invalid" : "")
                  }
                  autoComplete="username"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid-feedback position-absolute"
                />
              </div>

              <div className="form-group pb-3">
                <label htmlFor="password">Choisir un Mot de passe</label>
                <Field
                  name="password"
                  type="password"
                  className={
                    "form-control" +
                    (errors.password && touched.password ? " is-invalid" : "")
                  }
                  autoComplete="new-password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="invalid-feedback position-absolute"
                />
              </div>
              <div className="form-group pb-4">
                <label htmlFor="confirmPassword">
                  Confirmer le Mot de passe
                </label>
                <Field
                  name="confirmPassword"
                  type="password"
                  className={
                    "form-control" +
                    (errors.confirmPassword && touched.confirmPassword
                      ? " is-invalid"
                      : "")
                  }
                  autoComplete="new-password"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="invalid-feedback position-absolute"
                />
              </div>

              <div className="form-group pb-3">
                <label htmlFor="telephone">telephone</label>
                <Field
                  name="telephone"
                  type="text"
                  className={
                    "form-control" +
                    (errors.telephone && touched.telephone ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="telephone"
                  component="div"
                  className="invalid-feedback position-absolute"
                />
              </div>

              <div className="form-group d-flex justify-content-between">
                <button type="reset" className="btn btn-secondary">
                  Effacer
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!(dirty && isValid)}
                >
                  Valider
                </button>
              </div>
            </Form>
          </>
        )}
      </Formik>
      </h1>

            
        </div>
    )
}

export default Incription
