import React, { useState } from "react";
import ReactDOM from "react-dom";
import External from "./External";
import Component from "./Internal";
import Button from "carbon-react/lib/components/button";
import DialogFullScreen from "carbon-react/lib/components/dialog-full-screen";
import CarbonProvider from "carbon-react/lib/components/carbon-provider";
import GlobalStyle from "carbon-react/lib/style/global-style";

const App = () => {
  const [openExternal, setOpenExternal] = useState(false);
  const [openInternal, setOpenInternal] = useState(false);
  return (
    <>
      <GlobalStyle />
      <CarbonProvider>
        <Button onClick={() => setOpenExternal(true)}>External</Button>
        <Button onClick={() => setOpenInternal(true)}>Internal</Button>
        <DialogFullScreen
          open={openExternal}
          title="DialogFullScreen"
          subtitle="External"
          onCancel={() => {
            setOpenExternal(false);
          }}
        >
          <External />
        </DialogFullScreen>
        <DialogFullScreen
          open={openInternal}
          title="DialogFullScreen"
          subtitle="Internal"
          onCancel={() => {
            setOpenInternal(false);
          }}
        >
          <Component />
        </DialogFullScreen>
      </CarbonProvider>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
