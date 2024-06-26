import styled from "styled-components";
import bg from "./img/bg.png"
import {MainLayout} from "./styles/Layouts.js";
import Orb from "./Components/Orb/Orb.jsx";
import Navigation from "./Components/Navigation/Navigation.jsx";
import {useMemo, useState} from "react";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import Incomes from "./Components/Incomes/Incomes.jsx";
import Expenses from "./Components/Expenses/Expenses.jsx";
// import {useGlobalContext} from "./context/GlobalContext.jsx";

const App = () => {
    const [active, setActive] = useState(1);

    // const global = useGlobalContext()
    // console.log(global)

    const orbMemo = useMemo(() => {
        return <Orb />
    }, []);

    const displayData = () => {
        switch (active) {
            case 1:
                return <Dashboard/>
            case 2:
                return <Dashboard/>
            case 3:
                return <Incomes/>
            case 4:
                return <Expenses/>
            default:
                return <Dashboard/>
        }
    }

    return (
        <AppStyled bg={bg}>
            {orbMemo}
            <MainLayout>
                <Navigation active={active} setActive={setActive}/>
                <main>
                    {displayData()}
                </main>
            </MainLayout>
        </AppStyled>
    )
}

const AppStyled = styled.div`
    height: 100vh;
    background-image: url(${props => props.bg});
    position: relative;
  
  main {
    flex: 1;
    background-color: rgba(252, 246, 249, 0.78);
    border: 3px solid #fff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`


export default App;