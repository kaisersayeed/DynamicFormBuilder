const formFields = [
  {
    key: "name",
    label: "Name",
    type: "text",
    validations: {required: true},
  },
  {
    key: "dob",
    label: "DOB",
    type: "date"
  },
  {
    key: "gender",
    label: "Gender",
    type: "radio",
    options: [
      {key: "male", label: "Male", name: "gender", value: "male"},
      {
        key: "female",
        label: "Female",
        name: "gender",
        value: "female"
      }
    ]
  },
  {
    key: "contact",
    label: "Contact",
    type: "inputGroups",
    groupOptions: [
      {
        key: "home",
        label: "Home",
        type: "text",
      },
      {
        key: "mobile",
        label: "Mobile",
        type: "text",
      },
    ],
    validations: {required: true}
  },
  {
    key: "consent",
    label: "Guardian Consent",
    type: "checkbox",
    options: [
      {key: "status", label: "I agree", value: "agreed"},
    ]
  },
  {
    key: "gurDetails",
    label: "Gurdian Details",
    type: "inputGroups",
    groupOptions: [
      {
        key: "guardianName",
        label: "Name",
        type: "text",
      },
      {
        key: "guardianContact",
        label: "Contact",
        type: "text",
      },
    ],
    validations: {required: true}
  }
];

export default formFields;