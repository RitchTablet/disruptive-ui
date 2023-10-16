import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '@app-core/interface/menu-list.interface';
import { SvgIconComponent } from 'angular-svg-icon';
import { Router } from '@angular/router';

@Component({
	selector: 'app-menu-list',
	standalone: true,
	imports: [CommonModule, SvgIconComponent],
	templateUrl: './menu-list.component.html',
	styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent {
	menuList: MenuItem[] = [
		{ name: 'Home', icon: './assets/icons/home.svg', redirecTo: 'dashboard' },
	];

	config: MenuItem = { name: 'Home', icon: './assets/icons/config.svg', redirecTo: 'configurations' };

	constructor(private readonly _router: Router) {}

	onRedirect(redirecTo: string): void {
		this._router.navigate([`${redirecTo}`]);
	}
}
