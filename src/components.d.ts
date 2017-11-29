/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */


import {
  FrostedGlassContainer as FrostedGlassContainer
} from './components/frosted-glass-container/frosted-glass-container';

declare global {
  interface HTMLFrostedGlassContainerElement extends FrostedGlassContainer, HTMLElement {
  }
  var HTMLFrostedGlassContainerElement: {
    prototype: HTMLFrostedGlassContainerElement;
    new (): HTMLFrostedGlassContainerElement;
  };
  interface HTMLElementTagNameMap {
    "frosted-glass-container": HTMLFrostedGlassContainerElement;
  }
  interface ElementTagNameMap {
    "frosted-glass-container": HTMLFrostedGlassContainerElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "frosted-glass-container": JSXElements.FrostedGlassContainerAttributes;
    }
  }
  namespace JSXElements {
    export interface FrostedGlassContainerAttributes extends HTMLAttributes {
      
        blurAmount?: string
    }
  }
}


import {
  FrostedGlass as FrostedGlass
} from './components/frosted-glass/frosted-glass';

declare global {
  interface HTMLFrostedGlassElement extends FrostedGlass, HTMLElement {
  }
  var HTMLFrostedGlassElement: {
    prototype: HTMLFrostedGlassElement;
    new (): HTMLFrostedGlassElement;
  };
  interface HTMLElementTagNameMap {
    "frosted-glass": HTMLFrostedGlassElement;
  }
  interface ElementTagNameMap {
    "frosted-glass": HTMLFrostedGlassElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "frosted-glass": JSXElements.FrostedGlassAttributes;
    }
  }
  namespace JSXElements {
    export interface FrostedGlassAttributes extends HTMLAttributes {
      
    }
  }
}

