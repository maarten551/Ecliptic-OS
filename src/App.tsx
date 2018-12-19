import * as React from 'react';
import OperatingSystem from './containers/OperatingSystem/OperatingSystem';
import { Provider } from 'react-redux';
import store from './store/initialize';

export class App extends React.Component<{}, {}> {
    public render() {
        return (
            <Provider store={store}>
                <OperatingSystem />
            </Provider>
        );
    }
}

export default App;
