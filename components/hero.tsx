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

import cn from 'classnames';
import styleUtils from './utils.module.css';
import styles from './hero.module.css';
import { BRAND_NAME, DATE, SITE_DESCRIPTION } from '@lib/constants';

export default function Hero() {
  return (
    <div className={styles.wrapper}>
      <h1 className={cn(styleUtils.appear, styleUtils['appear-third'], styles.hero)}>
        {BRAND_NAME} Summit 2022
        <br className={styleUtils['show-on-desktop']} />
      </h1>
      <div className={cn(styleUtils.appear, styleUtils['appear-fourth'], styles.info)}>
        <p>
          <strong>{DATE}</strong>
        </p>
        <div className={styles['description-separator']} />
        <p>
          <strong>Online & Munich, Germany </strong>
        </p>
        <br className={styleUtils['show-on-desktop']} />
      </div>
      <div className={cn(styleUtils.appear, styleUtils['appear-fifth'], styles.infosmall)}>
        <p>A free developer conference around open source identity management.</p>
      </div>
    </div>
  );
}
