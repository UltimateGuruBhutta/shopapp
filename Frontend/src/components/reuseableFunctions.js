




export const bufferArrayToBase64 = (bufferArray) => {
    const base64String = btoa(
      String.fromCharCode(...new Uint8Array(bufferArray))
    );
    return `data:image/jpeg;base64,${base64String}`;
  };


  
  