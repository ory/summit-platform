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

import { GetStaticProps } from 'next';

import Page from '@components/layout/page';
import Layout from '@components/layout/layout';
import Header from '@components/layout/header';
import ConfContainer from '@components/container/conf-container';
import { META_DESCRIPTION } from '@lib/constants';
import style from '../components/background.module.css';
import Venue from '@components/venue/venue';

export default function VenuePage({}) {
  const meta = {
    title: 'Ory Summit 2022 - Venue',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta} fullViewport>
      <Layout>
        <div className={style.bg}>
          <Header hero="Venue & Location" />
          <ConfContainer>
            <Venue />
          </ConfContainer>
        </div>
      </Layout>
    </Page>
  );
}
