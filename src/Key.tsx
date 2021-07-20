import React, { MouseEventHandler } from "react";

import { ValueType, KindOfType } from "helper/constant";

type TypeOfProps = {
  id: string;
  className: KindOfType;
  onClick: MouseEventHandler;
  value: ValueType;
};

const Key = (props: TypeOfProps) => {
  const { id, className, onClick, value } = props;

  return (
    <div id={id} className={className} onClick={onClick}>
      {value}
    </div>
  );
};

export default Key;
