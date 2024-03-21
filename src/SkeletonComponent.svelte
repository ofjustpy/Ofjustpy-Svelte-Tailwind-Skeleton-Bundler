<script>
    export let jp_props;
    import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
    import ComponentRenderByType from './ComponentRenderByType.svelte';
  import { TabGroup, Tab, CodeBlock, TabAnchor } from '@skeletonlabs/skeleton';
  import { SlideToggle } from '@skeletonlabs/skeleton';

  let tabsBasic = 0;
  const components = {
    accordion: Accordion,
    accordionitem: AccordionItem,
  };

  function eventHandlerWrapper(eventType) {
    return function (event) {
        if (jp_props.events.includes(eventType)) {
        eventHandler_CSR(props, event, false);
      }
    };
  }

 function handleDoubleClick(event) {
        //console.log("Double-clicked!");
        
        // You can perform additional actions here
    }
    
  const eventHandlers = {
    click: eventHandlerWrapper('click'),
    change: eventHandlerWrapper('change'),
    submit: eventHandlerWrapper('submit'),
    mouseover: eventHandlerWrapper('mouseover'),
    mouseenter: eventHandlerWrapper('mouseenter'),
    mouseleave: eventHandlerWrapper('mouseleave'),
    mouseout: eventHandlerWrapper('mouseout'),
    dblclick: eventHandlerWrapper('dblclick'),
  };
  
  const descriptionObject = {
    ...jp_props.attrs,
    style: jp_props.style,
    class: jp_props.classes, 
  };

 //const selected_component = components[jp_props.html_tag];

 console.log("IN SkeletonComponentComponents with tag = ");
console.log(jp_props.html_tag);

  
if (jp_props.html_tag === "tab") {
    // Code to execute if jp_props.html_tag is equal to "accordionitem"
  console.log("html_tag is tab");
  console.log(descriptionObject);
  console.log(jp_props.tab_value);
}
  
 
</script>

{#if jp_props.html_tag === 'accordion'}
<svelte:element this=Accordion {...descriptionObject}>
{#each jp_props.object_props as cobj_props}
{#if cobj_props.show}<svelte:component this={ComponentRenderByType} jp_props={cobj_props}/>{/if}{/each}
{#if jp_props.inner_html}{@html jp_props.inner_html}{/if}
</svelte:element>
{:else if jp_props.html_tag === 'accordionitem'}
  <AccordionItem open>
    <svelte:fragment slot="lead">
      {#each jp_props.slot_lead_json as cobj_props}
	{#if cobj_props.show}
	  <svelte:component this={ComponentRenderByType} jp_props={cobj_props}/>
	{/if}
    {/each}
  </svelte:fragment>

    <svelte:fragment slot="summary">
      {#each jp_props.slot_summary_json as cobj_props}
	{#if cobj_props.show}
	  <svelte:component this={ComponentRenderByType} jp_props={cobj_props}/>
	{/if}
    {/each}
  </svelte:fragment>

    <svelte:fragment slot="content">
      {#each jp_props.slot_content_json as cobj_props}
	{#if cobj_props.show}
	  <svelte:component this={ComponentRenderByType} jp_props={cobj_props}/>
	{/if}
    {/each}
  </svelte:fragment>

    <svelte:fragment slot="iconClosed">
      {#each jp_props.slot_iconClosed_json as cobj_props}
	{#if cobj_props.show}
	  <svelte:component this={ComponentRenderByType} jp_props={cobj_props}/>
	{/if}
    {/each}
  </svelte:fragment>

    <svelte:fragment slot="iconOpen">
      {#each jp_props.slot_iconOpen_json as cobj_props}
	{#if cobj_props.show}
	  <svelte:component this={ComponentRenderByType} jp_props={cobj_props}/>
	{/if}
    {/each}
  </svelte:fragment>    
    
    
    {#each jp_props.object_props as cobj_props}
	{#if cobj_props.show}
	  <svelte:component this={ComponentRenderByType} jp_props={cobj_props}/>
	{/if}
    {/each}
  {#if jp_props.inner_html}{@html jp_props.inner_html}{/if}
</AccordionItem>
{:else if jp_props.html_tag === 'tabgroup'}

  <TabGroup {...descriptionObject}>
      {#each jp_props.object_props as cobj_props}
	{#if cobj_props.show}
	  <svelte:component this={ComponentRenderByType} jp_props={cobj_props}/>
	{/if}
      {/each}
      
  </TabGroup>
{:else if jp_props.html_tag === 'tab'}

  <Tab  bind:group={tabsBasic} value={jp_props.tab_value}>
{#if jp_props.text}{jp_props.text}{/if}
        {#each jp_props.object_props as cobj_props}
	{#if cobj_props.show}
	  <svelte:component this={ComponentRenderByType} jp_props={cobj_props}/>
	{/if}
      {/each}
    {#if jp_props.inner_html}{@html jp_props.inner_html}{/if}
  </Tab>
{:else if jp_props.html_tag === 'slidetoggle'}
  <SlideToggle  {...descriptionObject} />
  
{:else}
Not yet implemented
{/if}








