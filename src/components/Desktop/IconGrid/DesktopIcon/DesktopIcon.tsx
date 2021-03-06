import * as React from 'react';
import * as classes from './DesktopIcon.module.scss';
import {ApplicationId} from '../../../../appdata/applications';

export interface IDesktopIconProps {
    applicationId: ApplicationId
    iconSrc: string
    name: string
    scale?: number
    openWindow: (applicationId: ApplicationId) => void
}

const desktopIcon = (props: IDesktopIconProps) => {
    const { applicationId, iconSrc, name, scale } = props;

    return (
        <div className={classes.root} onClick={() => props.openWindow(applicationId)}>
            <div className={classes.iconWrapper}>
                <img src={iconSrc} style={{ transform: `scale(${scale ? scale : 1})` }} draggable={false} />
            </div>
            <div className={classes.nameWrapper}>
                {name}
            </div>
        </div>
    );
};

export default desktopIcon;
