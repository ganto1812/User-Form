import React from "react";
import FieldsSection from "../../common/form/FieldsSection";
import Header from "../../common/form/Header";

export default function Section({
  title,
  fieldArray,
  openSection,
  toggleHeader,
  handleNextBtn,
}: {
  title: string;
  fieldArray: any;
  openSection: boolean;
  toggleHeader: Function;
  handleNextBtn: Function;
}) {
  return (
    <div className="bg-grey rounded-xl">
      <Header title={title} toggleHeader={() => toggleHeader()}></Header>
      {openSection && (
        <div className="flex">
          <FieldsSection fieldArray={fieldArray}></FieldsSection>
          <div className="basis-1/3 mt-auto text-right p-2">
            <button
              className="bg-purple text-white rounded-xl py-1 px-10"
              onClick={() => handleNextBtn()}
            >
              Next {">"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
