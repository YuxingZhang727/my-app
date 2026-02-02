import { writable, derived } from 'svelte/store';

export const apiData = writable([]);
export const isLoading = writable(true);
export const errorMsg = writable("");

export const bookshelfList = derived(apiData, ($apiData) => {
  if ($apiData && $apiData.items) {
    return $apiData.items.map(shelf => ({
      name: shelf.title,
      count: shelf.volumeCount
    }));
  }
  return [];
});
