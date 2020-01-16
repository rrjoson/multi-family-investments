import React, { useEffect, useState } from "react";
import Tabletop from "tabletop";

// TODO: Move to separate file
const GOOGLE_SHEET_KEY =
  "https://docs.google.com/spreadsheets/d/1PH1aTTPIUOV0dQhZjbeGYeF_2PXV0FC44CWgTYrxefg/pubhtml";

const App = () => {
  const [classAProperties, setClassAProperties] = useState([]);
  const [classBProperties, setClassBProperties] = useState([]);
  const [classCProperties, setClassCProperties] = useState([]);
  const [classDProperties, setClassDProperties] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: GOOGLE_SHEET_KEY,
      callback: properties => {
        const classAProperties = properties.filter(property => {
          return property["Property class"] === "A";
        });
        const classBProperties = properties.filter(property => {
          return property["Property class"] === "B";
        });
        const classCProperties = properties.filter(property => {
          return property["Property class"] === "C";
        });
        const classDProperties = properties.filter(property => {
          return property["Property class"] === "D";
        });

        setClassAProperties(classAProperties);
        setClassBProperties(classBProperties);
        setClassCProperties(classCProperties);
        setClassDProperties(classDProperties);
      },
      simpleSheet: true
    });
  }, []);

  return (
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1">Multi Family Real Estate Spreadsheet</h1>
          <h2 class="subtitle is-4">
            Spend less time searching for the best deals in the market
          </h2>
          <div>
            <a href="https://ricardojoson.typeform.com/to/C9zY6u">
              <button class="button is-large is-info is-outlined">
                Get free access
              </button>
            </a>
          </div>
        </div>
      </div>
      <footer class="footer">
        <div class="content has-text-centered">
          <nav class="level">
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Class A</p>
                <p class="title">{classAProperties.length}</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Class B</p>
                <p class="title">{classBProperties.length}</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Class C</p>
                <p class="title">{classCProperties.length}</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Class D</p>
                <p class="title">{classDProperties.length}</p>
              </div>
            </div>
          </nav>
        </div>
      </footer>
    </section>
  );
};

export default App;
