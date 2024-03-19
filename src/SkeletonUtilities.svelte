<script lang="ts">
import { initializeStores } from '@skeletonlabs/skeleton';

import type { ToastSettings, ToastStore } from '@skeletonlabs/skeleton';
import { getToastStore } from '@skeletonlabs/skeleton';
import { Toast} from '@skeletonlabs/skeleton';

initializeStores();
export let toastStore = getToastStore();

export function triggerToast(term: string): void {
		const t: ToastSettings = { message: `You selected the <u>${term}</u> action.` };
		toastStore.trigger(t);
	}


</script>
<Toast />
