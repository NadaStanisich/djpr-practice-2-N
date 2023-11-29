<script lang="ts">
    import { Button, Input } from 'flowbite-svelte';
    import { Product } from '$lib/product';
    import { products } from './store';

    let productId: number = 0;
    let productName: string = "";
    let productQty: number = 0;
    let productPrice: number = 0.00;

    let productList: Product[] = [
        new Product(0, 'Apple MacBook Pro 17', 10, 2999),
        new Product(1, 'Microsoft Surface Pro',5, 1999),
        new Product(2, 'Magic Mouse 2', 90, 99),
    ];

    productList.forEach(product => {
        products.update(existingProducts => [...existingProducts, product]);
    });

    
    // Clear input fields after adding product
    function addProduct() {
        const newProduct = new Product(productId, productName, productQty, productPrice);
        
        // Check if product already exists
        products.update(existingProducts => {
            if (!existingProducts.some(product => product.id === newProduct.id)) {
                return [...existingProducts, newProduct];
            } else {
                console.log('Product already exists');
                return existingProducts;
            }
        });
       // products.update(existingProducts => [...existingProducts, newProduct]);

        
        // Clear input fields after adding product
        productId = 0;
        productName = "";
        productQty = 0;
        productPrice = 0.00;
    }
</script>

<div>
    <form on:submit|preventDefault={addProduct}>
        <Input type="number" placeholder="Product ID" bind:value={productId}/>
        <Input type="text" placeholder="Product Name" bind:value={productName}/>
        <Input type="number" placeholder="Product Quantity" bind:value={productQty}/>
        <Input type="number" placeholder="Product Price" bind:value={productPrice}/>
        <Button type="submit">Add Product</Button>
    </form>
</div>