const hospital = {
    patients: [
        {
            name: 'Clara',
            age: 34,
            condition: 'Fratura',
            isAdmitted: true
        },
        {
            name: 'João',
            age: 45,
            condition: 'Gripe',
            isAdmitted: false
        },
        {
            name: 'Marcos',
            age: 29,
            condition: 'Apendicite',
            isAdmitted: true
        },
        {
            name: 'Paula',
            age: 60, 
            condition: 'Hipertensão',
            isAdmitted: false
        }
    ],

    admitPatient(name) {
        const patient = this.patients.find(patient => patient.name.toLowerCase() === name.toLowerCase());

        if (!patient) {
            return `There is no patient with name "${name}" in the hospital system.`
        } 

        patient.isAdmitted = true;
        return `Patient ${name} was admitted successfully!`;
    },

    releasePatient(name) {
        const patient = this.patients.find(patient => patient.name.toLowerCase() === name.toLowerCase());

        if (!patient) {
            return `There is no patient with name "${name}" in the hospital system.`
        }

        patient.isAdmitted = false;
        return `Patient "${name}" was released.`;
    },

    getAdmittedPatients() {
        const admittedPatients = this.patients
        .filter(patient => patient.isAdmitted)

        return admittedPatients;
    }
};

console.log(hospital.admitPatient('paula'));
console.log(hospital.releasePatient('clara'));
console.log(hospital.getAdmittedPatients());
