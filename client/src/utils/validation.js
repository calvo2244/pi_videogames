
export const valiDateGame = (data) => {
  const errors = {};

  if (!data.name) {
    errors.name = "Por favor, ingrese el nombre del juego.";
  }


};