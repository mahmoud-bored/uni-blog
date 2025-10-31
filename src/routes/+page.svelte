<script lang="ts">
    import { Tabs } from "bits-ui";
	import CollapsibleList from "./CollapsibleList.svelte";
	import { db, type DbData } from "$lib/mockDb";
    import { type DataGroup } from "$lib/mockDb";
    
    let tabsHeaderElmnt: HTMLDivElement | null = $state(null)
    let tabsHeaderHeight = $state(0)
    $effect(() => {
        tabsHeaderHeight = tabsHeaderElmnt?.clientHeight || 0
    })
    const anatomyData = Object.entries(db.get("anatomy") as DbData)
    const physiologyData = Object.entries(db.get("physiology") as DbData)
    const biochemistryData = Object.entries(db.get("biochemistry") as DbData)
    const histologyData = Object.entries(db.get("histology") as DbData)
    const radiologyData = Object.entries(db.get("radiology") as DbData)
    const epeData = Object.entries(db.get("epe") as DbData)
    const utmbData = Object.entries(db.get("utmb") as DbData)
</script>                                                                       

<main class="bg-[#EFF3FB] min-h-[calc(100vh-64px)]">
    <div class="flex justify-center items-center flex-col w-full p-4">
        <p class="text-2xl text-center font-bold text-earth-800">Introducing: 3$ LMS alternative!</p>
        <p class="text-center text-lg text-earth-700 mt-1">a solution that <span class="font-bold bg-earth-800 text-navy-50 py-px px-2 rounded-sm drop-shadow-sm">Doesn't Shutdown</span> right before an exam!</p>
    </div>

    <div>
        <div class="pt-6 flex justify-center items-center">
            <Tabs.Root
                value="anatomy"
                class="rounded-card border-muted bg-background-alt shadow-card w-11/12 max-w-[1000px] min-h-[650px] border p-3 bg-earth-200 rounded-md max-h-[90vh]"
            >
                <Tabs.List class="flex flex-wrap rounded-md shadow-mini-inset drop-shadow-xl z-10 relative w-full gap-1 p-2 text-sm font-semibold leading-[0.01em] bg-earth-300" bind:ref={tabsHeaderElmnt}>
                    <Tabs.Trigger
                        value="anatomy"
                        class="data-[state=active]:shadow-mini h-8 min-w-36 grow rounded-[7px] bg-transparent py-2 data-[state=active]:bg-earth-800 data-[state=active]:text-earth-100 cursor-pointer hover:bg-earth-500 transition"
                    >
                        Anatomy
                    </Tabs.Trigger>
                
                    <Tabs.Trigger
                        value="physiology"
                        class="data-[state=active]:shadow-mini h-8 min-w-36 grow rounded-[7px] bg-transparent py-2 data-[state=active]:bg-earth-800 data-[state=active]:text-earth-100 cursor-pointer hover:bg-earth-500 transition"
                    >
                        Physiology
                    </Tabs.Trigger>
                    <Tabs.Trigger
                        value="biochemistry"
                        class="data-[state=active]:shadow-mini h-8 min-w-36 grow rounded-[7px] bg-transparent py-2 data-[state=active]:bg-earth-800 data-[state=active]:text-earth-100 cursor-pointer hover:bg-earth-500 transition"
                    >
                        Biochemistry
                    </Tabs.Trigger>
                    <Tabs.Trigger
                        value="histology"
                        class="data-[state=active]:shadow-mini h-8 min-w-36 grow rounded-[7px] bg-transparent py-2 data-[state=active]:bg-earth-800 data-[state=active]:text-earth-100 cursor-pointer hover:bg-earth-500 transition"
                    >
                        Histology
                    </Tabs.Trigger>
                    <Tabs.Trigger value="radiology"
                        class="data-[state=active]:shadow-mini h-8 min-w-36 grow rounded-[7px] bg-transparent py-2 data-[state=active]:bg-earth-800 data-[state=active]:text-earth-100 cursor-pointer hover:bg-earth-500 transition"
                    >
                        Radiology
                    </Tabs.Trigger>
                    <Tabs.Trigger value="epe"
                        class="data-[state=active]:shadow-mini h-8 min-w-36 grow rounded-[7px] bg-transparent py-2 data-[state=active]:bg-earth-800 data-[state=active]:text-earth-100 cursor-pointer hover:bg-earth-500 transition"
                    >
                        EPE
                    </Tabs.Trigger>
                    <Tabs.Trigger value="utmb"
                        class="data-[state=active]:shadow-mini h-8 min-w-36 grow rounded-[7px] bg-transparent py-2 data-[state=active]:bg-earth-800 data-[state=active]:text-earth-100 cursor-pointer hover:bg-earth-500 transition"
                    >
                        UTMB
                    </Tabs.Trigger>
                </Tabs.List>

                <Tabs.Content value="anatomy" class="select-none pt-3 overflow-auto" style="max-height: {650-tabsHeaderHeight-30}px">
                    {#each anatomyData as [key, value]}
                        <CollapsibleList dataSet={value as DataGroup}/>
                    {/each}
                </Tabs.Content>

                <Tabs.Content value="physiology" class="select-none pt-3 overflow-auto" style="max-height: {650-tabsHeaderHeight-30}px">
                    {#each physiologyData as [key, value]}
                        <CollapsibleList dataSet={value as DataGroup}/>
                    {/each}
                </Tabs.Content>

                <Tabs.Content value="biochemistry" class="select-none pt-3 overflow-auto" style="max-height: {650-tabsHeaderHeight-30}px">
                    {#each biochemistryData as [key, value]}
                        <CollapsibleList dataSet={value as DataGroup}/>
                    {/each}
                </Tabs.Content>

                <Tabs.Content value="histology" class="select-none pt-3 overflow-auto" style="max-height: {650-tabsHeaderHeight-30}px">
                    {#each histologyData as [key, value]}
                        <CollapsibleList dataSet={value as DataGroup}/>
                    {/each}
                </Tabs.Content>

                <Tabs.Content value="radiology" class="select-none pt-3 overflow-auto" style="max-height: {650-tabsHeaderHeight-30}px">
                    {#each radiologyData as [key, value]}
                        <CollapsibleList dataSet={value as DataGroup}/>
                    {/each}
                </Tabs.Content>

                <Tabs.Content value="epe" class="select-none pt-3 overflow-auto" style="max-height: {650-tabsHeaderHeight-30}px">
                    {#each epeData as [key, value]}
                        <CollapsibleList dataSet={value as DataGroup}/>
                    {/each}
                </Tabs.Content>

                <Tabs.Content value="utmb" class="select-none pt-3 overflow-auto" style="max-height: {650-tabsHeaderHeight-30}px">
                    {#each utmbData as [key, value]}
                        <CollapsibleList dataSet={value as DataGroup}/>
                    {/each}
                </Tabs.Content>

            </Tabs.Root>
        </div>
    </div>
</main>