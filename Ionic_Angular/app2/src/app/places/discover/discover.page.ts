import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { PlacesService } from '../places.service';
import { Place } from '../place.model';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss']
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[];

  constructor(
    private placesService: PlacesService,
    private menuCtrl: MenuController
  ) {}

  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
  }

  onOpenMenu() {
    this.menuCtrl.toggle();
  }

  share = {
    displayNames: true,
    config: [{
      facebook: {
        socialShareUrl: 'http://websocialshare.com',
        socialSharePopupWidth: 400,
        socialSharePopupHeight: 400
      }
    },{
      twitter: {
        socialShareUrl: 'http://websocialshare.com',
        socialSharePopupWidth: 300,
        socialSharePopupHeight: 400
      }
    },{
      reddit: {
        socialShareUrl: 'http://websocialshare.com',
        socialSharePopupWidth: 300,
        socialSharePopupHeight: 500
      }
    },{
      linkedin: {
        socialShareUrl: 'http://websocialshare.com'
      }
    },{
      pinterest: {
        socialShareUrl: 'http://websocialshare.com'
      }
    },{
      email: {
        socialShareTo: 'david.dalbusco@outlook.com',
        socialShareBody: 'http://websocialshare.com'
      }
    }, {
      whatsapp: {
        socialShareText: 'Hello, how are you?',
        socialShareUrl: 'http://websocialshare.com'
      }
    },{
      copy: {
        socialShareUrl: 'http://websocialshare.com'
      }
    },{
        hackernews: {
            socialShareText: 'Web Social Share',
            socialShareUrl: 'http://websocialshare.com'
        }
    }]
  };
}
