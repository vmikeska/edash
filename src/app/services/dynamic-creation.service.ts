
import { Injectable, ComponentFactoryResolver, ReflectiveInjector, Type, ViewContainerRef, ComponentRef } from '@angular/core';

@Injectable()
export class DynamicCreationService {

    constructor(private _componentFactoryResolver: ComponentFactoryResolver) {
        
    }

    public createInstance<T>(t: Type<T>, target: ViewContainerRef): ComponentRef<T> {
        
        let factory = this._componentFactoryResolver.resolveComponentFactory(t);

        // vCref is needed cause of that injector..
        let injector = ReflectiveInjector.fromResolvedProviders([], target.parentInjector);

        // create component without adding it directly to the DOM
        let comp = factory.create(injector);

        var inst = <T>comp.instance;

        //add inputs first !! otherwise component/template crashes ..
        // inst["data"] = "this is a test";

        // all inputs set? add it to the DOM ..
        target.insert(comp.hostView);

        return comp;
    }

}



 // private createWinInstance<T>(t): T {

  //     let componentFactory = this._componentFactoryResolver.resolveComponentFactory(t);

  //      let viewContainerRef = this.windowTarget.viewContainerRef;

  //     viewContainerRef.clear();

  //     let componentRef = viewContainerRef.createComponent(componentFactory);

  //      var ins = <T>componentRef.instance;
  //      return ins;     
  //   }

  // public createWinInstance<T>(t: Type<T>) {

  //   let factory = this._componentFactoryResolver.resolveComponentFactory(t);

  //   // vCref is needed cause of that injector..
  //   let injector = ReflectiveInjector.fromResolvedProviders([], this.windowTarget.parentInjector);

  //   // create component without adding it directly to the DOM
  //   let comp = factory.create(injector);

  //   var inst = <T>comp.instance;

  //   //add inputs first !! otherwise component/template crashes ..
  //   // inst["data"] = "this is a test";

  //   // all inputs set? add it to the DOM ..
  //   this.windowTarget.insert(comp.hostView);

  //   return <T>inst;
  // }
