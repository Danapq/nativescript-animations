import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AnimationCurve } from 'ui/enums';

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  moduleId: module.id,
})
export class HomeComponent implements OnInit {

  @ViewChild('cube') cube: ElementRef;
  @ViewChild('buttonAnimation') buttonAnimation: ElementRef;
  @ViewChild('data') data: ElementRef;
  @ViewChild('button') button: ElementRef;
  @ViewChild('description') description: ElementRef;
  @ViewChild('title') title: ElementRef;
  @ViewChild('block1') block1: ElementRef;
  @ViewChild('block2') block2: ElementRef;

  constructor() {

  }

  ngOnInit() {
    this.data.nativeElement.translateX = 800;
    this.button.nativeElement.translateX = 500;
  }

  selectData() {
    this.animateCube();
  }

  animateCube() {
    this.animateBottomSection();
    this.animateCentralSection();
    this.animateHiddenElements();
  }

  animateCentralSection() {
    this.cube.nativeElement.animate({
      duration: 650,
      curve: AnimationCurve.easeOut,
      translate: { x: -200, y: 0 }
    });
  }

  animateHiddenElements() {
    this.buttonAnimation.nativeElement.animate({
      duration: 700,
      curve: AnimationCurve.ease,
      translate: { x: 0, y: 200 }
    });
    this.data.nativeElement.animate({
      duration: 1000,
      curve: AnimationCurve.ease,
      translate: { x: 200, y: 0 }
    });
    this.data.nativeElement.animate({
      opacity: 1,
      duration: 1000
    });
  }

  animateBottomSection() {
    this.button.nativeElement.animate({
      duration: 700,
      curve: AnimationCurve.linear,
      translate: { x: 100, y: 0 }
    });
    this.description.nativeElement.animate({
      curve: AnimationCurve.easeIn,
      translate: { x: 0, y: 40 }
    }).then(() => {
      this.block2.nativeElement.animate({
        scale: { x: 1, y: 1.5 },
        curve: AnimationCurve.easeOut,
      })
    });
    this.title.nativeElement.animate({
      curve: AnimationCurve.easeIn,
      translate: { x: 0, y: 40 }
    });
  }

  reverseAnimationBottomSection() {
    this.button.nativeElement.animate({
      duration: 700,
      curve: AnimationCurve.linear,
      translate: { x: 500, y: 0 }
    });
    this.block2.nativeElement.animate({
      scale: { x: 1, y: 1 },
      curve: AnimationCurve.easeInOut,
    });
    this.title.nativeElement.animate({
      curve: AnimationCurve.linear,
      translate: { x: 0, y: 0 }
    });
    this.description.nativeElement.animate({
      curve: AnimationCurve.linear,
      translate: { x: 0, y: 0 }
    });
  }

  reverseAnimation() {
    this.reverseAnimationBottomSection();
    this.reverseAnimationCentralSection();
    this.reverseAnimationHiddenElements();
  }

  reverseAnimationCentralSection() {
    this.cube.nativeElement.animate({
      duration: 650,
      curve: AnimationCurve.easeOut,
      translate: { x: 0, y: 0 }
    });
  }

  reverseAnimationHiddenElements() {
    this.buttonAnimation.nativeElement.animate({
      duration: 700,
      curve: AnimationCurve.ease,
      translate: { x: 0, y: 0 }
    });
    this.data.nativeElement.animate({
      opacity: 0,
      duration: 900,
    });
    this.data.nativeElement.animate({
      duration: 900,
      curve: AnimationCurve.easeIn,
      translate: { x: 800, y: 0 }
    });
  }

  exitData() {
    this.reverseAnimation();
  }

}
