/**
 * Global type declarations for Phenix
 * 
 * These declarations extend standard DOM interfaces with
 * custom properties used by Phenix components
 */

// Extend HTMLElement with custom properties
declare global {
    interface HTMLElement {
        _phenixInViewHandler?: (event: any) => void;
        _scrollHandler?: EventListener;
        _phenixInViewState?: boolean;
        _phenixObserver?: IntersectionObserver;
        _phenixDirection?: string;
        _phenixIntersectionRatio?: number;
    }
    
    interface Window {
        _phenixViewportCache?: {
            width: number;
            height: number;
        };
        _phenixLastWidth?: number;
        _phenixLastHeight?: number;
    }
}

// Extend PhenixElements with method declarations
declare module ".." {
    interface PhenixElements {
        // Animations methods
        animations(options?: {
            animation?: string,
            duration?: number,
            delay?: number,
            animateCSS?: boolean|string[]|string,
            directionFix?: boolean,
            flow?: string,
            into?: number,
            offset?: number,
            threshold?: number,
            lazyloading?: boolean,
            lazygroup?: any,
            removeOnExit?: boolean,
            directionalAnimate?: boolean,
            useObserver?: boolean,
        }): PhenixElements;
        cleanupAnimations(): PhenixElements;
        loadAnimationCSS(thirdParty?: boolean|string[]|string): PhenixElements;
        
        // Viewport methods
        inView(options?: {
            flow?: string,
            into?: number,
            offset?: number,
            threshold?: number,
            useObserver?: boolean,
        }, flowOn?: string): boolean;
        cleanupInView(): PhenixElements;
    }
}

// Make this a module
export {}; 