
<script lang="ts">
let visible: boolean = true;
</script>

{#if visible}
    <aside class="alert variant-ghost">
        <!-- Icon -->
	        <icon class="fa-solid fa-triangle-exclamation"></icon>
        <icon class="fa-solid fa-triangle-exclamation"></icon>		
        <!-- Message -->
        <div class="alert-message">
            <h3 class="h3">A title</h3>
            <p>Got-Message</p>
        </div>
        <!-- Actions -->
        <div class="alert-actions">
	<button class="btn variant-filled">Action</button>
	<button class="btn-icon variant-filled"><i class="fa-solid fa-xmark" /></button>
	</div>
    </aside>
{/if}
            