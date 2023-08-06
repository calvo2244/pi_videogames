
export const valiDateGame = (errors) => {
  const errorValidation = {};
  
  if (!errors.name) errorValidation.name = "Debe ingresar el ombre del Video Juego";

  if (!errors.description) errorValidation.description = "Debe iNgresar una descripcion";

  if (!errors.image) errorValidation.image = "Debe INgresar una URL valida.";

  // if (!errors.platforms || errors.platforms.length === 0) {
  //   errorValidation.platforms = "Debe Elegir al menos una plataforma";
  // }

  if (!errors.released) errorValidation.released = "Debe Ingresar fecha de creacion";


  if (!errors.rating) errorValidation.rating = "Debe Ingresar una calificacion.";
  
  else if (isNaN(errors.rating) || errors.rating < 0 || errors.rating > 5) {
    errorValidation.rating = "Debe Ingresar una calificacion entre 0 y 5.";
  }

  return errorValidation;
};