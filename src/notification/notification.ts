import {Link, Store} from '../store/model';
import {adjustPhilipsHueLights} from './philips-hue';
import {playSound} from './sound';
import {sendDesktopNotification} from './desktop';
import {sendDiscordMessage} from './discord';
import {sendEmail} from './email';
import {sendMqttMessage} from './mqtt';
import {sendPagerDutyNotification} from './pagerduty';
import {sendPushbulletNotification} from './pushbullet';
import {sendPushoverNotification} from './pushover';
import {sendSlackMessage} from './slack';
import {sendSms} from './sms';
import {sendTelegramMessage} from './telegram';
import {sendTweet} from './twitter';
import {sendTwilioMessage} from './twilio';
import {sendTwitchMessage} from './twitch';
import {sendTwitchMessageDelay} from './twitch';
import {sendTwitchMessageDelay2} from './twitch';
import {sendTwitchMessagePreorder} from './twitch';

export function sendNotification(link: Link, store: Store) {
	// Priority
	playSound();
	sendEmail(link, store);
	sendSms(link, store);
	sendDesktopNotification(link, store);
	// Non-priority
	adjustPhilipsHueLights();
	sendDiscordMessage(link, store);
	sendMqttMessage(link, store);
	sendPagerDutyNotification(link, store);
	sendPushbulletNotification(link, store);
	sendPushoverNotification(link, store);
	sendSlackMessage(link, store);
	sendTelegramMessage(link, store);
	sendTweet(link, store);
	sendTwilioMessage(link, store);
}
export function sendNotification0(link: Link, store: Store) {
	// Priority
	sendTwitchMessage(link, store);
}export function sendNotification1(link: Link, store: Store) {
	// Priority
	sendTwitchMessageDelay(link, store);
}
export function sendNotification2(link: Link, store: Store) {
	// Priority
	sendTwitchMessageDelay2(link, store);
}
export function sendNotification3(link: Link, store: Store) {
	// Priority
	sendTwitchMessagePreorder(link, store);
}
