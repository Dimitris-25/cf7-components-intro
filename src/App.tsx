// import ViteIntro from "./pages/ViteIntro.tsx";

// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import CodingFactoryLogo from "./components/CodingFactoryLogo.tsx";
// import {Layout} from "./components/Layout.tsx";
import {BrowserRouter, Routes, Route} from "react-router";
// import HomePage from "./pages/HomePage.tsx";
import NameChangerPage from "./pages/NameChangerPage.tsx";
// import OnlineStatusPage from "./pages/OnlineStatusPage.tsx";
import UserPage from "./pages/UserPage.tsx";
import RouterLayout from "./components/RouterLayout.tsx";
// import ExamplesPage from "./pages/ExamplesPage.tsx";
import RouterExamplesLayout from "./components/RouterExamplesLayout.tsx";
import OnlineStatusPage from "./pages/OnlineStatusPage.tsx";
import AutoRedirectPage from "./pages/AutoRedirectPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import FocusInput from "./components/FocusInput.tsx";
import UnControlledInput from "./components/UnControlledInput.tsx";
import ControlledInput from "./components/ControlledInput.tsx";
import MultiFieldForm from "./components/MultiFieldForm.tsx";
// import OnlineStatusPage from "./pages/OnlineStatusPage.tsx";

// import NameChanger from "./components/NameChanger.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";

// import Counter from "./components/Counter.tsx";
// import CounterButton from "./components/CounterButton.tsx";
// import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
// import CounterAdvanced from "./components/CounterAdvanced.tsx";
// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import CounterAdvancedWithCustomHook from "./components/CounterAdvancedWithCustomHook.tsx";
// import CounterWithReducer from "./components/CounterWithReducer.tsx";
// import CounterWithReducer from "./components/CounterWithReducer.tsx";
// import Todo from "./components/Todo/Todo.tsx";
// import OnlineStatus from "./components/OnlineStatus.tsx";


function App() {

    // useEffect(() => {
    //   const id: number = setInterval(() => console.log("tick"), 1000);
    //   return () => clearInterval(id);
    // }, []);


  return (
    <>
        {/*<Layout>*/}
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
     {/*       <NameChanger></NameChanger>*/}
            {/*<CounterWithMoreStates></CounterWithMoreStates>*/}
            {/*<CounterAdvanced></CounterAdvanced>*/}
            {/*<CounterWithCustomHook></CounterWithCustomHook>*/}
            {/*<CounterAdvancedWithCustomHook></CounterAdvancedWithCustomHook>*/}
            {/*<CounterWithReducer></CounterWithReducer>*/}
            {/*<CounterWithReducer></CounterWithReducer>*/}
            {/*<Todo></Todo>*/}
            {/*<OnlineStatus></OnlineStatus>*/}

            <BrowserRouter>
                {/*<Layout>*/}
                    <Routes>
                        <Route element={<RouterLayout />}>
                        {/*<Route path="/" element={<HomePage />}/>*/}
                        {/*<Route index element={<HomePage />}/>*/}
                        <Route index element={<MultiFieldForm/>}/>
                        {/*<Route index element={<MultiFieldFormWithValidation/>}/>*/}
                        {/*<Route index element={<MultiFieldFormWithZodValidation/>}/>*/}
                        {/*  <Route index element={<MultiFieldFormWithReactHook/>}/>*/}
                          <Route path="users/:userId" element={<UserPage />}/>
                          <Route path="users" element={<UserPage />}/>
                        </Route>

                        <Route path="examples"/>
                            <Route path="examples" element={<RouterExamplesLayout/>}>
                                  {/*<Route index element={<ExamplesPage/>}/>*/}
                                  <Route path="name-changer" element={<NameChangerPage/>}/>
                                  <Route path="online-status" element={<OnlineStatusPage/>}/>
                                  <Route path="auto-redirect" element={<AutoRedirectPage/>}/>
                                  <Route path="controlled-input" element={<ControlledInput />}/>
                                  <Route path="uncontrolled-input" element={<UnControlledInput />}/>
                                  <Route path="focus-input" element={<FocusInput />}/>
                        </Route>

                            <Route path="users/:userId" element={<UserPage />}/>
                            <Route path="users" element={<UserPage />}/>
                            {/*<Route path="files/*" element={<FilePage/>}/>*/}
                            <Route path="*"  element={<NotFoundPage/>}/>
                    </Routes>
                {/*</Layout>*/}
            </BrowserRouter>





        {/*</Layout>*/}
    </>
 )
}

export default App
