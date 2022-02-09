import React from "react";
import ReactDOM from "react-dom";

import CarbonProvider from "carbon-react/lib/components/carbon-provider";
import Button from "carbon-react/lib/components/button";
import SplitButton from "carbon-react/lib/components/split-button";

import CarbonProvider2 from "carbon-react-copy/lib/components/carbon-provider";
import Button2 from "carbon-react-copy/lib/components/button";
import SplitButton2 from "carbon-react-copy/lib/components/split-button";

const App = () => {
  return (
    <>
      <CarbonProvider>
        <SplitButton text="Split button">
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </SplitButton>
      </CarbonProvider>

      <CarbonProvider2>
        <SplitButton2 text="Split button">
          <Button2>Button 1</Button2>
          <Button2>Button 2</Button2>
          <Button2>Button 3</Button2>
        </SplitButton2>
      </CarbonProvider2>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
