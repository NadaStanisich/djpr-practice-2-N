<script lang="ts">
    import { Button, Input } from 'flowbite-svelte';
    import { User } from '$lib/user';
    import { users } from './store'; // Import the store from store.ts
    
    let username: string = "";
    let firstName: string = "";
    let lastName: string = "";
    
    let userList: User[] = [
        new User('jsmith', 'John', 'Smith'),
        new User('sbrown', 'Sarah', 'Brown'),
        new User('dduck', 'Donald', 'Duck'),
        new User('mmouse', 'Minnie', 'Mouse')
    ];

    userList.forEach(user => {
        users.update(existingUsers => [...existingUsers, user]);
    });

    function addUser() {
        const newUser = new User(username, firstName, lastName);
        users.update(existingUsers => {
            if (!existingUsers.some(user => user.username === newUser.username)) {
                return [...existingUsers, newUser];
            } else {
                console.log('Username already exists');
                return existingUsers;
            }
        });
        // Clear input fields after adding user
        username = "";
        firstName = "";
        lastName = "";
    
    }

</script>

<div>
    <form on:submit|preventDefault={addUser}>
        <Input type="text" placeholder="Username" bind:value={username}/>
        <Input type="text" placeholder="First Name" bind:value={firstName}/>
        <Input type="text" placeholder="Last Name" bind:value={lastName}/>
        <Button type="submit">Add User</Button>
    </form>
</div>
