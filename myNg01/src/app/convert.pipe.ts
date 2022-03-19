import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'convert'
})

export class ConvertPipe implements PipeTransform {
    transform(val: number, lan: string) {
        if (lan === 'en') {
            if (val > 18) {
                return 'adult';
            } else {
                return 'child';
            }
        } else {
            return 'unknown';
        }

    }
}