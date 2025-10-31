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
        class="w-full md:w-[calc(100%-30px)] h-10 rounded-md bg-earth-300 text-foreground shadow-btn inline-flex items-center justify-center transition-all active:scale-[0.98] drop-shadow-sm"
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
                <a href="{value[3]}" class="flex" target="_blank">
                    <button class="rounded-9px w-full md:w-[calc(100%-40px)] items-center p-3 drop-shadow-sm rounded-sm bg-earth-300 hover:bg-earth-500 transition cursor-pointer flex gap-3 font-bold">
                        <!-- <a href="/" class="text-blue-600 hover:text-blue-800 underline">{value[1]}</a> -->
                        {#if value[2] === "docx"}
                            <div class="p-1 bg-[#2a5599] rounded-sm">
                                <MicrosoftWordLogo class="size-5" color="#cedaf2" />
                            </div>
                        {:else if value[2] === "pdf"}
                            <div class="p-1 bg-[#de534e] rounded-sm">
                                <FilePdf class="size-5" color="#edf9f5" />
                            </div>
                        {:else if value[2] === "ppt"}
                            <div class="p-1 bg-[#d34827] rounded-sm">
                                <MicrosoftPowerpointLogo class="size-5" color="#edf9f5" />
                            </div>
                        {:else if value[2] === "yt"}
                            <div class="px-1 py-px bg-[#ff0033] rounded-sm">
                                <YoutubeLogo class="size-5" color="#edf9f5" />
                            </div>
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