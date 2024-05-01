import styled from "styled-components";
import {InnerLayout} from "../../styles/Layouts.js";
import {useGlobalContext} from "../../context/GlobalContext.jsx";
import Form from "../Form/Form.jsx";

const Incomes = () => {
    const {addIncome} = useGlobalContext();
    return (
        <IncomesStyled>
            <InnerLayout>
                <h1>Incomes</h1>
                <div className="income-content">
                    <div className="form-container"></div>
                    <Form/>
                </div>
            </InnerLayout>
        </IncomesStyled>
    );
}

const IncomesStyled = styled.div`

`

export default Incomes;