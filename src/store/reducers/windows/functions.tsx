import {IReducerWindows} from './index';
import {IAction} from '../../actionTypes';
import {IWindowInstance, WindowInstanceType} from '../../../apptypings/window';
import {cloneDeep} from 'lodash';

export default {

    open: (oldState: IReducerWindows, action: IAction): IReducerWindows => {
        const { application, type } = action.payload;
        const uniqueInstanceCounter = oldState.uniqueInstanceCounter + 1;

        const windows: IWindowInstance[] = [...oldState.windows];

        const window: IWindowInstance = {
            instanceId: uniqueInstanceCounter,
            type: type ? type : WindowInstanceType.APPLICATION,
            application: cloneDeep(application),
            maximized: false,
            minimized: false
        };
        windows.push(window);

        return {
            ...oldState,
            uniqueInstanceCounter,
            windows
        };
    },
    close: (oldState: IReducerWindows, action: IAction): IReducerWindows => {
        const { instanceId } = action.payload;

        let windows = [...oldState.windows];
        windows = windows.filter(w => w.instanceId !== instanceId);

        return {
            ...oldState,
            windows
        };
    },
    select: (oldState: IReducerWindows, action: IAction): IReducerWindows => {
        const { instanceId } = action.payload;

        let windows = [...oldState.windows];
        const window: IWindowInstance = {...windows.find(w => w.instanceId === instanceId)}; // maybe dont copy?
        window.minimized = false;
        windows = windows.filter(w => w.instanceId !== instanceId);
        windows.push(window);

        return {
            ...oldState,
            windows
        };
    },
    minimize: (oldState: IReducerWindows, action: IAction): IReducerWindows => {
        const { instanceId } = action.payload;

        let windows = [...oldState.windows];
        const window: IWindowInstance = {...windows.find(w => w.instanceId === instanceId)};
        window.minimized = true;
        windows = windows.filter(w => w.instanceId !== instanceId);
        windows.push(window);

        return {
            ...oldState,
            windows
        };
    },
    maximize: (oldState: IReducerWindows, action: IAction): IReducerWindows => {
        const { instanceId } = action.payload;

        let windows = [...oldState.windows];
        const window: IWindowInstance = {...windows.find(w => w.instanceId === instanceId)};
        window.maximized = true;
        windows = windows.filter(w => w.instanceId !== instanceId);
        windows.push(window);

        return {
            ...oldState,
            windows
        };
    },
    normalize: (oldState: IReducerWindows, action: IAction): IReducerWindows => {
        const { instanceId } = action.payload;

        let windows = [...oldState.windows];
        const window: IWindowInstance = {...windows.find(w => w.instanceId === instanceId)};
        window.maximized = false;
        windows = windows.filter(w => w.instanceId !== instanceId);
        windows.push(window);

        return {
            ...oldState,
            windows
        };
    },
    updateTitle: (oldState: IReducerWindows, action: IAction): IReducerWindows => {
        const { instanceId, title } = action.payload;

        let windows = [...oldState.windows];
        const window: IWindowInstance = {...windows.find(w => w.instanceId === instanceId)};
        window.application.window = cloneDeep(window.application.window);
        window.application.window.title = title;
        windows = windows.filter(w => w.instanceId !== instanceId);
        windows.push(window);

        return {
            ...oldState,
            windows
        };
    }

}
