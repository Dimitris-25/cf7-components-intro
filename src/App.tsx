// import ViteIntro from "./pages/ViteIntro.tsx";

// import ClassComponent from "./component/ClassComponent.tsx";
// import FunctionalComponent from "./component/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./component/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./component/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./component/ArrowFunctionalComponentWithPropsType.tsx";
// import CodingFactoryLogo from "./component/CodingFactoryLogo.tsx";
import {Layout} from "./component/Layout.tsx";
// import ClassComponentWithState from "./component/ClassComponentWithState.tsx";
// import FunctionalComponent from "./component/FunctionalComponent.tsx";
import FunctionalComponentWithState from "./component/FunctionalComponentWithState.tsx";

function App() {


  return (
    <>
        <Layout>
     {/*<ClassComponent/>*/}
     {/*   <FunctionalComponent/>*/}
     {/*   <ArrowFunctionalComponent/>*/}
     {/*   <ArrowFunctionalComponentWithProps title="Is a Arrow Functional Componsent with Props"/>*/}
     {/*   <ArrowFunctionalComponentWithPropsType title="Is a Arrow Functional Componsent with Props"*/}
     {/*                                          description="This is a description"/>*/}
     {/*   <CodingFactoryLogo/>*/}
     {/*       <ClassComponentWithState/>*/}
            <FunctionalComponentWithState></FunctionalComponentWithState>



        </Layout>
    </>
  )
}

export default App
