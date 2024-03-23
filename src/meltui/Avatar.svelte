<script lang="ts">
  import { createAvatar, melt } from '@melt-ui/svelte';
export let jp_props;
  const {
    elements: { image, fallback },
  } = createAvatar(jp_props.attrs);

</script>


  <div
    class={jp_props.root_classes}
  >
    <img
      use:melt={$image}
      alt="Avatar"
      class={jp_props.img_classes}
    />
    <span use:melt={$fallback} class={jp_props.fallback_classes}
      >{jp_props.fallback_text}</span
    >
  </div>



