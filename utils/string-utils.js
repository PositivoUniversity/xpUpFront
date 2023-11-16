export const getRoleLabel = (role) => {
    switch (role) {
        case 1:
            return 'Administrador';
        case 2:
            return 'Professor';
        default:
            return 'Aluno';
    }
};
