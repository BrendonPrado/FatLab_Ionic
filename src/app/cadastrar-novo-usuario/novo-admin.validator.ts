import { ValidatorFn, FormGroup } from '@angular/forms';

export const NovoAdminValidator: ValidatorFn = (formGroup: FormGroup) => {
    const tipo = formGroup.get('tipo').value;
    return (tipo === 'Admin') ? { NovoAdminValidator: true } : null;
};
