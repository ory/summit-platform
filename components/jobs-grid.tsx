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

import { Job } from '@lib/types';
import styles from './jobs-grid.module.css';

type Props = {
  jobs: Job[];
};

function CompanyJobs({ jobs }: Props) {
  return (
    <div className={styles.grid}>
      {jobs.map(job => (
        <a
          key={job.id}
          className={styles.card}
          href={job.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.cardBody}>
            <div>
              <h3 className={styles.title}>{job.title}</h3>
              <p className={styles.company}>{job.companyName}</p>
              <p className={styles.description}>{job.description}</p>
            </div>
            <p className={styles.link}>
              Learn More
              <svg
                className={styles.icon}
                viewBox="0 0 24 24"
                width="16"
                height="16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                shapeRendering="geometricPrecision"
              >
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <path d="M15 3h6v6" />
                <path d="M10 14L21 3" />
              </svg>
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}

export default function JobsGrid({ jobs }: Props) {
  const companies = jobs.reduce((allCompanies: any, job) => {
    allCompanies[job.companyName] = [...(allCompanies[job.companyName] || []), job];
    return allCompanies;
  }, {});

  return (
    <>
      {Object.keys(companies).map((companyName: string) => (
        <div key={companyName} className={styles.companyRow}>
          <div className={styles.rowHeader}>
            <h2 className={styles.companyName}>{companyName}</h2>
            <a
              href={companies[companyName][0].discord}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              <span>Speak to the team on</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 245 240"
                fill="white"
              >
                <g>
                  <g>
                    <path d="M99.4,151.2c0,7.1-5.8,12.9-12.9,12.9s-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9h12.9V151.2z" />
                    <path
                      d="M105.9,151.2c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9v32.3c0,7.1-5.8,12.9-12.9,12.9s-12.9-5.8-12.9-12.9
			C105.9,183.5,105.9,151.2,105.9,151.2z"
                    />
                  </g>
                  <g>
                    <path d="M118.8,99.4c-7.1,0-12.9-5.8-12.9-12.9s5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9v12.9H118.8z" />
                    <path
                      d="M118.8,105.9c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9H86.5c-7.1,0-12.9-5.8-12.9-12.9s5.8-12.9,12.9-12.9
			C86.5,105.9,118.8,105.9,118.8,105.9z"
                    />
                  </g>
                  <g>
                    <path d="M170.6,118.8c0-7.1,5.8-12.9,12.9-12.9c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9h-12.9V118.8z" />
                    <path
                      d="M164.1,118.8c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9V86.5c0-7.1,5.8-12.9,12.9-12.9
			c7.1,0,12.9,5.8,12.9,12.9V118.8z"
                    />
                  </g>
                  <g>
                    <path d="M151.2,170.6c7.1,0,12.9,5.8,12.9,12.9c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9v-12.9H151.2z" />
                    <path
                      d="M151.2,164.1c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9h32.3c7.1,0,12.9,5.8,12.9,12.9
			c0,7.1-5.8,12.9-12.9,12.9H151.2z"
                    />
                  </g>
                </g>
              </svg>
            </a>
          </div>
          <CompanyJobs jobs={companies[companyName]} />
        </div>
      ))}
    </>
  );
}
