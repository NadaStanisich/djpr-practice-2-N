<script lang="ts">
    import { Heading } from "flowbite-svelte";
    import ProductInfo from "./ProductInfo.svelte";
    import UserInfo from "./UserInfo.svelte";
</script>

<div class="flex flex-col w-full">
    <div class="flex flex-row w-full">
        <ProductInfo/>
        <br>
        <hr>
        <br>
        <UserInfo/>
    </div>
</div>