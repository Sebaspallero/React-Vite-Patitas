export const cartInputs = [
    {
        id:1,
        name: 'name',
        type: 'text',
        placeholder: 'Nombre',
        errorMessage: 'El nombre debe tener entre 3-16 caracteres, y no incluir ningún carácter especial.',
        pattern: "^[A-Za-z]{2,16}$"
    },
    {
        id: 2,
        name: 'email',
        type: 'email',
        placeholder: 'E-mail',
        errorMessage: 'Debe ser un E-mail válido.',
        pattern: "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
    },
    {
        id: 3,
        name: 'phone',
        type: 'text',
        placeholder: 'Teléfono',
        errorMessage: 'Debe ser un teléfono válido.',
        pattern: "^[0-9]{5,20}$"
    },
    {
        id: 4,
        name: 'city',
        type: 'text',
        placeholder: 'Ciudad',
        errorMessage: 'Debe completar este campo.',
        pattern: "^[A-Za-z]{1,40}$"
    },
    {
        id: 5,
        name: 'state',
        type: 'text',
        placeholder: 'Provincia',
        errorMessage: 'Debe completar este campo',
        pattern: "^[A-Za-z]{1,40}$"
    },
    {
        id: 6,
        name: 'address',
        type: 'text',
        placeholder: 'Dirección',
        errorMessage: 'Debe completar este campo',
        pattern: "^[A-Za-z0-9]{1,40}$"
    },
]

export const contactInputs = [
    {
        id: 1,
        name: 'name',
        type: 'text',
        placeholder: 'Nombre',
        errorMessage: 'El nombre debe tener entre 3-16 caracteres, y no incluir ningún carácter especial.',
        pattern: "^[A-Za-z]{2,16}$"
    },
    {
        id: 2,
        name: 'email',
        type: 'email',
        placeholder: 'E-mail',
        errorMessage: 'Debe ser un E-mail válido.',
        pattern: "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$" 
    }
]