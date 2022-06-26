import React, { useState } from "react";
import { fieldData } from "../../common/form/fieldData";
import Section from "./Section";

export default function Signup() {
  const [sectionsState, setSectionsState] = useState([true, false, false]);
  const sections = [
    {
      title: "Step 1: Your details",
      fields: [fieldData.firstName, fieldData.surname, fieldData.email],
    },
    {
      title: "Step 2: More comments",
      fields: [fieldData.phone, fieldData.gender, fieldData.birthday],
    },
    { title: "Step 3: Final comments", fields: [fieldData.comments] },
  ];

  const toggleHeader = (id: number) => {
    setSectionsState((prev) => {
      let temp = [...prev];
      temp[id] = !temp[id];
      return temp;
    });
  };
  const handleNextBtn = (id: number) => {
    setSectionsState((prev) => {
      let temp = sections.map((s) => false);
      if (id + 1 === sections.length) {
        return temp;
      } else {
        temp[id + 1] = true;
        return temp;
      }
    });
  };

  return (
    <div
      className="self-center mx-auto bg-white p-1 rounded-xl"
      style={{ width: "700px" }}
    >
      <div className="">
        <form className="grid gap-y-1">
          {sections.map((section, id) => (
            <Section
              title={section.title}
              fieldArray={section.fields}
              openSection={sectionsState[id]}
              toggleHeader={() => toggleHeader(id)}
              handleNextBtn={() => handleNextBtn(id)}
              key={section.title}
            ></Section>
          ))}
        </form>
      </div>
    </div>
  );
}
