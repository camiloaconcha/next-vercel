import React from "react";

interface CategoryProps {
  params: {
    category: string;
  };
}

export default function page(props: CategoryProps) {
  const { category } = props.params;
  return (
    <div>
      <h1>Dinámico: {category}</h1>
    </div>
  );
}
