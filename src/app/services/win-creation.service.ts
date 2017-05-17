
import { Injectable, ComponentFactoryResolver, ReflectiveInjector, Type, ViewContainerRef } from '@angular/core';
import { DynamicCreationService } from "app/services/dynamic-creation.service";
import { AppWin } from "app/components/base-window.component";

@Injectable()
export class WinCreationService {

    public windowTarget: ViewContainerRef;

    constructor(private _creationService: DynamicCreationService) {

    }

    public createWinInstance<T>(t: Type<T>): WinInstances<T> {

        let winComponentRef = this._creationService.createInstance<AppWin>(AppWin, this.windowTarget);
        
        winComponentRef.instance.componentRef = winComponentRef;

        let contentComponentRef = this._creationService.createInstance(t, winComponentRef.instance.content);

        return {
             winInstance: winComponentRef.instance,
             contentInstance: contentComponentRef.instance
        };
    }

}

export class WinInstances<T> {
    public winInstance: AppWin;
    public contentInstance: T;
}
