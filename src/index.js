import React, { useState } from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

import CarbonProviderNew from "carbon-react/lib/components/carbon-provider";
import Button from "carbon-react/lib/components/button";
import DialogNew from "carbon-react/lib/components/dialog";
import {
  Select as SelectNew,
  Option as OptionNew,
} from "carbon-react/lib/components/select";

import {
  Select as SelectOld,
  Option as OptionOld,
} from "carbon-react-copy/lib/components/select";
import DialogOld from "carbon-react-copy/lib/components/dialog";
import CarbonProviderOld from "carbon-react-copy/lib/components/carbon-provider";

const GlobalStyle = createGlobalStyle`
body {
  height: 100vh
}`;

const Scenario1 = () => {
  const [isOpenNew, setIsOpenNew] = useState(false);
  const [isOpenOld, setIsOpenOld] = useState(false);
  return (
    <>
      <h3>Scenario 1</h3>
      <p>1. Opens Dialog with new version of scroll block</p>
      <p>2. Opens Dialog with old version of scroll block</p>
      <p>3. Closes Dialog with old version of scroll block</p>
      <p>4. Closes Dialog with new version of scroll block</p>
      <Button mb={10} onClick={() => setIsOpenNew(!isOpenNew)}>
        Open Dialog
      </Button>
      <DialogNew
        open={isOpenNew}
        onCancel={() => setIsOpenNew(false)}
        title="New scroll block"
      >
        <Button onClick={() => setIsOpenOld(!isOpenOld)}>Open Dialog</Button>
        <DialogOld
          open={isOpenOld}
          onCancel={() => setIsOpenOld(false)}
          title="Old scroll block"
          height="1000"
        >
          Hello
        </DialogOld>
      </DialogNew>
    </>
  );
};

const Scenario2 = () => {
  const [isOpenNew, setIsOpenNew] = useState(false);
  const [isOpenOld, setIsOpenOld] = useState(false);
  return (
    <>
      <h3>Scenario 2</h3>
      <p>1. Opens Dialog with old version of scroll block</p>
      <p>2. Opens Dialog with new version of scroll block</p>
      <p>3. Closes Dialog with new version of scroll block</p>
      <p>4. Closes Dialog with old version of scroll block</p>
      <Button mb={10} onClick={() => setIsOpenOld(!isOpenOld)}>
        Open Dialog
      </Button>
      <DialogOld
        open={isOpenOld}
        onCancel={() => setIsOpenOld(false)}
        title="Old scroll block"
        height="1000"
      >
        <Button mb={10} onClick={() => setIsOpenNew(!isOpenNew)}>
          Open Dialog
        </Button>
        <DialogNew
          open={isOpenNew}
          onCancel={() => setIsOpenNew(false)}
          title="New scroll block"
        >
          Hello
        </DialogNew>
      </DialogOld>
    </>
  );
};

const Scenario3 = () => {
  const [isOpenNew, setIsOpenNew] = useState(false);
  const [isOpenOld, setIsOpenOld] = useState(false);
  return (
    <>
      <h3>Scenario 3</h3>
      <p>1. Opens Dialog with new version of scroll block</p>
      <p>2. Opens Dialog with old version of scroll block</p>
      <p>
        3. Closes Dialog with new version of scroll block and immediately closes
        the old one
      </p>
      <Button mb={10} onClick={() => setIsOpenNew(!isOpenNew)}>
        Open Dialog
      </Button>
      <DialogNew
        open={isOpenNew}
        onCancel={() => setIsOpenNew(false)}
        title="New scroll block"
      >
        <Button onClick={() => setIsOpenOld(!isOpenOld)}>Open Dialog</Button>
        <DialogOld
          open={isOpenOld}
          onCancel={() => {
            setIsOpenNew(false);
            setIsOpenOld(false);
          }}
          title="Old scroll block"
          height="1000"
        >
          Hello
        </DialogOld>
      </DialogNew>
    </>
  );
};

const Scenario4 = () => {
  const [isOpenNew, setIsOpenNew] = useState(false);
  const [isOpenOld, setIsOpenOld] = useState(false);
  return (
    <>
      <h3>Scenario 4</h3>
      <p>1. Opens Dialog with old version of scroll block</p>
      <p>2. Opens Dialog with new version of scroll block</p>
      <p>
        3. Closes Dialog with old version of scroll block and immediately closes
        the new one
      </p>
      <Button mb={10} onClick={() => setIsOpenOld(!isOpenOld)}>
        Open Dialog
      </Button>
      <DialogOld
        open={isOpenOld}
        onCancel={() => setIsOpenOld(false)}
        title="Old scroll block"
        height="1000"
      >
        <Button mb={10} onClick={() => setIsOpenNew(!isOpenNew)}>
          Open Dialog
        </Button>
        <DialogNew
          open={isOpenNew}
          onCancel={() => {
            setIsOpenOld(false);
            setIsOpenNew(false);
          }}
          title="New scroll block"
        >
          Hello
        </DialogNew>
      </DialogOld>
    </>
  );
};

const Scenario5 = () => {
  const [isOpenNew, setIsOpenNew] = useState(false);
  const [isOpenNew2, setIsOpenNew2] = useState(false);
  return (
    <>
      <h3>Scenario 5</h3>
      <p>1. Opens Dialog with new version of scroll block</p>
      <p>2. Opens Dialog with new version of scroll block</p>
      <p>3. Closes Dialog with new version of scroll block</p>
      <p>4. Closes Dialog with new version of scroll block</p>
      <Button mb={10} onClick={() => setIsOpenNew(!isOpenNew)}>
        Open Dialog
      </Button>
      <DialogNew
        open={isOpenNew}
        onCancel={() => setIsOpenNew(false)}
        title="New scroll block"
        height="1000"
      >
        <Button mb={10} onClick={() => setIsOpenNew2(!isOpenNew2)}>
          Open Dialog
        </Button>
        <DialogNew
          open={isOpenNew2}
          onCancel={() => setIsOpenNew2(false)}
          title="New scroll block"
        >
          Hello
        </DialogNew>
      </DialogNew>
    </>
  );
};

const Scenario6 = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <h3>Scenario 6</h3>
      <p>1. Opens Dialog with old version of scroll block</p>
      <p>2. Opens Select with new version of scroll block</p>
      <p>3. Closes Select with new version of scroll block</p>
      <p>4. Closes Dialog with old version of scroll block</p>
      <Button mb={10} onClick={() => setIsOpen(!isOpen)}>
        Open Dialog
      </Button>
      <DialogOld
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        title="Old scroll block"
        height="1000"
      >
        <SelectNew name="new" label="New scroll block">
          <OptionNew text="Amber" value="1" />
          <OptionNew text="Black" value="2" />
          <OptionNew text="Blue" value="3" />
        </SelectNew>
      </DialogOld>
    </>
  );
};

const Scenario7 = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <h3>Scenario 7</h3>
      <p>1. Opens Dialog with new version of scroll block</p>
      <p>2. Opens Select with old version of scroll block</p>
      <p>3. Closes Select with old version of scroll block</p>
      <p>4. Closes Dialog with new version of scroll block</p>
      <Button mb={10} onClick={() => setIsOpen(!isOpen)}>
        Open Dialog
      </Button>
      <DialogNew
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        title="New scroll block"
        height="1000"
      >
        <SelectOld name="simple" label="Old scroll block">
          <OptionOld text="Amber" value="1" />
          <OptionOld text="Black" value="2" />
          <OptionOld text="Blue" value="3" />
        </SelectOld>
      </DialogNew>
    </>
  );
};

const App = () => {
  return (
    <div style={{ height: 2500 }}>
      <GlobalStyle />
      <CarbonProviderNew>
        <CarbonProviderOld>
          <h2>Description</h2>
          <p>
            Each time that the scroll is blocked by a component that uses the
            old scroll block the screen will automatically scroll to the top
          </p>
          <p>
            This behaviour should not happen when the new scroll block is used
          </p>
          <p>
            Test following scenarios to confirm that the statements above are
            correct
          </p>
          <p>
            Check if mixing the old and new scroll block does not break the
            scroll functionality permanently
          </p>
          <p>
            To test the most combinations close the components in each of
            scenarios both by clicking the close icon and by pressing the escape
            key
          </p>
          <h2>Examples</h2>
          <Scenario1 />
          <Scenario2 />
          <Scenario3 />
          <Scenario4 />
          <Scenario5 />
          <Scenario6 />
          <Scenario7 />
        </CarbonProviderOld>
      </CarbonProviderNew>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
