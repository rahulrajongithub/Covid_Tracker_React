import React, {useEffect, useState} from "react";
import { MenuItem, FormControl, Select } from "@material-ui/core";
import "./App.css";

function App() {
  const [countries, setCountries] = useState(['USA', 'UK', 'INDIA']);
  // State = How to write variable in react

  //https://disease.sh/v3/covid-19/countries

  // USEEFFECT = Runs a piece of code
  // based on a given condition

  useEffect(() => {
    // The code inside here will run once when the component
    // loads and not again
  }, [countries]);
  
  return (
    <div className="app">
      <div className="app__header">
        <h1>C-TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
            {/* Loop through all the countries 
            and show a drop down list of the 
            options */}

            {
              countries.map(country => (
                <MenuItem value={country}>{country}</MenuItem>
              ))
            }

            {/* <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">qwert</MenuItem>
            <MenuItem value="worldwide">dfg</MenuItem>
            <MenuItem value="worldwide">Worlnvbnvbndwode</MenuItem> */}
          </Select>
        </FormControl>
      </div>

      {/* Header */}
      {/* Title + Select Input Dropdown*/}

      {/* Infobox1 */}
      {/* Infobox2 */}
      {/* Infobox3 */}

      {/* Table */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}

export default App;
