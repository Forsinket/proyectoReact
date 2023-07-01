function TodoCounter( { total, completed } ){
    return(
      <h1>
        Has completado {completed} de {total} To Do.
      </h1>
    );
  }

  export { TodoCounter };