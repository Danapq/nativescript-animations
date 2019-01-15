"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var enums_1 = require("ui/enums");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.data.nativeElement.translateX = 800;
        this.button.nativeElement.translateX = 500;
    };
    HomeComponent.prototype.selectData = function () {
        this.animateCube();
    };
    HomeComponent.prototype.animateCube = function () {
        this.animateBottomSection();
        this.animateCentralSection();
        this.animateHiddenElements();
    };
    HomeComponent.prototype.animateCentralSection = function () {
        this.cube.nativeElement.animate({
            duration: 650,
            translate: { x: -200, y: 0 },
            curve: enums_1.AnimationCurve.easeInOut
        });
    };
    HomeComponent.prototype.animateHiddenElements = function () {
        this.buttonAnimation.nativeElement.animate({
            duration: 700,
            curve: enums_1.AnimationCurve.ease,
            translate: { x: 0, y: 200 }
        });
        this.data.nativeElement.animate({
            duration: 1000,
            curve: enums_1.AnimationCurve.ease,
            translate: { x: 200, y: 0 }
        });
        this.data.nativeElement.animate({
            opacity: 1,
            duration: 1200
        });
    };
    HomeComponent.prototype.animateBottomSection = function () {
        var _this = this;
        this.button.nativeElement.animate({
            duration: 700,
            curve: enums_1.AnimationCurve.linear,
            translate: { x: 100, y: 0 }
        });
        this.description.nativeElement.animate({
            curve: enums_1.AnimationCurve.easeIn,
            translate: { x: 0, y: 40 }
        }).then(function () {
            _this.block2.nativeElement.animate({
                scale: { x: 1, y: 1.5 },
                curve: enums_1.AnimationCurve.easeInOut,
                duration: 500
            });
        });
        this.title.nativeElement.animate({
            curve: enums_1.AnimationCurve.easeIn,
            translate: { x: 0, y: 40 }
        });
    };
    HomeComponent.prototype.reverseAnimationBottomSection = function () {
        this.button.nativeElement.animate({
            duration: 700,
            curve: enums_1.AnimationCurve.linear,
            translate: { x: 500, y: 0 }
        });
        this.block2.nativeElement.animate({
            scale: { x: 1, y: 1 },
            curve: enums_1.AnimationCurve.easeInOut,
            duration: 500
        });
        this.title.nativeElement.animate({
            curve: enums_1.AnimationCurve.linear,
            translate: { x: 0, y: 0 }
        });
        this.description.nativeElement.animate({
            curve: enums_1.AnimationCurve.linear,
            translate: { x: 0, y: 0 }
        });
    };
    HomeComponent.prototype.reverseAnimation = function () {
        this.reverseAnimationBottomSection();
        this.reverseAnimationCentralSection();
        this.reverseAnimationHiddenElements();
    };
    HomeComponent.prototype.reverseAnimationCentralSection = function () {
        this.cube.nativeElement.animate({
            duration: 650,
            curve: enums_1.AnimationCurve.easeInOut,
            translate: { x: 0, y: 0 }
        });
    };
    HomeComponent.prototype.reverseAnimationHiddenElements = function () {
        this.buttonAnimation.nativeElement.animate({
            duration: 700,
            curve: enums_1.AnimationCurve.ease,
            translate: { x: 0, y: 0 }
        });
        this.data.nativeElement.animate({
            opacity: 0,
            duration: 700,
        });
        this.data.nativeElement.animate({
            duration: 900,
            curve: enums_1.AnimationCurve.easeIn,
            translate: { x: 800, y: 0 }
        });
    };
    HomeComponent.prototype.exitData = function () {
        this.reverseAnimation();
    };
    __decorate([
        core_1.ViewChild('cube'),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "cube", void 0);
    __decorate([
        core_1.ViewChild('buttonAnimation'),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "buttonAnimation", void 0);
    __decorate([
        core_1.ViewChild('data'),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "data", void 0);
    __decorate([
        core_1.ViewChild('button'),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "button", void 0);
    __decorate([
        core_1.ViewChild('description'),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "description", void 0);
    __decorate([
        core_1.ViewChild('title'),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "title", void 0);
    __decorate([
        core_1.ViewChild('block1'),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "block1", void 0);
    __decorate([
        core_1.ViewChild('block2'),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "block2", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'ns-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxrQ0FBMEM7QUFRMUM7SUFXRTtJQUVBLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO0lBQzdDLENBQUM7SUFFRCxrQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxtQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELDZDQUFxQixHQUFyQjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztZQUM5QixRQUFRLEVBQUUsR0FBRztZQUNiLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQzVCLEtBQUssRUFBRSxzQkFBYyxDQUFDLFNBQVM7U0FDaEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDZDQUFxQixHQUFyQjtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztZQUN6QyxRQUFRLEVBQUUsR0FBRztZQUNiLEtBQUssRUFBRSxzQkFBYyxDQUFDLElBQUk7WUFDMUIsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxJQUFJLENB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Q2Y7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQVMsaUJBQVU7aURBQUM7SUFDZDtRQUF6QixnQkFBUyxDQUFDLGFBQWEsQ0FBQztrQ0FBYyxpQkFBVTtzREFBQztJQUM5QjtRQUFuQixnQkFBUyxDQUFDLE9BQU8sQ0FBQztrQ0FBUSxpQkFBVTtnREFBQztJQUNqQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBUyxpQkFBVTtpREFBQztJQUNuQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBUyxpQkFBVTtpREFBQztJQVQ3QixhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1lBQ25DLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDOztPQUNXLGFBQWEsQ0FxSXpCO0lBQUQsb0JBQUM7Q0FBQSxBQXJJRCxJQXFJQztBQXJJWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFuaW1hdGlvbkN1cnZlIH0gZnJvbSAndWkvZW51bXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1ob21lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQFZpZXdDaGlsZCgnY3ViZScpIGN1YmU6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2J1dHRvbkFuaW1hdGlvbicpIGJ1dHRvbkFuaW1hdGlvbjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnZGF0YScpIGRhdGE6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2J1dHRvbicpIGJ1dHRvbjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnZGVzY3JpcHRpb24nKSBkZXNjcmlwdGlvbjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgndGl0bGUnKSB0aXRsZTogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnYmxvY2sxJykgYmxvY2sxOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdibG9jazInKSBibG9jazI6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZGF0YS5uYXRpdmVFbGVtZW50LnRyYW5zbGF0ZVggPSA4MDA7XG4gICAgdGhpcy5idXR0b24ubmF0aXZlRWxlbWVudC50cmFuc2xhdGVYID0gNTAwO1xuICB9XG5cbiAgc2VsZWN0RGF0YSgpIHtcbiAgICB0aGlzLmFuaW1hdGVDdWJlKCk7XG4gIH1cblxuICBhbmltYXRlQ3ViZSgpIHtcbiAgICB0aGlzLmFuaW1hdGVCb3R0b21TZWN0aW9uKCk7XG4gICAgdGhpcy5hbmltYXRlQ2VudHJhbFNlY3Rpb24oKTtcbiAgICB0aGlzLmFuaW1hdGVIaWRkZW5FbGVtZW50cygpO1xuICB9XG5cbiAgYW5pbWF0ZUNlbnRyYWxTZWN0aW9uKCkge1xuICAgIHRoaXMuY3ViZS5uYXRpdmVFbGVtZW50LmFuaW1hdGUoe1xuICAgICAgZHVyYXRpb246IDY1MCxcbiAgICAgIHRyYW5zbGF0ZTogeyB4OiAtMjAwLCB5OiAwIH0sXG4gICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuZWFzZUluT3V0XG4gICAgfSk7XG4gIH1cblxuICBhbmltYXRlSGlkZGVuRWxlbWVudHMoKSB7XG4gICAgdGhpcy5idXR0b25BbmltYXRpb24ubmF0aXZlRWxlbWVudC5hbmltYXRlKHtcbiAgICAgIGR1cmF0aW9uOiA3MDAsXG4gICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuZWFzZSxcbiAgICAgIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAyMDAgfVxuICAgIH0pO1xuICAgIHRoaXMuZGF0YS5uYXRpdmVFbGVtZW50LmFuaW1hdGUoe1xuICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuZWFzZSxcbiAgICAgIHRyYW5zbGF0ZTogeyB4OiAyMDAsIHk6IDAgfVxuICAgIH0pO1xuICAgIHRoaXMuZGF0YS5uYXRpdmVFbGVtZW50LmFuaW1hdGUoe1xuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGR1cmF0aW9uOiAxMjAwXG4gICAgfSk7XG4gIH1cblxuICBhbmltYXRlQm90dG9tU2VjdGlvbigpIHtcbiAgICB0aGlzLmJ1dHRvbi5uYXRpdmVFbGVtZW50LmFuaW1hdGUoe1xuICAgICAgZHVyYXRpb246IDcwMCxcbiAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5saW5lYXIsXG4gICAgICB0cmFuc2xhdGU6IHsgeDogMTAwLCB5OiAwIH1cbiAgICB9KTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh7XG4gICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuZWFzZUluLFxuICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IDQwIH1cbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuYmxvY2syLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh7XG4gICAgICAgIHNjYWxlOiB7IHg6IDEsIHk6IDEuNSB9LFxuICAgICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuZWFzZUluT3V0LFxuICAgICAgICBkdXJhdGlvbjogNTAwXG4gICAgICB9KVxuICAgIH0pO1xuICAgIHRoaXMudGl0bGUubmF0aXZlRWxlbWVudC5hbmltYXRlKHtcbiAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlSW4sXG4gICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogNDAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV2ZXJzZUFuaW1hdGlvbkJvdHRvbVNlY3Rpb24oKSB7XG4gICAgdGhpcy5idXR0b24ubmF0aXZlRWxlbWVudC5hbmltYXRlKHtcbiAgICAgIGR1cmF0aW9uOiA3MDAsXG4gICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUubGluZWFyLFxuICAgICAgdHJhbnNsYXRlOiB7IHg6IDUwMCwgeTogMCB9XG4gICAgfSk7XG4gICAgdGhpcy5ibG9jazIubmF0aXZlRWxlbWVudC5hbmltYXRlKHtcbiAgICAgIHNjYWxlOiB7IHg6IDEsIHk6IDEgfSxcbiAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlSW5PdXQsXG4gICAgICBkdXJhdGlvbjogNTAwXG4gICAgfSk7XG4gICAgdGhpcy50aXRsZS5uYXRpdmVFbGVtZW50LmFuaW1hdGUoe1xuICAgICAgY3VydmU6IEFuaW1hdGlvbkN1cnZlLmxpbmVhcixcbiAgICAgIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAwIH1cbiAgICB9KTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh7XG4gICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUubGluZWFyLFxuICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IDAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV2ZXJzZUFuaW1hdGlvbigpIHtcbiAgICB0aGlzLnJldmVyc2VBbmltYXRpb25Cb3R0b21TZWN0aW9uKCk7XG4gICAgdGhpcy5yZXZlcnNlQW5pbWF0aW9uQ2VudHJhbFNlY3Rpb24oKTtcbiAgICB0aGlzLnJldmVyc2VBbmltYXRpb25IaWRkZW5FbGVtZW50cygpO1xuICB9XG5cbiAgcmV2ZXJzZUFuaW1hdGlvbkNlbnRyYWxTZWN0aW9uKCkge1xuICAgIHRoaXMuY3ViZS5uYXRpdmVFbGVtZW50LmFuaW1hdGUoe1xuICAgICAgZHVyYXRpb246IDY1MCxcbiAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlSW5PdXQsXG4gICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogMCB9XG4gICAgfSk7XG4gIH1cblxuICByZXZlcnNlQW5pbWF0aW9uSGlkZGVuRWxlbWVudHMoKSB7XG4gICAgdGhpcy5idXR0b25BbmltYXRpb24ubmF0aXZlRWxlbWVudC5hbmltYXRlKHtcbiAgICAgIGR1cmF0aW9uOiA3MDAsXG4gICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuZWFzZSxcbiAgICAgIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAwIH1cbiAgICB9KTtcbiAgICB0aGlzLmRhdGEubmF0aXZlRWxlbWVudC5hbmltYXRlKHtcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBkdXJhdGlvbjogNzAwLFxuICAgIH0pO1xuICAgIHRoaXMuZGF0YS5uYXRpdmVFbGVtZW50LmFuaW1hdGUoe1xuICAgICAgZHVyYXRpb246IDkwMCxcbiAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlSW4sXG4gICAgICB0cmFuc2xhdGU6IHsgeDogODAwLCB5OiAwIH1cbiAgICB9KTtcbiAgfVxuXG4gIGV4aXREYXRhKCkge1xuICAgIHRoaXMucmV2ZXJzZUFuaW1hdGlvbigpO1xuICB9XG5cbn1cbiJdfQ==