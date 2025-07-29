// import ViteIntro from "./pages/ViteIntro.tsx";

import ClassComponent from "./component/ClassComponent.tsx";
import FunctionalComponent from "./component/FunctionalComponent.tsx";
import ArrowFunctionalComponent from "./component/ArrowFunctionalComponent.tsx";
import ArrowFunctionalComponentWithProps from "./component/ArrowFunctionalComponentWithProps.tsx";
import ArrowFunctionalComponentWithPropsType from "./component/ArrowFunctionalComponentWithPropsType.tsx";

function App() {


  return (
    <>
     <ClassComponent/>
        <FunctionalComponent/>
        <ArrowFunctionalComponent/>
        <ArrowFunctionalComponentWithProps title="Is a Arrow Functional Componsent with Props"/>
        <ArrowFunctionalComponentWithPropsType title="Is a Arrow Functional Componsent with Props"
                                               description="This is a description"/>
    </>
  )
}

export default App
