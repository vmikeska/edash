

export enum LayoutSize { Mobile, Web }
export enum OS { A, WP, IOS, Other }

export function $(selector: string): MyDomOperations {
    // if (selector.startsWith("#")) {
    //     var s = selector.substring(1);
    //     var elm = document.getElementById(s);
    //     var md = new MyDomOperations(elm);
    //     return md;
    // }

    var elems = document.querySelectorAll(selector);

    var elemsList = Array.prototype.slice.call(elems, 0);

    var md = new MyDomOperations(elemsList);
    return md;
}

export class MyDomOperations {

    public elements: HTMLElement[];

    constructor(element: HTMLElement[]) {
        this.elements = element;
    }

    private forEach(callback) {
        this.elements.forEach((element) => {
            callback(element);
        });
    }



    public addClass(name) {
        this.forEach((element) => {
            this.addClassInner(element, name);
        })
    }

    private addClassInner(element, name) {
        if (element.classList) {
            element.classList.add(name);
        } else {
            element.className += ' ' + name;
        }
    }

    public removeClass(name) {
        this.forEach((element) => {
            this.removeClassInner(element, name);
        })
    }

    private removeClassInner(element, name) {
        if (element.classList) {
            element.classList.remove(name);
        }
        else {
            element.className = element.className.replace(new RegExp('(^|\\b)' + name.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')
        }
    }

}