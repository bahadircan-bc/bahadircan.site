import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Web from "./WhyMeComponents/Web";
import Web3 from "./WhyMeComponents/Web3";
import Engineering from "./WhyMeComponents/Engineering";
import Desktop from "./WhyMeComponents/Desktop";
import Mobile from "./WhyMeComponents/Mobile";

function WhyMe() {
  return (
    <div className="w-full h-screen flex flex-col items-center py-10">
      {/* <div className="w-full h-fit text-center text-white text-7xl mb-[10vh]">
        Why me?
      </div> */}
      {/* min-h-0 is important for the element below, 
      since it was removed from the specification for an alternative */}
      <Tabs className="w-2/3 text-white flex flex-col min-h-0">
        <TabList className="border-0 flex justify-evenly border-b">
          <Tab className="cursor-pointer flex-1 text-2xl focus:outline-none text-center">
            Web
          </Tab>
          <Tab className="cursor-pointer flex-1 text-2xl focus:outline-none text-center">
            Web3
          </Tab>
          <Tab className="cursor-pointer flex-1 text-2xl focus:outline-none text-center">
            Engineering
          </Tab>
          <Tab className="cursor-pointer flex-1 text-2xl focus:outline-none text-center">
            Desktop
          </Tab>
          <Tab className="cursor-pointer flex-1 text-2xl focus:outline-none text-center">
            Mobile
          </Tab>
        </TabList>
        <TabPanel selectedClassName="flex-1 min-h-0" className="overflow-clip">
          <Web />
        </TabPanel>
        <TabPanel selectedClassName="flex-1 min-h-0" className="overflow-clip">
          <Web3 />
        </TabPanel>
        <TabPanel selectedClassName="flex-1 min-h-0" className="overflow-clip">
          <Engineering />
        </TabPanel>
        <TabPanel selectedClassName="flex-1 min-h-0" className="overflow-clip">
          <Desktop />
        </TabPanel>
        <TabPanel selectedClassName="flex-1 min-h-0" className="overflow-clip">
          <Mobile />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default WhyMe;
