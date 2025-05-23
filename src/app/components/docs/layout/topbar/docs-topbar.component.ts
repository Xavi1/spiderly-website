import { Router } from '@angular/router';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { DocsLayoutService } from '../docs-layout.service';

@Component({
    selector: 'docs-topbar',
    templateUrl: './docs-topbar.component.html',
    styleUrl: '../docs-layout.component.scss',
    standalone: true,
    imports: [
      CommonModule,
    ]
})
export class DocsAppTopBarComponent {
  @ViewChild('menubutton') menubutton!: ElementRef;

  constructor(
    public layoutService: DocsLayoutService, 
    public el: ElementRef,
    protected router: Router,
  ) { 
  }

  ngOnInit(){
    
  }

  onDocumentClick(event: any) {
    
  }

}