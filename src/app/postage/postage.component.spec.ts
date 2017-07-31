import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PostageComponent} from './postage.component';

describe('PostageComponent', () => {
    let component: PostageComponent;
    let fixture: ComponentFixture<PostageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PostageComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PostageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
