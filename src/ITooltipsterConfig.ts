/// <reference path="../typings/browser.d.ts" />

interface JQuery {
    tooltipster(): JQuery;
    tooltipster(config: ngTooltipster.ITooltipsterConfig): JQuery;

    tooltipster(methodName: string): void;
    
    /**
     * temporarily disable a tooltip from being able to open
     */
    tooltipster(methodName: 'disable'): void;
    
    /**
     * if a tooltip was disabled from opening, reenable its previous functionality
     */
    tooltipster(methodName: 'enable'): void;
    
    /**
     * hide and destroy tooltip functionality
     */
    tooltipster(methodName: 'destroy'): void;
    tooltipster(methodName: 'content'): void;
    tooltipster(methodName: string, myNewContent: string): void;
    tooltipster(methodName: 'content', myNewContent: string): void;
    tooltipster(methodName: 'option', optionName: string): void;
    tooltipster(methodName: string, name: string,nvalueame: string): void;
    tooltipster(methodName: 'option', optionName: string, optionValue: string): void;
}

module ngTooltipster {

    export interface ITooltipster {

    }



    export interface ITooltipsterConfig extends ng.IAttributes {
        /**
         * Determines how the tooltip will animate in and out. Feel free to modify or create custom transitions in the tooltipster.css file. In IE9 and 8, all animations default to a JavaScript generated, fade animation. 
         * Default: 'fade'
         */
        animation: string;

        /**
         * Adds the "speech bubble arrow" to the tooltip. 
         * Default: true
         */
        arrow: boolean;

        /**
         * Select a specific color for the "speech bubble arrow". 
         * Default: will inherit the tooltip's background color
         */
        arrowColor: string;

        /**
         * If autoClose is set to false, the tooltip will never close unless you call the 'hide' method yourself. 
         * Default: true
         */
        autoClose: boolean;

        /**
         * If set, this will override the content of the tooltip. 
         * Default: null
         */
        content: string | JQuery;

        /**
         * If the content of the tooltip is provided as a string, it is displayed as plain text by default. If this content should actually be interpreted as HTML, set this option to true. 
         * Default: false
         */
        contentAsHTML: boolean;

        /**
         * If you provide a jQuery object to the 'content' option, this sets if it is a clone of this object that should actually be used. 
         * Default: true
         */
        contentCloning: boolean;

        /**
         * Tooltipster logs notices into the console when you're doing something you ideally shouldn't be doing. Set to false to disable logging. 
         * Default: true
         */
        debug: boolean;

        /**
         * Delay how long it takes (in milliseconds) for the tooltip to start animating in. 
         * Default: 200
         */
        delay: number;

        /**
         * Set a minimum width for the tooltip. 
         * Default: 0 (auto width)
         */
        minWidth: number;

        /**
         * Set a maximum width for the tooltip. 
         * Default: null (no max width)
         */
        maxWidth: number;

        /**
         * Create a custom function to be fired only once at instantiation. If the function returns a value, this value will become the content of the tooltip. See the advanced section to learn more. 
         * Default: function(origin, content) {}
         */
        functionInit: (origin, content) => void;

        /**
         * 	Create a custom function to be fired before the tooltip opens. This function may prevent or hold off the opening. See the advanced section to learn more. 
         * Default: function(origin, continueTooltip) { continueTooltip(); }
         */
        functionBefore: (origin, continueTooltip) => void;

        /**
         * Create a custom function to be fired when the tooltip and its contents have been added to the DOM. 
         * Default: function(origin, tooltip) {}
         */
        functionReady: (origin, tooltip) => void;

        /**
         * Create a custom function to be fired once the tooltip has been closed and removed from the DOM. 
         * Default: function(origin) {}
         */
        functionAfter: (origin) => void;

        /**
         * If true, the tooltip will close if its origin is clicked. This option only applies when 'trigger' is 'hover' and 'autoClose' is false. 
         * Default: false
         */
        hideOnClick: boolean;

        /**
         * If using the iconDesktop or iconTouch options, this sets the content for your icon. 
         * Default: '(?)'
         */
        icon: string | JQuery;

        /**
         * If you provide a jQuery object to the 'icon' option, this sets if it is a clone of this object that should actually be used. 
         * Default: true
         */
        iconCloning: boolean;

        /**
         * Generate an icon next to your content that is responsible for activating the tooltip on non-touch devices. 
         * Default: false
         */
        iconDesktop: boolean;

        /**
         * If using the iconDesktop or iconTouch options, this sets the class on the icon (used to style the icon). 
         * Default: 'tooltipster-icon'
         */
        iconTheme: boolean;

        /**
         * Generate an icon next to your content that is responsible for activating the tooltip on touch devices (tablets, phones, etc). 
         * Default: false
         */
        iconTouch: boolean;

        /**
         * Give users the possibility to interact with the tooltip. Unless autoClose is set to false, the tooltip will still close if the user moves away from or clicks out of the tooltip. 
         * Default: false
         */
        interactive: boolean;

        /**
         * If the tooltip is interactive and activated by a hover event, set the amount of time (milliseconds) allowed for a user to hover off of the tooltip activator (origin) on to the tooltip itself - keeping the tooltip from closing. 
         * Default: 350
         */
        interactiveTolerance: number;

        /**
         * Allows you to put multiple tooltips on a single element. Read further instructions down this page. 
         * Default: false
         */
        multple: boolean;

        /**
         * Offsets the tooltip (in pixels) farther left/right from the origin. 
         * Default: 0
         */
        offsetX: number;

        /**
         * Offsets the tooltip (in pixels) farther up/down from the origin. 
         * Default: 0
         */
        offsetY: number;

        /**
         * If true, only one tooltip will be allowed to be active at a time. Non-autoclosing tooltips will not be closed though. 
         * Default: false
         */
        onlyOne: boolean;

        /**
         * right, left, top, top-right, top-left, bottom, bottom-right, bottom-left
         * Set the position of the tooltip. 
         * Default: 'top
         */
        position: string;

        /**
         * Will reposition the tooltip if the origin moves. As this option may have an impact on performance, we suggest you enable it only if you need to. 
         * Default: false
         */
        positionTracker: boolean;

        /**
         * Called after the tooltip has been repositioned by the position tracker (if enabled). 
         * Default: A function that will close the tooltip if the trigger is 'hover' and autoClose is false.
         */
        positionTrackerCallback: () => void;

        /**
         * Specify if a TITLE attribute should be restored on the HTML element after a call to the 'destroy' method. This attribute may be omitted, or be restored with the value that existed before Tooltipster was initialized, or be restored with the stringified value of the current content. Note: in case of multiple tooltips on a single element, only the last destroyed tooltip may trigger a restoration. 
         * Default: 'current'
         */
        restoration: string;

        /**
         * Set the speed of the animation. 
         * Default: 350
         */
        speed: number;

        /**
         * How long the tooltip should be allowed to live before closing. 
         * Default: 0 (disabled)
         */
        timer: number;

        /**
         * Set the theme used for your tooltip. 
         * Default: 'tooltipster-default'
         */
        theme: number;

        /**
         * If set to false, tooltips will not show on pure-touch devices, unless you open them yourself with the 'show' method. Touch gestures on devices which also have a mouse will still open the tooltips though. 
         * Default: true
         */
        touchDevices: boolean;

        /**
         * Set how tooltips should be activated and closed. See the advanced section to learn how to build custom triggers. 
         * Default: 'hover'
         */
        trigger: string;

        /**
         * If a tooltip is open while its content is updated, play a subtle animation when the content changes. 
         * Default: true
         */
        updateAnimation: boolean;

    }
}
