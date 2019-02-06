
export interface IAction {
    type: Actions
    payload?: any
}

enum Actions {

    TASKBAR_____SET_HEIGHT = 'TASKBAR_____SET_HEIGHT',
    TASKBAR_____SET_QUICK_ACCESS_WIDTH = 'TASKBAR_____SET_QUICK_ACCESS_WIDTH',
    TASKBAR_____QUICKACCESS_ADD_SHORTCUT = 'TASKBAR_____QUICKACCESS_ADD_SHORTCUT',
    TASKBAR_____QUICKACCESS_REMOVE_SHORTCUT = 'TASKBAR_____QUICKACCESS_REMOVE_SHORTCUT',

    USER_____LOGIN = 'USER_____LOGIN',

    STARTMENU_____OPEN = 'STARTMENU_____OPEN',
    STARTMENU_____CLOSE = 'STARTMENU_____CLOSE',
    STARTMENU_____ADD_RECENT_APPLICATION = 'STARTMENU_____ADD_RECENT_APPLICATION',
    STARTMENU_____PIN_APPLICATION = 'STARTMENU_____PIN_APPLICATION',
    STARTMENU_____UNPIN_APPLICATION = 'STARTMENU_____UNPIN_APPLICATION',

    WINDOWS_____OPEN = 'WINDOWS_____OPEN',
    WINDOWS_____CLOSE = 'WINDOWS_____CLOSE',
    WINDOWS_____SELECT = 'WINDOWS_____SELECT',
    WINDOWS_____MINIMIZE = 'WINDOWS_____MINIMIZE',
    WINDOWS_____MAXIMIZE = 'WINDOWS_____MAXIMIZE',
    WINDOWS_____NORMALIZE = 'WINDOWS_____NORMALIZE',

    DESKTOP_____ADD_SHORTCUT = 'DESKTOP_____ADD_SHORTCUT',
    DESKTOP_____REMOVE_SHORTCUT = 'DESKTOP_____REMOVE_SHORTCUT',
    DESKTOP_____TOGGLE_BACKGROUND = 'DESKTOP_____TOGGLE_BACKGROUND',

}

export default Actions;
