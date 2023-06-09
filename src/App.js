import React from 'react';
import Navbar from './components/NavBar';
import TodoList from './components/TodoList';
import AuthContextProvider from './contexts/AuthContext';
import ThemeContextProvider from './contexts/ThemeContext';
import TodoListContextProvider from './contexts/TodoListContext';

function App() {
  return (
    <div className="App">
      <div className='ui raised very padded text container segment'>
        <ThemeContextProvider>
        <AuthContextProvider>
          <TodoListContextProvider>
          <Navbar />
          <TodoList />
          </TodoListContextProvider>
          </AuthContextProvider>

        </ThemeContextProvider>
      </div>
    </div>
  );
}

export default App;
