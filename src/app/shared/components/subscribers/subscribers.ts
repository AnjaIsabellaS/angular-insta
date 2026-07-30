import { Component, inject } from '@angular/core';
import { SubscriberList } from '../../../services/subscriber-list';
import { Subscriber } from '../../interfaces/subscriber';

@Component({
  selector: 'app-subscribers',
  imports: [],
  templateUrl: './subscribers.html',
  styleUrl: './subscribers.scss',
})
export class Subscribers {
  private subscriberList = inject(SubscriberList);
  subscribers = this.subscriberList.subscribers;

toggleFollow(subscriber: Subscriber) {
  subscriber.isFollowing = !subscriber.isFollowing;
}

}

