
import { Injectable, ComponentFactoryResolver, ReflectiveInjector, Type, ViewContainerRef } from '@angular/core';
import { DynamicCreationService } from "app/services/dynamic-creation.service";
import { AppWin } from "app/components/base-window.component";

@Injectable()
export class WinCreationService {

    public windowTarget: ViewContainerRef;

    constructor(private _creationService: DynamicCreationService) {

    }

    public createWinInstance<T>(t: Type<T>): WinInstances<T> {

        let winInstance = this._creationService.createInstance<AppWin>(AppWin, this.windowTarget);
        
        let contentInstance = this._creationService.createInstance(t, winInstance.content);

        return {
             winInstance: winInstance,
             contentInstance: contentInstance
        };
    }

}

export class WinInstances<T> {
    public winInstance: AppWin;
    public contentInstance: T;
}
