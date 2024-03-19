<script>
   import Htmlcomponents from './Htmlcomponents.svelte';
   import SVGComponent from './SVGComponent.svelte';
   import FontAwesomeComponent from './FontAwesomeComponent.svelte';
   import SkeletonComponent from './SkeletonComponent.svelte';
   
   let components =  {'html_component': Htmlcomponents,
		    'svg_component': SVGComponent,
		    'fontawesome_component': FontAwesomeComponent,
		    'skeleton_component': SkeletonComponent
                    
                    };
   export let jp_props;
		  
</script>

<svelte:component this={components[jp_props.vue_type]} jp_props={jp_props} />




