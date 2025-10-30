<script lang="ts">
	import type { DataGroup } from "$lib/mockDb";
    import { Collapsible } from "bits-ui"
    import CaretDown from "phosphor-svelte/lib/CaretDown";
    import MicrosoftWordLogo from "phosphor-svelte/lib/MicrosoftWordLogo";
    import FilePdf from "phosphor-svelte/lib/FilePdf";
    import MicrosoftPowerpointLogo from "phosphor-svelte/lib/MicrosoftPowerpointLogo";
    import YoutubeLogo from "phosphor-svelte/lib/YoutubeLogo";
    
    
    let {
        dataSet,
    }: {
        dataSet: DataGroup
    } = $props()

    const data = dataSet.data
    const dataObj = Object.entries(data)
</script>

<Collapsible.Root class="w-full space-y-3 pl-3">
    <Collapsible.Trigger
        class="w-full h-10 rounded-md bg-earth-300 text-foreground shadow-btn inline-flex items-center justify-center transition-all active:scale-[0.98]"
        aria-label="Show Lectures"
    >
        <div class="flex items-center justify-between px-5 w-full">
            <h4 class="text-[15px] font-medium">{dataSet.title}</h4>
            <CaretDown class="size-4" weight="bold" />
        </div>
    </Collapsible.Trigger>
    
    <Collapsible.Content
        hiddenUntilFound
        class="data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up space-y-2 font-mono text-[15px] data-[state=open]:pb-4 ml-2"
    >
        {#each dataObj as [key, value]}
            {#if value[0] === "link"}
                <a href="/" class="flex">
                    <button class="rounded-9px w-full items-center p-3 bg-earth-400 rounded-sm hover:bg-earth-500 transition cursor-pointer flex gap-3 font-bold">
                        <!-- <a href="/" class="text-blue-600 hover:text-blue-800 underline">{value[1]}</a> -->
                        {#if value[2] === "docx"}
                            <MicrosoftWordLogo class="size-5" />
                        {:else if value[2] === "pdf"}
                            <FilePdf class="size-5" />
                        {:else if value[2] === "ppt"}
                            <MicrosoftPowerpointLogo class="size-5" />
                        {:else if value[2] === "yt"}
                            <YoutubeLogo class="size-5" />
                        {/if}
                        <p class="w-full text-left">{value[1]}</p>
                        
                    </button>
                </a>
            {:else if value[0] === "header"}
                <hr class="w-full border border-earth-400 mt-3" />
                <div class="text-[15px] font-semibold leading-none tracking-[-0.01em] pl-3">
                    {value[1]}
                </div>
            {/if}

        {/each}
    </Collapsible.Content>
</Collapsible.Root>