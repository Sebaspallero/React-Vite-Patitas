export const cartInputs = [
    {
        id:1,
        name: 'name',
        type: 'text',
        errorMessage: 'El nombre debe tener entre 3-16 caracteres, y no incluir ningún carácter especial.',
        label: 'Nombre',
        pattern: "^[A-Za-z]{2,16}$"
    },
    {
        id: 2,
        name: 'email',
        type: 'email',
        label: 'E-mail',
        errorMessage: 'Debe ser un E-mail válido.',
        pattern: "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
    },
    {
        id: 3,
        name: 'phone',
        type: 'text',
        label: 'Teléfono',
        errorMessage: 'Debe ser un teléfono válido.',
        pattern: "^[0-9]{5,20}$"
    },
    {
        id: 4,
        name: 'city',
        type: 'text',
        label: 'Ciudad',
        errorMessage: 'Debe completar este campo.',
        pattern: "^[A-Za-z_ ]{1,40}$"
    },
    {
        id: 5,
        name: 'state',
        type: 'text',
        label: 'Provincia',
        errorMessage: 'Debe completar este campo',
        pattern: "^[A-Za-z_ ]{1,40}$"
    },
    {
        id: 6,
        name: 'address',
        type: 'text',
        label: 'Dirección',
        errorMessage: 'Debe completar este campo',
        pattern: "^[A-Za-z0-9_ ]{1,40}$"
    },
    {
        id: 7,
        name: 'zip',
        type: 'text',
        label: 'CP',
        errorMessage: 'Debe completar este campo',
        pattern: "^[A-Za-z0-9_ ]{1,10}$"
    },
]

export const contactInputs = [
    {
        id: 1,
        name: 'name',
        type: 'text',
        placeholder: 'Nombre',
        label:'Nombre',
        errorMessage: 'El nombre debe tener entre 3-16 caracteres, y no incluir ningún carácter especial.',
        pattern: "^[A-Za-z]{2,16}$"
    },
    {
        id: 2,
        name: 'email',
        type: 'email',
        placeholder: 'E-mail',
        label:'E-mail',
        errorMessage: 'Debe ser un E-mail válido.',
        pattern: "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$" 
    }
]