import React from "react";
import { FieldType } from "../../types/field";

export default function Field({ fieldData }: { fieldData: FieldType }) {
  const getField = () => {
    switch (fieldData.type) {
      case "text":
        return (
          <input
            type="text"
            className="rounded-md p-2"
            pattern={fieldData.pattern}
            required={true}
          />
        );
      case "date":
        return (
          <div className="flex gap-1">
            <input
              type="number"
              className="rounded-md p-2 w-8"
              min={1}
              max={31}
              required={true}
            />
            <input
              type="number"
              className="rounded-md p-2 w-8"
              min={1}
              max={12}
              required={true}
            />
            <input
              type="number"
              className="rounded-md p-2 w-8"
              min={0}
              max={99}
              required={true}
            />
          </div>
        );
      case "select":
        return (
          <select className="rounded-md p-2 w-48">
            <option value="m">Male</option>
            <option value="f">Female</option>
          </select>
        );
      case "textArea":
        return (
          <textarea cols={50} rows={4} className="rounded-md p-2 resize-none" />
        );
      default:
        return "Broken fieldData Type";
    }
  };
  return (
    <div className="flex flex-col py-2 pl-3">
      <label htmlFor={fieldData.name} className="py-2">
        {fieldData.title}
      </label>
      {getField()}
    </div>
  );
}
