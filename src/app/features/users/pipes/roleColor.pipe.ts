import { Pipe, PipeTransform } from '@angular/core';
import {Role} from "../../../core/models/current-user.model";
import {MatChip} from "@angular/material/chips";

@Pipe({
  name: 'roleColor'
})
export class RoleColorPipe implements PipeTransform {

  transform(value: string): string;
  transform(value?: string): string {
    if (value == undefined) {
      return '';
    }

    switch (value) {
      case Role.ADMIN:
        return 'warn';
      case Role.MODERATOR:
        return 'accent';
      case Role.USER:
        return 'primary';
      default:
        return '';
    }
  }
}
