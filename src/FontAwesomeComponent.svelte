<script>
    export let jp_props;
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    import * as icons from '@fortawesome/free-solid-svg-icons';

  const descriptionObject = {
    ...jp_props.attrs,
    style: jp_props.style,
    class: jp_props.classes, 
  };

 console.log("IN FontAwesomeComponents with tag = ");
 console.log(jp_props.html_tag);
 console.log(jp_props.icon_label);
 console.log(descriptionObject);
 
</script>

<FontAwesomeIcon icon={icons[jp_props.icon_label]} {...descriptionObject} />

