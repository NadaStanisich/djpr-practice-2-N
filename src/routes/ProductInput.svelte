<script lang="ts">
    import { Button, Input } from 'flowbite-svelte';
    let productId: number = 0;
    let productName: string = "";
    let productQty: number = 0;
    let productPrice: number = 0.00;

</script>

<div>
    <form>
        <Input type="number" placeholder="Product ID" bind:value={productId}/>
        <Input type="text" placeholder="Product Name" bind:value={productName}/>
        <Input type="number" placeholder="Product Quantity" bind:value={productQty}/>
        <Input type="number" placeholder="Product Price" bind:value={productPrice}/>
        <Button type="submit">Add Product</Button>
    </form>
</div>