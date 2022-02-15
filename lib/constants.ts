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
  'The Ory Summit is a developer conference around cloud identity infrastructure focused on but not limited to authentication, authorization, access control and cloud security.';
export const SITE_DESCRIPTION =
  'The future of identity infrastructure by the Ory community, free for everyone.';
export const DATE = 'October 27-28, 2022';
export const SHORT_DATE = 'Oct 27-28 - 9:00am PST';
export const FULL_DATE = 'Oct 28th 9am Pacific Time (GMT-7)';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';
 


// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT =
  'https://www.ory.sh/code-of-conduct/';
export const REPO = 'https://github.com/ory/';
export const SAMPLE_TICKET_NUMBER = 666;
export const NAVIGATION = [
  {
    name: 'Main Stage',
    route: '/stage/main'
  },
  {
    name: 'Tutorials',
    route: '/stage/a'
  },
  {
    name: 'Hackathon',
    route: '/stage/b'
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



