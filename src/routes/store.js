import { writable, derived } from 'svelte/store';

export const apiData = writable([]);

export const catFacts = derived(apiData, ($apiData) => {
  if ($apiData.fact) {
    return $apiData.map(fact => fact.text);
  }
  return [];
});