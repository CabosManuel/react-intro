import { useState } from 'react';

/*
const defaultToDos = [
  { id: 1, title: "Crea una nueva tarea +", completed: false },
  { id: 2, title: "Busca una tarea 🔍", completed: false },
  { id: 3, title: "Elimina tareas 🚮", completed: false },
];

localStorage.getItem('TODOS');
localStorage.setItem('TODOS', JSON.stringify(defaultToDos));
localStorage.removeItem('TODOS');
*/

// Custom Hook:
/**
 * Almacenar y actualizar un item en `localStorage`.
 * @param {string} itemName Nombre del item que se almacenará en `localStorage`.
 * @param {*} initialValue Valor inicial para el item.
 * @returns {array} `item` del useState, `updateItem` función para actualizar localStorage y item del useState.
 */
function useLocalStorage(itemName, initialValue) {
  const [item, setLocalStorageItem] = useState(() => {
    // Cuando el localStorage no tenga todos, retornar array vacío
    const itemFromStorage = localStorage.getItem(itemName);
    if (!itemFromStorage) {
      localStorage.setItem(itemName, initialValue);
      return initialValue;
    } else {
      return JSON.parse(itemFromStorage);
    }
  });

  // Actualizar item en LocalStorage y en useState
  const updateItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setLocalStorageItem(newItem);
  }

  // Retornar updateItem porque actualiza el LS y
  // NO DEVOLVEMOS EL setLocalStorageItem sino el updateItem 
  // (a quien se le ha delegado la lógica que necesita)
  return [item, updateItem];
}

export { useLocalStorage }