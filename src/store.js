// Configuración de Redux
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Asegúrate de crear este archivo

const store = configureStore({
  reducer: rootReducer,
  // Se pueden agregar middleware adicionales aquí si es necesario
});

export default store;
