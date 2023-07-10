export const createFields = (overrides = []) =>
  createInputFields(model, overrides);


// from step #5
export const createPatient = (data) => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      let patients = JSON.parse(localStorage.getItem("patients") || "[]");
      data.id = patients.length + 1;
      patients.push(data);
      localStorage.setItem("patients", JSON.stringify(patients));
      resolve(data);
    }, 1000);
  });
};

// from step 6
// export const createPatient = (data) => {
//   return new Promise((resolve) => {
//     setTimeout(async () => {
//       let patients = await getPatients();
//       data.id = patients.length + 1;
//       patients.push(data);
//       localStorage.setItem("patients", JSON.stringify(patients));
//       resolve(data);
//     }, 1000);
//   });
// };
export const getPatients = () => {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(JSON.parse(localStorage.getItem("patients") || "[]"));
    }, 1000);
  });
};
// export const updatePatient = async (id, data) => {
//   // return new Promise((resolve, reject) => {
//   //   setTimeout(async () => {
//   //     let patients = await getPatients();

//   //     let index = patients.findIndex((patient) => patient.id === id);
//   //     if (index === -1) {
//   //       reject("Patient not found");
//   //       return;
//   //     }

//   //     patients[index] = { ...patients[index], ...data };
//   //     localStorage.setItem("patients", JSON.stringify(patients));
//   //     resolve(patients[index]);
//   //   }, 1000);
//   // });

//   await setDoc(doc(db, "patients", id), data);

//   return id
// };

// export const deletePatient = async (id) => {
//   // return new Promise((resolve, reject) => {
//   //   setTimeout(async () => {
//   //     let patients = await getPatients();

//   //     let index = patients.findIndex((patient) => patient.id === id);
//   //     if (index === -1) {
//   //       reject("Patient not found");
//   //       return;
//   //     }

//   //     patients.splice(index, 1);
//   //     localStorage.setItem("patients", JSON.stringify(patients));
//   //     resolve(patients[index]);
//   //   }, 1000);
//   // });

//   await deleteDoc(doc(db, "patients", id));

//   return id
// };
