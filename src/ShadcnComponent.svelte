<script lang="ts">
  import ComponentRenderByType from './ComponentRenderByType.svelte';
   //import * as SAccordion from "$lib/components/ui/accordion/index";
  import * as Alert from "$lib/components/ui/alert/index";
  import * as AlertDialog from "$lib/components/ui/alert-dialog/index.js";
  import * as Avatar from "$lib/components/ui/avatar";
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Select from "$lib/components/ui/select/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import { Calendar } from "$lib/components/ui/calendar/index.js";

  import { Checkbox } from "$lib/components/ui/checkbox/index.js";

  import { Command } from "$lib/components/ui/command/index.js";
  
  import { today, getLocalTimeZone } from "@internationalized/date";

  import * as Drawer from "$lib/components/ui/drawer";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import * as Collapsible from "$lib/components/ui/collapsible/index.js";
  import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
  import * as Dialog from "$lib/components/ui/dialog/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import * as HoverCard from "$lib/components/ui/hover-card";
  import * as Menubar from "$lib/components/ui/menubar";
  let checked = false;

  
  let value = today(getLocalTimeZone());
  export let jp_props;


  let components =  {
  'button' : Button,
  'label': Label,
  'checkbox':  Checkbox,
  'calendar': Calendar,
  'alert': Alert.Root,
  'alert_title': Alert.Title,
  'alert_description': Alert.Description,
   'alertdialog': AlertDialog.Root,
    'alertdialog_trigger': AlertDialog.Trigger,
    'alertdialog_content': AlertDialog.Content,
    'alertdialog_header': AlertDialog.Header,
    'alertdialog_title': AlertDialog.Title,
    'alertdialog_description': AlertDialog.Description,
    'alertdialog_footer': AlertDialog.Footer,
    'alertdialog_cancel': AlertDialog.Cancel,
  'alertdialog_action': AlertDialog.Action,
  'avatar': Avatar.Root,
  'avatar_image': Avatar.Image,
  'avatar_fallback': Avatar.Fallback,
  'breadcrumb' : Breadcrumb.Root, 
  'breadcrumb_list' : Breadcrumb.List,
  'breadcrumb_item' : Breadcrumb.Item,
  'breadcrumb_link' : Breadcrumb.Link, 
  'breadcrumb_separator' : Breadcrumb.Separator,
  'breadcrumb_page': Breadcrumb.Page,
  'collapsible': Collapsible.Root,
  'collapsible_trigger': Collapsible.Trigger,
  'collapsible_content': Collapsible.Content,
  'command': Command.Root,
  'command_input': Command.Input,
  'command_list': Command.List,
  'command_empty': Command.Empty,
  'command_group': Command.Group,
  'command_item': Command.Item,
  'command_separator': Command.Separator,
  'dialog': Dialog.Root,
  'dialog_trigger': Dialog.Trigger,
  'dialog_content': Dialog.Content,
  'dialog_header': Dialog.Header,
  'dialog_title': Dialog.Title,
  'dialog_description': Dialog.Description,
  'drawer': Drawer.Root,
  'drawer_trigger': Drawer.Trigger,
  'drawer_content': Drawer.Content,
  'drawer_header': Drawer.Header,
  'drawer_title': Drawer.Title,
  'drawer_description': Drawer.Description,
  'drawer_footer': Drawer.Footer,
  'drawer_button': Drawer.Button,
  'drawer_close': Drawer.Close,
  'dropdownmenu': DropdownMenu.Root,
  'dropdownmenu_trigger': DropdownMenu.Trigger,
  'dropdownmenu_content': DropdownMenu.Content,
  'dropdownmenu_group': DropdownMenu.Group,
  'dropdownmenu_label': DropdownMenu.Label,
  'dropdownmenu_separator': DropdownMenu.Separator,
  'dropdownmenu_item': DropdownMenu.Item,
  'hovercard': HoverCard.Root,
  'hovercard_trigger': HoverCard.Trigger,
  'hovercard_content': HoverCard.Content,
  'menubar': Menubar.Root,
  'menubar_menu': Menubar.Menu,
  'menubar_trigger': Menubar.Trigger,
  'menubar_content': Menubar.Content,
  'menubar_item': Menubar.Item,
  'menubar_shortcut': Menubar.Shortcut,
  'menubar_separator': Menubar.Separator
  
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

  console.log("now processing : ", jp_props.html_tag);
</script>

<svelte:component this={components[jp_props.html_tag]} {...descriptionObject}>
{#if jp_props.text}{jp_props.text}{/if}
  {#each jp_props.object_props as cobj_props}
	{#if cobj_props.show}
	  <svelte:component this={ComponentRenderByType} jp_props={cobj_props}/>
	{/if}
      {/each}
    {#if jp_props.inner_html}{@html jp_props.inner_html}{/if}
      </svelte:component>

