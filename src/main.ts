import './app.postcss';
import App from './App.svelte';
import { justpyComponents, setJustpyComponents } from './store_jpcomponents';
import SkeletonUI from './SkeletonUI.svelte';


import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
import { storePopup, setInitialClassState } from '@skeletonlabs/skeleton';

setInitialClassState()
storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

// const app = new SkeletonUI({
//     target: document.getElementById('app') as Element
//  });

export {App, SkeletonUI, justpyComponents, setJustpyComponents};
