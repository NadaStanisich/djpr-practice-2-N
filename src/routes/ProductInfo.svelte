<script lang="ts">
    import type { Product } from '$lib/product';
    import { Heading, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
    import { CloseCircleSolid } from "flowbite-svelte-icons";
    let products: Product[] = [];

    function deleteClickHandler() {
        console.log("Delete button clicked");
    }
</script>

<div class="p-5 w-full border-solid border-2"> 
    <Heading tag='h3'>Products</Heading>
    <Table>
        <TableHead>
            <TableHeadCell>Id</TableHeadCell>
            <TableHeadCell>name</TableHeadCell>
            <TableHeadCell>Quantity</TableHeadCell>
            <TableHeadCell>Price</TableHeadCell>
        </TableHead>
        <TableBody>
            <TableBodyRow>
                <TableBodyCell>0</TableBodyCell>
                <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>     
                <TableBodyCell>10</TableBodyCell>
                <TableBodyCell>$2999</TableBodyCell>
                <TableBodyCell><CloseCircleSolid on:click={deleteClickHandler}></CloseCircleSolid></TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
                <TableBodyCell>1</TableBodyCell>
                <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
                <TableBodyCell>5</TableBodyCell>
                <TableBodyCell>$1999</TableBodyCell>
                <TableBodyCell><CloseCircleSolid on:click={deleteClickHandler}></CloseCircleSolid></TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
                <TableBodyCell>2</TableBodyCell>
                <TableBodyCell>Magic Mouse 2</TableBodyCell>     
                <TableBodyCell>90</TableBodyCell>
                <TableBodyCell>$99</TableBodyCell>
                <TableBodyCell><CloseCircleSolid on:click={deleteClickHandler}></CloseCircleSolid></TableBodyCell>
            </TableBodyRow>
        </TableBody>
    </Table>
</div>