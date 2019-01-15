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
            curve: enums_1.AnimationCurve.easeOut,
            translate: { x: -200, y: 0 }
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
            duration: 1000
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
                curve: enums_1.AnimationCurve.easeOut,
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
            curve: enums_1.AnimationCurve.easeOut,
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
            duration: 900,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxrQ0FBMEM7QUFRMUM7SUFXRTtJQUVBLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO0lBQzdDLENBQUM7SUFFRCxrQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxtQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELDZDQUFxQixHQUFyQjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztZQUM5QixRQUFRLEVBQUUsR0FBRztZQUNiLEtBQUssRUFBRSxzQkFBYyxDQUFDLE9BQU87WUFDN0IsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7U0FDN0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDZDQUFxQixHQUFyQjtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztZQUN6QyxRQUFRLEVBQUUsR0FBRztZQUNiLEtBQUssRUFBRSxzQkFBYyxDQUFDLElBQUk7WUFDMUIsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxJQUFJLENB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O2lEQUFDO0lBQ2Q7UUFBekIsZ0JBQVMsQ0FBQyxhQUFhLENBQUM7a0NBQWMsaUJBQVU7c0RBQUM7SUFDOUI7UUFBbkIsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7a0NBQVEsaUJBQVU7Z0RBQUM7SUFDakI7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQVMsaUJBQVU7aURBQUM7SUFDbkI7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQVMsaUJBQVU7aURBQUM7SUFUN0IsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztZQUNuQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzs7T0FDVyxhQUFhLENBbUl6QjtJQUFELG9CQUFDO0NBQUEsQUFuSUQsSUFtSUM7QUFuSVksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmltYXRpb25DdXJ2ZSB9IGZyb20gJ3VpL2VudW1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9ob21lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBWaWV3Q2hpbGQoJ2N1YmUnKSBjdWJlOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdidXR0b25BbmltYXRpb24nKSBidXR0b25BbmltYXRpb246IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2RhdGEnKSBkYXRhOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdidXR0b24nKSBidXR0b246IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2Rlc2NyaXB0aW9uJykgZGVzY3JpcHRpb246IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3RpdGxlJykgdGl0bGU6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2Jsb2NrMScpIGJsb2NrMTogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnYmxvY2syJykgYmxvY2syOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmRhdGEubmF0aXZlRWxlbWVudC50cmFuc2xhdGVYID0gODAwO1xuICAgIHRoaXMuYnV0dG9uLm5hdGl2ZUVsZW1lbnQudHJhbnNsYXRlWCA9IDUwMDtcbiAgfVxuXG4gIHNlbGVjdERhdGEoKSB7XG4gICAgdGhpcy5hbmltYXRlQ3ViZSgpO1xuICB9XG5cbiAgYW5pbWF0ZUN1YmUoKSB7XG4gICAgdGhpcy5hbmltYXRlQm90dG9tU2VjdGlvbigpO1xuICAgIHRoaXMuYW5pbWF0ZUNlbnRyYWxTZWN0aW9uKCk7XG4gICAgdGhpcy5hbmltYXRlSGlkZGVuRWxlbWVudHMoKTtcbiAgfVxuXG4gIGFuaW1hdGVDZW50cmFsU2VjdGlvbigpIHtcbiAgICB0aGlzLmN1YmUubmF0aXZlRWxlbWVudC5hbmltYXRlKHtcbiAgICAgIGR1cmF0aW9uOiA2NTAsXG4gICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuZWFzZU91dCxcbiAgICAgIHRyYW5zbGF0ZTogeyB4OiAtMjAwLCB5OiAwIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFuaW1hdGVIaWRkZW5FbGVtZW50cygpIHtcbiAgICB0aGlzLmJ1dHRvbkFuaW1hdGlvbi5uYXRpdmVFbGVtZW50LmFuaW1hdGUoe1xuICAgICAgZHVyYXRpb246IDcwMCxcbiAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlLFxuICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IDIwMCB9XG4gICAgfSk7XG4gICAgdGhpcy5kYXRhLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh7XG4gICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlLFxuICAgICAgdHJhbnNsYXRlOiB7IHg6IDIwMCwgeTogMCB9XG4gICAgfSk7XG4gICAgdGhpcy5kYXRhLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh7XG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgZHVyYXRpb246IDEwMDBcbiAgICB9KTtcbiAgfVxuXG4gIGFuaW1hdGVCb3R0b21TZWN0aW9uKCkge1xuICAgIHRoaXMuYnV0dG9uLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh7XG4gICAgICBkdXJhdGlvbjogNzAwLFxuICAgICAgY3VydmU6IEFuaW1hdGlvbkN1cnZlLmxpbmVhcixcbiAgICAgIHRyYW5zbGF0ZTogeyB4OiAxMDAsIHk6IDAgfVxuICAgIH0pO1xuICAgIHRoaXMuZGVzY3JpcHRpb24ubmF0aXZlRWxlbWVudC5hbmltYXRlKHtcbiAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlSW4sXG4gICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogNDAgfVxuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5ibG9jazIubmF0aXZlRWxlbWVudC5hbmltYXRlKHtcbiAgICAgICAgc2NhbGU6IHsgeDogMSwgeTogMS41IH0sXG4gICAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlT3V0LFxuICAgICAgfSlcbiAgICB9KTtcbiAgICB0aGlzLnRpdGxlLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh7XG4gICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuZWFzZUluLFxuICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IDQwIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldmVyc2VBbmltYXRpb25Cb3R0b21TZWN0aW9uKCkge1xuICAgIHRoaXMuYnV0dG9uLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh7XG4gICAgICBkdXJhdGlvbjogNzAwLFxuICAgICAgY3VydmU6IEFuaW1hdGlvbkN1cnZlLmxpbmVhcixcbiAgICAgIHRyYW5zbGF0ZTogeyB4OiA1MDAsIHk6IDAgfVxuICAgIH0pO1xuICAgIHRoaXMuYmxvY2syLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh7XG4gICAgICBzY2FsZTogeyB4OiAxLCB5OiAxIH0sXG4gICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuZWFzZUluT3V0LFxuICAgIH0pO1xuICAgIHRoaXMudGl0bGUubmF0aXZlRWxlbWVudC5hbmltYXRlKHtcbiAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5saW5lYXIsXG4gICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogMCB9XG4gICAgfSk7XG4gICAgdGhpcy5kZXNjcmlwdGlvbi5uYXRpdmVFbGVtZW50LmFuaW1hdGUoe1xuICAgICAgY3VydmU6IEFuaW1hdGlvbkN1cnZlLmxpbmVhcixcbiAgICAgIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAwIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldmVyc2VBbmltYXRpb24oKSB7XG4gICAgdGhpcy5yZXZlcnNlQW5pbWF0aW9uQm90dG9tU2VjdGlvbigpO1xuICAgIHRoaXMucmV2ZXJzZUFuaW1hdGlvbkNlbnRyYWxTZWN0aW9uKCk7XG4gICAgdGhpcy5yZXZlcnNlQW5pbWF0aW9uSGlkZGVuRWxlbWVudHMoKTtcbiAgfVxuXG4gIHJldmVyc2VBbmltYXRpb25DZW50cmFsU2VjdGlvbigpIHtcbiAgICB0aGlzLmN1YmUubmF0aXZlRWxlbWVudC5hbmltYXRlKHtcbiAgICAgIGR1cmF0aW9uOiA2NTAsXG4gICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuZWFzZU91dCxcbiAgICAgIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAwIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldmVyc2VBbmltYXRpb25IaWRkZW5FbGVtZW50cygpIHtcbiAgICB0aGlzLmJ1dHRvbkFuaW1hdGlvbi5uYXRpdmVFbGVtZW50LmFuaW1hdGUoe1xuICAgICAgZHVyYXRpb246IDcwMCxcbiAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlLFxuICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IDAgfVxuICAgIH0pO1xuICAgIHRoaXMuZGF0YS5uYXRpdmVFbGVtZW50LmFuaW1hdGUoe1xuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIGR1cmF0aW9uOiA5MDAsXG4gICAgfSk7XG4gICAgdGhpcy5kYXRhLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh7XG4gICAgICBkdXJhdGlvbjogOTAwLFxuICAgICAgY3VydmU6IEFuaW1hdGlvbkN1cnZlLmVhc2VJbixcbiAgICAgIHRyYW5zbGF0ZTogeyB4OiA4MDAsIHk6IDAgfVxuICAgIH0pO1xuICB9XG5cbiAgZXhpdERhdGEoKSB7XG4gICAgdGhpcy5yZXZlcnNlQW5pbWF0aW9uKCk7XG4gIH1cblxufVxuIl19