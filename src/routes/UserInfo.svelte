<script lang="ts">
    import type { User } from '$lib/user';
    import { Heading, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
    import { CloseCircleSolid } from 'flowbite-svelte-icons';

    let users: User[] = [];

    function deleteClickHandler() {
        console.log("Delete button clicked");
    }
</script>

<div class="p-5 w-full border-solid border-2"> 
    <Heading tag='h3'>Users</Heading>
    <Table>
        <TableHead>
            <TableHeadCell>Username</TableHeadCell>
            <TableHeadCell>First Name</TableHeadCell>
            <TableHeadCell>Last Name</TableHeadCell>
        </TableHead>
        <TableBody>
            <TableBodyRow>
                <TableBodyCell>jsmith</TableBodyCell>
                <TableBodyCell>John</TableBodyCell>     
                <TableBodyCell>Smith</TableBodyCell>
                <TableBodyCell><CloseCircleSolid on:click={deleteClickHandler}></CloseCircleSolid></TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
                <TableBodyCell>sbrown</TableBodyCell>
                <TableBodyCell>Sarah</TableBodyCell>
                <TableBodyCell>Brown</TableBodyCell>
                <TableBodyCell><CloseCircleSolid on:click={deleteClickHandler}></CloseCircleSolid></TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
                <TableBodyCell>dduck</TableBodyCell>
                <TableBodyCell>Donald</TableBodyCell>     
                <TableBodyCell>Duck</TableBodyCell>
                <TableBodyCell><CloseCircleSolid on:click={deleteClickHandler}></CloseCircleSolid></TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
                <TableBodyCell>mmouse</TableBodyCell>
                <TableBodyCell>Minnie</TableBodyCell>     
                <TableBodyCell>Mouse</TableBodyCell>
                <TableBodyCell><CloseCircleSolid on:click={deleteClickHandler}></CloseCircleSolid></TableBodyCell>
            </TableBodyRow>
        </TableBody>
    </Table>
</div>