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

import useSWR from 'swr';
import cn from 'classnames';
import { Stage } from '@lib/types';
import useLoginStatus from '@lib/hooks/use-login-status';
import styles from './stage-container.module.css';
import styleUtils from './utils.module.css';
import ScheduleSidebar from './schedule-sidebar';
import ConfEntry from './conf-entry';

type Props = {
  stage: Stage;
  allStages: Stage[];
};

export default function StageContainer({ stage, allStages }: Props) {
  const response = useSWR('/api/stages', {
    initialData: allStages,
    refreshInterval: 5000
  });

  const updatedStages = response.data || [];
  const updatedStage = updatedStages.find((s: Stage) => s.slug === stage.slug) || stage;
  const { loginStatus, mutate } = useLoginStatus();

  return (
    <div className={styles.container}>
      <div className={styles.streamContainer}>
        {loginStatus === 'loggedIn' ? (
          <div className={cn(styles.stream, styleUtils.appear, styleUtils['appear-first'])}>
            <iframe
              allow="autoplay; picture-in-picture"
              allowFullScreen
              frameBorder="0"
              src={`${updatedStage.stream}?autoplay=1&mute=1`}
              title={updatedStage.name}
              width="100%"
            />
            <div className={cn(styles.bottom, styleUtils.appear, styleUtils['appear-second'])}>
              <div className={styles.messageContainer}>
                <h2 className={styles.stageName}>{stage.name}</h2>
              </div>
              <a
                href={updatedStage.discord}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                <span>Join the chat</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 245 240"
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
          </div>
        ) : loginStatus === 'loading' ? null : (
          <ConfEntry onRegister={() => mutate()} />
        )}
      </div>
      <ScheduleSidebar allStages={updatedStages} />
    </div>
  );
}
