<script lang="ts">
    import type { Product } from '$lib/product';
    import { Heading, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
    import { CloseCircleSolid } from "flowbite-svelte-icons";
    import { products } from './store'; // Import the store from store.ts

    

    
    function deleteClickHandler(productId: number) {
        products.update((existingProducts: Product[]) => existingProducts.filter(product => product.id !== productId));
    }
</script>

<div class="p-5 w-full border-solid border-2"> 
    <Heading tag='h3'>Products</Heading>
    <Table>
        <TableHead>
            <TableHeadCell>Id</TableHeadCell>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Quantity</TableHeadCell>
            <TableHeadCell>Price</TableHeadCell>
            <TableHeadCell>Action</TableHeadCell>
        </TableHead>
        <TableBody>
            {#each $products as product (product.id)}
                <TableBodyRow key={product.id}>
                    <TableBodyCell>{product.id}</TableBodyCell>
                    <TableBodyCell>{product.name}</TableBodyCell>
                    <TableBodyCell>{product.quantity}</TableBodyCell>
                    <TableBodyCell>${product.price}</TableBodyCell>
                    <TableBodyCell>
                        <CloseCircleSolid on:click={() => deleteClickHandler(product.id)}></CloseCircleSolid>
                    </TableBodyCell>
                </TableBodyRow>
            {/each}
        </TableBody>
    </Table>
</div>
