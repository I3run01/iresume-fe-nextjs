import { styled } from "styled-components";
import { themes } from "@/styles/variables.module";

type props = {
    isDark: boolean
}

export const DashboardLayoutDiv = styled.div<props>`
    width: 100vw;
    min-height: 100vh;

    display: flex;
    flex-direction: row;

    h1, h2 {
        margin-top: 40px;
        font-family: 'Dosis';
        font-size: 18px;
        font-weight: lighter;

        color: ${props => props.isDark ? themes.dark.fontColor : themes.light.fontColor};
    }

    h2 {
        font-size: 16px;
    }

    p {
        color: ${props => props.isDark ? themes.dark.fontColor : themes.light.fontColor};
    }
    
    .children {
        width: 100%;
        height: 100vh;

        background-color: ${props => props.isDark ? themes.dark.backgroundOne : themes.light.backgroundOne};

        display: flex;
        flex-direction: column;
        align-items: center;

        overflow-y: auto;

        padding-bottom: 60px;

        .content {
            width: 1200px;
        }
    }
    
    .backNext {
        position: fixed;
        bottom: 10px;
        right: 0;
        left: 0;


        display: flex;
        justify-content: end;
    }

    .next, .back {
        margin-right: 20px;

        padding: 10px 20px 10px 20px;

        font-size: 18px;
        color: ${props => props.isDark ? themes.dark.fontColor : themes.light.fontColor};
        font-family: 'Dosis';

        cursor: pointer;

        border-radius: 5px;

        border: 1px solid ${props => props.isDark ? themes.dark.fontColor : themes.light.fontColor};

        &:hover {
            background-color: #23758590;
        }
    }

    @media screen and (max-width: 1400px) {
        .children > .content {
            width: 95%;
        }
    }



`