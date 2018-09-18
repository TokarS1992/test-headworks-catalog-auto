import { Component, OnInit, ViewChild, ElementRef, AfterContentChecked } from '@angular/core';

interface IActiveLine {
    width?: number;
    leftPos?: number;
}

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterContentChecked {
    constructor() { }

    @ViewChild('navPanel') private navPanel: ElementRef;
    @ViewChild('lineActive') private lineActive: ElementRef;

    private configActiveLine: IActiveLine = {};

    ngOnInit() {}

    ngAfterContentChecked() {
        Array.from(this.navPanel.nativeElement.children).forEach((el: HTMLElement) => {
            if (el.classList.contains('active')) {
                this.configActiveLine.width = el.offsetWidth;
                this.configActiveLine.leftPos = el.offsetLeft;
            }
        });
    }

}
