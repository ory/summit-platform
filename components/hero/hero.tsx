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
import styleUtils from '../utils.module.css';
import styles from './hero.module.css';
import { SHORT_DATE, TAGLINE} from '@lib/constants';



export default function Hero() {
    return (
        <div className={cn(styles.hero, styleUtils.appear, styleUtils['appear-second'])}>
            <div className={cn(styles.herocontainer)}>
                <div className={styles.logocontainer}>
                    <img src={"./ory_summit.png"} alt={"Ory Summit 2022 Logo"}/>
                </div>
                <div className={styles.infocontainer}>
                    <div className={cn(styles.taglinecontainer,)}>
                        <div>{TAGLINE}</div>
                    </div>
                    <div className={cn(styles.datecontainer)}>
                        <div>{SHORT_DATE}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
