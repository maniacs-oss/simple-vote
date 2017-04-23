import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {
	PollService,
	UserService
} from '../../services';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	private collapseNavbar: boolean = true;

	constructor(private userService: UserService,
		private pollService: PollService,
		private route: ActivatedRoute,
		private router: Router) { }

	ngOnInit() {
	}

	toggleCollapseNavbar() {
		this.collapseNavbar = !this.collapseNavbar;
	}

	createPoll() {
		this.pollService.createPoll().subscribe(p => {
			console.log(p);
			this.router.navigate(['/poll', p.id]);
		});
	}


}