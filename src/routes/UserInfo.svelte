<script lang="ts">
    import type { User } from '$lib/user';
    import { Heading, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
    import { CloseCircleSolid } from 'flowbite-svelte-icons';
    import { users } from './store'; // Import the store from store.ts



    function deleteClickHandler(username: any): void {
        users.update((users: User[]) => users.filter(user => user.username !== username));
    }
</script>

<div class="p-5 w-full border-solid border-2"> 
    <Heading tag='h3'>Users</Heading>
    <Table>
        <TableHead>
            <TableHeadCell>Username</TableHeadCell>
            <TableHeadCell>First Name</TableHeadCell>
            <TableHeadCell>Last Name</TableHeadCell>
            <TableHeadCell>Action</TableHeadCell>
        </TableHead>
        <TableBody>
            {#each $users as user (user.username)}
                <TableBodyRow key={user.username}>
                    <TableBodyCell>{user.username}</TableBodyCell>
                    <TableBodyCell>{user.firstName}</TableBodyCell>
                    <TableBodyCell>{user.lastName}</TableBodyCell>
                    <TableBodyCell>
                        <CloseCircleSolid on:click={() => deleteClickHandler(user.username)}></CloseCircleSolid>
                    </TableBodyCell>
                </TableBodyRow>
            {/each}
        </TableBody>
    </Table>
</div>
