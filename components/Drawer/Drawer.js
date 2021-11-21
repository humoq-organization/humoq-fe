import React from 'react';

export const DrawerComponent = React.forwardRef((props, ref) => {
    return (
        <>
            {props?.active && <div className="DrawerOverlay" />}

            <div ref={ref} className={`DrawerHolder ${props?.active ? 'DrawerHolderActive' : 'DrawerHolderDeActive'}`}>
                <div className="DrawerContentHolder">
                    <div onClick={props?.onClickClose} className="DrawerCloseHolder" />
                    <div className="DrawerRightContent">
                    {props?.children}
                    </div>
                </div>
            </div>

        </>
    )
})

export default DrawerComponent;