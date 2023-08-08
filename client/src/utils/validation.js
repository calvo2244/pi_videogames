
export const valiDateGame = (errors) => {
  const errorValidation = {};

  if (!errors.name || errors.name === "")
     errorValidation.name = "Debe ingresar el Nombre del Video Juego";

  if (!errors.description || errors.description==="") 
  errorValidation.description = "Debe Ingresar una descripcion";

  if (!errors.image || errors.image==="") 
  errorValidation.image = "Debe Ingresar una URL valida. para la imagen";

  if (!errors.platforms || errors.platforms.length === 0)
    errorValidation.platforms = "Debe Elegir al menos una plataforma";

  if (!errors.released || errors.released === "")
    errorValidation.released = "Debe Ingresar fecha de creacion";

  if (!errors.rating || errors.rating === "") 
  errorValidation.rating = "Debe Ingresar una calificacion.";

  else if (isNaN(errors.rating) || errors.rating < 0 || errors.rating > 5) {
    errorValidation.rating = "Debe Ingresar una calificacion entre 0 y 5.";
  }

  return errorValidation;
};