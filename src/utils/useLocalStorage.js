import { useState, useEffect } from 'react';

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
 * Almacenar y actualizar un item en `localStorage`, se está utilizando un `useState`, `useEffect` y un `setTimeout` para simular un tiempo de demora.
 * @param {string} itemName Nombre del item que se almacenará en `localStorage`.
 * @param {*} initialValue Valor inicial para el item.
 * @returns {object} `item` del useState, `updateItem` función para actualizar localStorage y item del useState, `loading` y `error` estados para saber si ya cargaron o dio error.
 */
function useLocalStorage(itemName, initialValue) {
  const [item, setLocalStorageItem] = useState(initialValue); // Estado inicial = initialValue
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Timeout para simular demora en la carga
    setTimeout(() => {
      try {
        const itemFromStorage = localStorage.getItem(itemName);
        let itemValue;

        // Cuando el localStorage no tenga valor, retornar initialValue
        if (!itemFromStorage) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          itemValue = initialValue;
        } else { // Sino formatear a JSON y actualizarlo en el estado
          itemValue = JSON.parse(itemFromStorage);
          setLocalStorageItem(itemValue);
        }

        setLoading(false); // Detener la carga cambiando su estado
      } catch (error) {
        setLoading(false);
        setError(true);
        console.error('ERROR => ', error);
      }
    }, 3000);
  }, []);

  // Actualizar item en LocalStorage y en useState
  const updateItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setLocalStorageItem(newItem);
  }

  // NO DEVOLVEMOS EL setLocalStorageItem() sino el updateItem() (a quien se le ha
  // delegado la lógica que necesita). También enviamos todo como obj y no como array
  // para que sea más fácil identificarlo por nombre que por index
  return {
    item,
    updateItem,
    loading,
    error
  };
}

export { useLocalStorage }