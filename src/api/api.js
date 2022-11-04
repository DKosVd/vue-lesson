
const api = {
    getTickets: async (typeOfAvia, page) => {
        let url = new URL('http://localhost:3000/ticket');
        url.searchParams.append('typeOfAvia', typeOfAvia.type);
        url.searchParams.append('transfer', typeOfAvia.aviaTransfer)
        url.searchParams.append('page', page)
        const tickets = await fetch(url.toString());
        const jsonTickets = await tickets.json();
        return jsonTickets;
    },
    getAvia: async () => {
        const typesAvia = await fetch('http://localhost:3000/avia');
        const jsonTypesAvia = await typesAvia.json();
        return jsonTypesAvia;
    }
}

export default api;