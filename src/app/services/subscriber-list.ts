import { Service } from '@angular/core';
import { Injectable } from '@angular/core';
import { Subscriber } from '../shared/interfaces/subscriber';

@Injectable({
  providedIn: 'root',
})
export class SubscriberList {
  subscribers = [
    { name: 'Anna Müller', isFollowing: true },
    { name: 'Bernd Schmidt', isFollowing: false },
    { name: 'Clara Fischer', isFollowing: true },
    { name: 'David Weber', isFollowing: false },
    { name: 'Eva Becker', isFollowing: true },
  ];
}




