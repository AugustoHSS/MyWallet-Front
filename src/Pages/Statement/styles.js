import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    background-color: #8C11BE;
    padding: 5%;
`;

export const Statements = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 75%;
    background-color: #ffffff;
    border-radius: 5px;   
    margin-top: 6%;
    padding: 5% 3% 5% 3%;
`;

export const MovementButton = styled.button`
    all: unset;
    box-sizing: border-box;
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    background-color: #A328D6;
    width: 156px;
    height: 114px;
    margin-top: 13px;
    border-radius: 5px;
    padding: 3%;
    font-weight: bold;
    color: #FFFFFF;
    p{
        max-width: 60%;
    }
`;

export const Header = styled.header`
    display:flex;
    justify-content: space-between;
    ion-icon{
        font-size: 30px;
        color: #FFFFFF
    }
`;

export const ButtonContainer = styled.div`
    display:flex;
    justify-content: space-between;
    ion-icon{
        font-size: 25px;
        color: #FFFFFF
    }
`;

export const WithoutMovements = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    p{
        color: #868686;
        font-size: 20px;
        line-height: 23px;
        width: 180px;
    }
`;
export const Movement = styled.div`
    display: flex;
    justify-content:space-between;
    margin-bottom:3%;
    div{
        display:flex;
    }
`;
export const Date = styled.div`
    color: #C6C6C6;
    font-size: 16px;
    line-height: 19px;
    margin-right: 12px;
`;
export const Description = styled.div`
    color: #000000;
    font-size: 16px;
    line-height: 19px;
    min-width: 100%;
`;
export const Value = styled.div`
    font-size: 16px;
    line-height: 19px;
    color: ${(props) => (props.isOutput ? '#C70000' : '#03AC00')}
`;
export const Balance = styled.div`

    display:flex;
    justify-content: space-between;
    p{
        color: #000000;
        font-weight: bold;
        font-size: 17px;
        line-height: 20px;
    }
`;

export const BalanceValue = styled.div`
    font-size: 17px;
    line-height: 20px;
    color: ${(props) => (props.isNegative ? '#C70000' : '#03AC00')}
`;

export const RemoveMovement = styled.button`
    all: unset;
    font-size: 16px;
    line-height: 19px;
    color: #C6C6C6;
    margin-left: 8px;
`;
