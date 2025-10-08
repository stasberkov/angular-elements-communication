import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { CompAComponent } from './comp-a/comp-a';
import { CompBComponent } from './comp-b/comp-b';

@NgModule({
  imports: [
    BrowserModule
  ],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const CompAElement = createCustomElement(CompAComponent, { injector: this.injector });
    customElements.define('comp-a', CompAElement);

    const CompBElement = createCustomElement(CompBComponent, { injector: this.injector });
    customElements.define('comp-b', CompBElement);
  }
}