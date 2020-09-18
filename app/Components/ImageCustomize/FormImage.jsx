import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "../Field/ErrorMessages";
import ListImages from "../ImageCustomize/ListImages";

function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name];

  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <>
      <ListImages
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]}  />
    </>
  );
}

export default FormImagePicker;



// const onAddImage =(uri)=>{
//     setImageUris([...imageUris, uri])
//   }

//   const handleRemove =(uri)=>{
//     setImageUris(imageUris.filter(image => image !== uri))
//   }