<script lang="ts">
  import { createCheckbox, melt } from '@melt-ui/svelte';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import { faCheck, faMinus } from '@fortawesome/free-solid-svg-icons'; // Assuming solid icons

  export let jp_props;
  const {
    elements: { root, input },
    helpers: { isChecked, isIndeterminate },
  } = createCheckbox(
  jp_props.attrs
  );
  
</script>

<form>
  <div class={jp_props.root_classes}>
    <button
      use:melt={$root}
      class={jp_props.button_classes}
      
      id="checkbox"
    >
      {#if $isIndeterminate}
	<FontAwesomeIcon icon={faMinus} size="1.5em"/>
	
      {:else if $isChecked}
	<FontAwesomeIcon icon={faCheck} size="1.5em"/>
      {/if}
      <input use:melt={$input} />
    </button>
    <label class={jp_props.label_classes} for="checkbox">
      {jp_props.label_text}
    </label>
  </div>
</form>
