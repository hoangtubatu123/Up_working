import * as types from '../../Constants/actionTypes';
import initialState from '../../Reducers/initialState';

export default function changThemeReducer(state = initialState.theme, action) {
    switch (action.type) {
        case types.THEME_DARK:
            return {
                ...state,
                ...{
                    theme: action.theme,
                    general : action.general,
                    colors: action.colors,
                    colorsDrawer: action.colorsDrawer,
                    colorText: action.colorText,
                }
            };
        case types.THEME_LIGHT:
            return {
                ...state,
                ...{
                    theme: action.theme,
                    general: action.general,
                    colors: action.colors,
                    colorsDrawer: action.colorsDrawer,
                    colorText: action.colorText,
                }
            };
        default:
            return state
    }
}