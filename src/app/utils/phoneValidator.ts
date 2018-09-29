import { isUndefined, isNull } from 'util';
import { FormControl } from '@angular/forms';

export const phoneValidator = (control: FormControl): {[s: string]: boolean} => {
    if ( isNull(control.value) || isUndefined(control.value) ) return { errorPhone: false };
    control.value.trim().replace(/-/gi, '');
    if ( /[a-zA-Z]+/gi.test(control.value) ) return { errorPhone: true };

    return null;
};
