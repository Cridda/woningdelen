// tslint:disable:max-classes-per-file
// tslint:disable:no-any
interface CSSModule {
    [className: string]: string;
}

// type shims for CSS modules

declare module '*.module.scss' {
    const cssModule: CSSModule;
    export = cssModule;
}

declare module '*.module.css' {
    const cssModule: CSSModule;
    export = cssModule;
}

declare module '*.png';

declare module 'intersection-observer';

declare module 'gatsby-plugin-gtag' {
    interface OutboundLinkProps {
        onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    }

    export const OutboundLink: React.ComponentType<React.HTMLProps<HTMLAnchorElement>>;
}

declare module 'react-in-viewport' {
    import { ComponentClass, ComponentType as Component, RefObject, FC, ReactElement } from 'react';

    export interface InnerViewportProps {
        inViewport: boolean;
        enterCount: number;
        leaveCount: number;
    }

    export interface OuterViewportProps {
        onEnterViewport?: () => void;
        onLeaveViewport?: () => void;
        innerRef?: RefObject<any>;
    }

    export type ViewportProps = InnerViewportProps & OuterViewportProps;

    interface Config {
        disconnectOnLeave: boolean;
    }

    function withViewport<TInner extends InnerViewportProps, TOutter extends OuterViewportProps>(
        component: Component<TInner>,
        options?: IntersectionObserverInit,
        config?: Config
    ): ComponentClass<TOutter>;

    export default withViewport;
}
