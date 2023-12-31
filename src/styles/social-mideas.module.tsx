import { styled } from "styled-components";
import { themes } from '@/styles/variables.module'

type props = {
    isDark: boolean
}

export const SocialMediasDiv = styled.div<props>`

    * {
        color: ${props => props.isDark ? themes.dark.fontColor : themes.light.fontColor};
        font-family: 'Merriweather';
        font-size: 16px;
    }

    .container {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .addItem {
        margin-top: 30px;
        
        padding: 10px;
        width: 200px;
        border-radius: 4px;
        border: 1px solid ${props => props.isDark ? themes.dark.fontColor : themes.light.fontColor};

        cursor: pointer;

        &:hover {
            background-color: #49868b55;
        }
    }

    .deleteButton {
        background-color: #cd030362;
        color: red;
        padding: 4px;

        width: fit-content;
        border-radius: 4px;

        margin-top: 10px;
        margin-left: 10px;

        cursor: pointer;

        &:hover {
            background-color: #cd030383;
        }
    }



`