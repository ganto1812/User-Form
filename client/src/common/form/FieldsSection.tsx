import React from "react";
import { FieldType } from "../../types/field";
import Field from "./Field";

export default function FieldsSection({
  fieldArray,
}: {
  fieldArray: FieldType[];
}) {
  return (
    <div className="flex flex-wrap basis-2/3 h-48">
      {fieldArray.map((field) =>
        field ? (
          <Field key={field.name} fieldData={field}></Field>
        ) : (
          <span>Broken field</span>
        )
      )}
    </div>
  );
}
