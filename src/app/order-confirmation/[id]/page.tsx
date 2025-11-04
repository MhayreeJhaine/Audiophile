import React from "react";

type Props = { params: { id: string } };

export default function Page({ params }: Props) {
  const id = params.id;
  return (
    <div>
      <h1>Order confirmation — {id}</h1>
      {/* your UI */}
    </div>
  );
}
