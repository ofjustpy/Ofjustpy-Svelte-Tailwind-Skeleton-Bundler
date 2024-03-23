<script>
  import Slider from './meltui/Slider.svelte';
  import Avatar from './meltui/Avatar.svelte';
  import Calendar from './meltui/Calendar.svelte';
  import Checkbox from './meltui/Checkbox.svelte';
  export let jp_props;

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

  
  
</script>

{#if jp_props.html_tag === 'slider'}
  <!-- <svelte:component this={Slider} jp_props={jp_props} /> -->
<svelte:component this={Slider} jp_props={jp_props} />

{:else if jp_props.html_tag === 'avatar'}
  <svelte:component this={Avatar} jp_props={jp_props} />

{:else if jp_props.html_tag === 'calendar'}
  <svelte:component this={Calendar} jp_props={jp_props} />

{:else if jp_props.html_tag === 'checkbox'}
  <svelte:component this={Checkbox} jp_props={jp_props} />    
{/if}
