import { writable } from 'svelte/store';
import type { User } from '$lib/user';
import type { Product } from '$lib/product';

export const users = writable<User[]>([]);
export const products = writable<Product[]>([]);
