
export interface IAction {
    type: Actions
    payload?: any
}

enum Actions {

    CONFIG_____SET_TASKBAR_HEIGHT = 'CONFIG_____SET_TASKBAR_HEIGHT',

    USER_____LOGIN = 'USER_____LOGIN',

    WINDOWS_____OPEN = 'WINDOWS_____OPEN',

    DESKTOP_____ADD_SHORTCUT = 'DESKTOP_____ADD_SHORTCUT',
    DESKTOP_____REMOVE_SHORTCUT = 'DESKTOP_____REMOVE_SHORTCUT',

}

export default Actions;
