<script>
   import Htmlcomponents from './Htmlcomponents.svelte';
   import SVGComponent from './SVGComponent.svelte';
   import FontAwesomeComponent from './FontAwesomeComponent.svelte';
   import SkeletonComponent from './SkeletonComponent.svelte';
  import MeltUIComponent from './MeltUIComponent.svelte';
  
   let components =  {'html_component': Htmlcomponents,
		    'svg_component': SVGComponent,
		    'fontawesome_component': FontAwesomeComponent,
		      'skeleton_component': SkeletonComponent,
		      'meltui_component': MeltUIComponent
                    
                    };
   export let jp_props;
   console.log("in ComponentRenderByType ");
   console.log(jp_props.vue_type);
   
</script>

<svelte:component this={components[jp_props.vue_type]} jp_props={jp_props} />




