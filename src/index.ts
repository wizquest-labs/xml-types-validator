import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

export * from './xml/validator/common/StringStripper';
export * from './xml/validator/TokenValidator';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class XMLValidatorModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: XMLValidatorModule
    };
  }
}
