import * as React from 'react';
import * as classes from './InternetExplorer.module.scss';
import Window from '../../components/Window/Window';
import applications from '../../appdata/applications';

export class InternetExplorer extends React.Component<{}, {}> {
    public render() {
        const { name, iconSrc, minWidth, minHeight } = applications.find(a => a.id === 'ie');
        return (
            <Window title={name} minWidth={minWidth} minHeight={minHeight} iconSrc={iconSrc}>
                <div className={classes.root}>
                    INTERWEBZ EXPLORER
                </div>
            </Window>
        );
    }
}

export default InternetExplorer;
