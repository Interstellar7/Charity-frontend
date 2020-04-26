import {Directive, Input, OnChanges, OnDestroy, SimpleChanges, TemplateRef, ViewContainerRef} from '@angular/core';
import {AbstractControl, NgModel} from "@angular/forms";
import {Subscription} from "rxjs";

interface ErrorContext {
  $implicit: string;
}

@Directive({
  selector: '[appValidationErrors]'
})
export class ValidationErrorsDirective implements OnChanges, OnDestroy {

  @Input()
  appValidationErrorsOf?: NgModel | AbstractControl;

  private subscription = Subscription.EMPTY;

  constructor(private template: TemplateRef<ErrorContext>, private viewContainerRef: ViewContainerRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    if ('appValidationErrorsOf' in changes) {
      this.processControlChange();
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private processControlChange() {
    this.subscription.unsubscribe();
    if (this.appValidationErrorsOf == undefined) {
      return;
    }

    const control = this.appValidationErrorsOf;
    this.subscription = control.statusChanges!.subscribe(status => {
      this.processValidityChange(status, control);
    });
  }

  private processValidityChange(status: 'VALID' | 'INVALID', control: NgModel | AbstractControl) {
    this.viewContainerRef.clear();
    if (status != 'INVALID' || control.errors == undefined) {
      return;
    }

    Object.entries(control.errors).forEach(([key, value]) => {
      switch (key) {
        case 'required':
          this.viewContainerRef.createEmbeddedView(this.template, {$implicit: 'Value is required'});
          return;
        case 'email_duplicate':
          this.viewContainerRef.createEmbeddedView(this.template, {$implicit: 'Email is duplicate'});
          return;
        case 'username_duplicate':
          this.viewContainerRef.createEmbeddedView(this.template, {$implicit: 'Username is duplicate'});
          return;
      }
    });
  }
}
