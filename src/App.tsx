import React, { Suspense, lazy } from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

const DashboardLayout = lazy( ()=> import("./dashboard/DashboardLayout"));
 
 function App() {
   return (
     <Router>
      <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/*' element={<DashboardLayout/>}/>
        </Routes>
      </Suspense>
      </div>
    </Router>
  );
}

export default App;
