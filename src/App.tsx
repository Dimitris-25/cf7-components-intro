// import ViteIntro from "./pages/ViteIntro.tsx";

// import ClassComponent from "./component/ClassComponent.tsx";
// import FunctionalComponent from "./component/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./component/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./component/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./component/ArrowFunctionalComponentWithPropsType.tsx";
// import CodingFactoryLogo from "./component/CodingFactoryLogo.tsx";
import {Layout} from "./component/Layout.tsx";
// import NameChanger from "./component/NameChanger.tsx";
// import ClassComponentWithState from "./component/ClassComponentWithState.tsx";
// import FunctionalComponent from "./component/FunctionalComponent.tsx";
// import FunctionalComponentWithState from "./component/FunctionalComponentWithState.tsx";

// import Counter from "./component/Counter.tsx";
// import CounterButton from "./component/CounterButton.tsx";
// import CounterWithMoreStates from "./component/CounterWithMoreStates.tsx";
// import CounterAdvanced from "./component/CounterAdvanced.tsx";
// import CounterWithCustomHook from "./component/CounterWithCustomHook.tsx";
// import CounterAdvancedWithCustomHook from "./component/CounterAdvancedWithCustomHook.tsx";
// import CounterWithReducer from "./component/CounterWithReducer.tsx";
// import CounterWithReducer from "./component/CounterWithReducer.tsx";
import Todo from "./component/Todo/Todo.tsx";

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
     {/*       <FunctionalComponentWithState></FunctionalComponentWithState>*/}
     {/*       <Counter></Counter>*/}
     {/*       <CounterButton onClick={() => console.log("Clicked!")} label="Click me" />*/}
            {/*<NameChanger></NameChanger>*/}
            {/*<CounterWithMoreStates></CounterWithMoreStates>*/}
            {/*<CounterAdvanced></CounterAdvanced>*/}
            {/*<CounterWithCustomHook></CounterWithCustomHook>*/}
            {/*<CounterAdvancedWithCustomHook></CounterAdvancedWithCustomHook>*/}
            {/*<CounterWithReducer></CounterWithReducer>*/}
            {/*<CounterWithReducer></CounterWithReducer>*/}
            <Todo></Todo>





        </Layout>
    </>
  )
}

export default App
