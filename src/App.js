import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';

import Header from './components/Header';
import Tabs from './components/Tabs';
import Upload from './containers/Upload';

import DataDive from './containers/DataDive';
import Univariant from './containers/Univariant';
import Bivariant from './containers/Bivariant';

const tabs = [
  { label: "Data Dive", route: "/data-dive" },
  { label: "Univariant", route: "/univariant/categorical" },
  { label: "Bivariant", route: "/bivariant" }
];

const subTabs = {
  'Univariant': ["Categorical", "Columns"],
  'Bivariant': []
};

function App() {
  const [showUpload, setShowUpload] = useState(false);
  
  return (
    <div className="App">
      <Router>
        <Header upload={() => setShowUpload(true)}/>
        <Tabs tabs={tabs}>
          {(selected) => {
            return (
              <div className="sub-tabs"> 
                {subTabs[selected] && (
                  <div className="bg-gray-200 mt-6">
                    {subTabs[selected].map(subTab => (
                      <Link to={`/univariant/${subTab.toLowerCase()}`} className="text-sm underline text-blue-500 inline-block m-4">{subTab}</Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }}
        </Tabs>

        <Switch>           
          <Route path="/data-dive">
            <div className="w-10/12 m-auto mt-5">
              <DataDive/>
            </div>
          </Route>
          <Route path="/univariant/:type">
            <div className="w-10/12 m-auto mt-5">
              <Univariant />
            </div>
          </Route>
          <Route path="/bivariant">
            <div className="w-10/12 m-auto mt-5">
              <Bivariant />
            </div>
          </Route>
        </Switch>        
      </Router>

      {showUpload && (<Upload close={() => setShowUpload(false)} />)}
    </div>
  );
}

export default App;
