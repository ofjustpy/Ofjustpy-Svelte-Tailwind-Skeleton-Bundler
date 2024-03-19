<script>
  export let jp_props;
  export let props = {};
  props['jp_props'] = jp_props;
    import ComponentRenderByType from './ComponentRenderByType.svelte';

  const selfClosingTags = ['hr', 'input', 'area', 'base', 'br', 'col', 'embed', 'img', 'link', 'meta', 'param', 'source', 'track', 'wbr'];

  function eventHandlerWrapper(eventType) {
    return function (event) {
      //console.log("in eventhandler")
      //console.log(eventType)
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

  $: descriptionObject = {
    ...jp_props.attrs,
    style: jp_props.style,
    class: jp_props.classes, 
  };

</script><svelte:element
    this={jp_props.html_tag}
    {...descriptionObject}
    on:click={eventHandlers.click}
    on:change={eventHandlers.change}
    on:submit|preventDefault={eventHandlers.submit}
    on:mouseover={eventHandlers.mouseover}
    on:mouseenter={eventHandlers.mouseenter}
    on:mouseleave={eventHandlers.mouseleave}
    on:mouseout={eventHandlers.mouseout}
    on:dblclick={eventHandlers.dblclick}
>{#if jp_props.text}{jp_props.text}{/if}{#each jp_props.object_props as cobj_props}{#if cobj_props.show}<svelte:component this={ComponentRenderByType} jp_props={cobj_props}/>{/if}{/each}{#if jp_props.inner_html}{@html jp_props.inner_html}{/if}</svelte:element>
