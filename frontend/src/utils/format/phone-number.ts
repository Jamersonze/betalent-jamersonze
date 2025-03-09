const formatPhoneNumber = (phoneNumberString: string) => {
    const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    const phoneRegExp = /^(\d{2})(\d{2})(\d{5})(\d{4})$/;
    const match = cleaned.match(phoneRegExp);
    if (match) {
        return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}`;
    }
    return null;
}

export default formatPhoneNumber;