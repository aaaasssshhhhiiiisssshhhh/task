import React from "react";

export const Hey = (props) => {
  //   personSchema.map((defaut) => {
  //     return(
  // <div>
  //     <div>{props.schema[0].fieldName}</div>
  //     <input
  //       type={props.schema[0].fieldType}
  //       placeholder={props.schema[0].placeholder}
  //     />
  //     <div>{props.schema[1].fieldName}</div>
  //     <input
  //       type={props.schema[1].fieldType}
  //       placeholder={props.schema[1].placeholder}
  //     />
  //     <div>{props.schema[2].fieldName}</div>
  //     <input
  //       type={props.schema[2].fieldType}
  //       placeholder={props.schema[2].placeholder}
  //     />
  //   </div>

  //     )
  //   });
  return (
    <div>
      {props.schema.map((f) => {
        return (
          <div>
            <div>{f.fieldName}</div>
            <input type={f.fieldType} placeholder={f.placeholder} />
          </div>
        );
      })}
    </div>
  );
};
