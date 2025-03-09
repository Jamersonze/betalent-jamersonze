const formatAdmissionDate = (admissionDateString: string) => {
    const date = new Date(admissionDateString);
    return date.toLocaleDateString();
}

export default formatAdmissionDate;