import React from "react";

const ExportSVGButton = ({ svgId }) => {
  const exportSVG = () => {
    // Obtener el elemento SVG
    const svg = document.getElementById(svgId);
    // Serializar el SVG
    const serializer = new XMLSerializer();
    let source = serializer.serializeToString(svg);
    // Añadir namespaces
    if (!source.match(/^<svg[^>]+xmlns="http:\/\/www\.w3\.org\/2000\/svg"/)) {
      source = source.replace(
        /^<svg/,
        '<svg xmlns="http://www.w3.org/2000/svg"'
      );
    }
    if (!source.match(/^<svg[^>]+"http:\/\/www\.w3\.org\/1999\/xlink"/)) {
      source = source.replace(
        /^<svg/,
        '<svg xmlns:xlink="http://www.w3.org/1999/xlink"'
      );
    }
    // Añadir declaración XML
    source = '<?xml version="1.0" standalone="no"?>\r\n' + source;
    // Convertir el SVG a Canvas
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      // Exportar como JPG
      const jpgUrl = canvas.toDataURL("image/jpeg", 0.8); // Calidad de la imagen JPG
      const link = document.createElement("a");
      link.href = jpgUrl;
      link.download = "codigo.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
    img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);
  };

  return (
    <button onClick={exportSVG} className="bg-blue-500 text-white p-2 rounded mt-20">
      Exportar a imagen
    </button>
  );
};

export default ExportSVGButton;
