/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const SITE_URL = 'https://ory-events.vercel.app/';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'orycorp';
export const BRAND_NAME = 'Ory';
export const SITE_NAME_MULTILINE = ['Ory', 'Summit'];
export const SITE_NAME = 'Ory Summit 2022';
export const META_DESCRIPTION =
  'The Ory Summit is a developer conference around identity management focused on authentication, authorization, access control and cloud security.';
export const SITE_DESCRIPTION =
  'The future of identity infrastructure by the Ory community, free for everyone.';
export const DATE = 'October 20, 2022';
export const SHORT_DATE = 'Oct 20 2022 - 11:00am CET';
export const TIME = '11am Central European Time (GMT+2)';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = 'https://www.ory.sh/privacy/';
export const COPYRIGHT_HOLDER = 'Ory';

export const CODE_OF_CONDUCT = 'https://www.ory.sh/code-of-conduct/';
export const REPO = 'https://github.com/ory/';
export const SAMPLE_TICKET_NUMBER = 666;
export const NAVIGATION = [
  {
    name: 'Welcome',
    route: '/welcome'
  },
  {
    name: 'Main Stage',
    route: '/stage/main'
  },
  {
    name: 'Schedule',
    route: '/schedule'
  },
  {
    name: 'Speakers',
    route: '/speakers'
  },
  {
    name: 'Jobs',
    route: '/jobs'
  }
];

export type TicketGenerationState = 'default' | 'loading';
