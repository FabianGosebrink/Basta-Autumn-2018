import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  imports: [
    // Modules
    CommonModule,
    RouterModule,
  ],

  declarations: [
    // Components & directives
    NavigationComponent,
  ],

  exports: [NavigationComponent],
})
export class SharedModule {}
