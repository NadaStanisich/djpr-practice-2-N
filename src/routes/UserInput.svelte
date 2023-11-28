<script lang="ts">
    import { Button, Input } from 'flowbite-svelte';
    let username: string = "";
    let firstName: string = "";
    let lastName: string = "";

</script>

<div>
    <form>
        <Input type="text" placeholder="Username" bind:value={username}/>
        <Input type="text" placeholder="First Name" bind:value={firstName}/>
        <Input type="text" placeholder="Last Name" bind:value={lastName}/>
        <Button type="submit">Add User</Button>
    </form>
</div>