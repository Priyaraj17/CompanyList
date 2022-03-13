import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Companies from "./components/Companies/Companies";
import About from "./About.js";
import CompanyType from "./components/CompanyType/CompanyType";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const companyTypes = [
    {
      Type: "Dream",
      list: ["Google", "Meta", "Apple", "Microsoft", "Netflix", "Amazon"],
    },
    {
      Type: "Big",
      list: [
        "Sprinklr",
        "Salesforce",
        "ServiceNow",
        "Uber",
        "LinkedIn",
        "Indeed",
        "CodeNation",
        "OCI",
        "Atlassian",
        "Twilio",
        "Twitter",
        "Zoom",
        "Slack",
        "Observe.ai",
        "Airtel X Labs",
        "Walmart",
        "Tesco",
        "Target",
        "Bloomreach",
        "NetApp",
        "Nutanix(22 LPA Base)",
        "UiPath(42 LPA)",
        "Media.net",
        "Paypal",
        "Visa",
        "Airbnb",
        "Expedia",
        "Groupon",
        "Directi",
        "Qualcomm",
        "VMware",
        "Nvidia",
        "Arista Networks",
        "Cadence Inc",
        "Coinbase",
      ],
    },
    {
      Type: "FinTechBanks",
      list: [
        "Deutsche Bank",
        "Tower Research Capital",
        "World Quant",
        "Gravitation Quant",
        "De Shaw",
        "Goldman Sachs",
        "Arcesium",
        "Intuit",
        "Morgan Stanley",
        "JP Morgan",
        "Druva",
        "Wells Fargo",
        "Fidelity Investments",
        "American Express",
        "Deutsche Bank",
        "Telstra",
        "Splashlearn(12LPA)",
        "Paypal",
        "Barclays",
      ],
    },
    {
      Type: "unicorns",
      list: [
        "InMobi",
        "Flipkart",
        "Mu Sigma",
        "Snap Deal",
        "Ola Cabs",
        "PayTM",
        "Zomato",
        "Quikr",
        "Hike",
        "ShopCules",
        "PayTM Mall",
        "Swiggy",
        "Policy Bazaar",
        "Oyo Rooms",
        "Udaan",
        "FreshWorks",
        "BillDesk",
        "Delhivery",
        "Dream11",
        "BigBasket",
        "Rivigo",
        "Druva Software",
        "Icertis",
        "Citius Tech",
        "Ola Electric",
        "LensKart",
        "Pine Labs",
        "Nykaa",
        "Myntra",
        "Postman",
        "Unacademy",
        "RazorPay",
        "Cars24",
        "PhonPe",
        "Zenoti",
        "Daily Hunt",
        "Glance Inmobi",
        "Digit",
        "Innovaccer",
        "First Cry",
        "Meesho",
        "Cred",
        "PharmEasy",
        "Groww",
        "ShareChat",
        "GupShup",
        "ChargeBee",
        "Urban Company",
        "Moglix",
        "Zeta",
        "Browserstack",
        "BlackBuck",
        "Droom",
        "OfBusiness",
        "Bharat Pe",
        "MindTickle",
        "UpGrad",
        "CoinDCX",
        "Eruditus",
        "Blinkit",
        "Zetwerk",
        "MPL",
        "Apna",
        "Curefit",
        "CoinSwitch",
        "Licious",
        "Acko",
        "Mobikwik",
        "Car Dekho",
        "Rebel Foods",
        "Spinny",
        "Upstox",
        "Slice",
      ],
    },
    {
      Type: "Startups",
      list: [
        "Dunzo",
        "Flock",
        "LimeChat",
        "Scalar",
        "Netomi",
        "Dukaan",
        "Dotpe",
        "Procol",
        "RudderStack",
        "Headout",
        "Juspay",
        "Fasal",
        "BarRaiser",
        "Cogno AI",
        "GeeksforGeeks",
        "Blue Smart",
        "Schbang",
        "NoBroker",
        "Verloop",
        "Ninjacart",
        "Yellow.ai",
        "Retail Pulse",
        "Semaai",
        "IndePay",
        "Airtribe",
        "Castled Data",
        "Algo University",
        "Spyne AI",
      ],
    },
    {
      Type: "Others",
      list: [
        "SAP Labs",
        "MoEngage",
        "Commvault(21LPA)",
        "Siemens Healthineers",
        "OneDirect",
        "Rippling(30LPA)",
        "Thoughtspot",
        "Thoughtworks",
        "Compass",
        "Cohesity",
        "VMware",
        "Infowork",
        "AVI Networks",
        "Harness.io",
        "Airbus",
        "AppDynamics",
        "Grab",
        "Global IDs",
        "Coditas",
      ],
    },
  ];

  return (
    <>
      <Routes>
        <Route path="/" element={<CompanyType types={companyTypes} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/dream"
          element={<Companies companies={companyTypes[0]} />}
        />
        <Route
          path="/big"
          element={<Companies companies={companyTypes[1]} />}
        />
        <Route
          path="/fintech"
          element={<Companies companies={companyTypes[2]} />}
        />
        <Route
          path="/startups"
          element={<Companies companies={companyTypes[3]} />}
        />
        <Route
          path="/unicorns"
          element={<Companies companies={companyTypes[4]} />}
        />
        <Route
          path="/others"
          element={<Companies companies={companyTypes[5]} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
