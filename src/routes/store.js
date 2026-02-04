import { writable, derived } from 'svelte/store';

export const apiData = writable([]);

export const catImages = derived(apiData, ($apiData) => {
  if (Array.isArray($apiData)) {
      return $apiData.map(cat => cat.url);
  }
  return [];
  });