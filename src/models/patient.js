import { QInput, QSelect, QDate } from "quasar";
import { createInputFields } from "./functions";
import CustomInput from "components/CustomInput.vue";

const model = [
  {
    component: QInput,
    model: "last_name",
    attrs: {
      label: "Last Name",
    },
    col: 4,
  },
  {
    component: QInput,
    model: "first_name",
    attrs: {
      label: "First Name",
    },
    col: 4,
  },
  {
    component: QInput,
    model: "middle_name",
    attrs: {
      label: "Middle Name",
    },
    col: 4,
  },
  {
    component: QSelect,
    model: "suffix_name",
    attrs: {
      label: "Suffix Name",
      options: ["Jr.", "Sr."],
    },
    col: 2,
  },
  {
    component: QSelect,
    model: "sex",
    attrs: {
      label: "Sex",
      options: ["Male", "Female"],
    },
    col: 2,
  },
  {
    component: CustomInput,
    model: "birth_date",
    attrs: {
      label: "Date of Birth",
      mask: "####-##-##",
      placeholder: "YYYY-MM-DD",
    },
    col: 4,
    format: (val) => (val ? new Date(val).toDateString() : ""),
  },
  {
    component: QInput,
    model: "contact_no",
    attrs: {
      label: "Contact No.",
    },
    col: 4,
  },
];

export const createFields = () => createInputFields(model);
