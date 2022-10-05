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
import JobsGrid from '@components/jobs/jobs-grid';
import Layout from '@components/layout/layout';
import Header from '@components/layout/header';

import { getAllJobs } from '@lib/cms-api';
import { Job } from '@lib/types';
import { META_DESCRIPTION } from '@lib/constants';

type Props = {
  jobs: Job[];
};

export default function Jobs({ jobs }: Props) {
  const meta = {
    title: 'Ory Summit 2022 - Jobs',
    description: 'We are looking for talented, creative people to build the future of Ory!'
  };

  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="Jobs" description={meta.description} />
        <JobsGrid jobs={jobs} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const jobs = await getAllJobs();

  return {
    props: {
      jobs
    },
    revalidate: 60
  };
};
