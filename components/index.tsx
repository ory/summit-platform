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

import {useState} from 'react';
import {PageState, ConfDataContext, UserData} from '@lib/hooks/use-conf-data';
import Ticket from './ticket/ticket';
import Layout from './layout/layout';
import Hero from './hero/hero';
import Form from './form/form';
import style from './background.module.css';
import styles from './index.module.css';
import Countdown from './hero/countdown';
import styleUtils from './utils.module.css';
import cn from 'classnames';

type Props = {
    defaultUserData: UserData;
    sharePage?: boolean;
    defaultPageState?: PageState;
};

export default function Conf({
                                 defaultUserData,
                                 sharePage,
                                 defaultPageState = 'registration'
                             }: Props) {
    const [userData, setUserData] = useState<UserData>(defaultUserData);
    const [pageState, setPageState] = useState<PageState>(defaultPageState);

    return (
        <ConfDataContext.Provider
            value={{
                userData,
                setUserData,
                setPageState
            }}
        >
            <Layout>
                <div className={cn(style.split, styleUtils.appear, styleUtils['appear-first'])}>
                    <div className={style.bg}>
                        <div className={cn(styles.wrapperbox, styleUtils.appear, styleUtils['appear-first'])}>
                            {pageState === 'registration' && !sharePage ? (
                                <>
                                    <Hero/>
                                    <Countdown/>
                                    <Form/>
                                </>
                            ) : (
                                <Ticket
                                    username={userData.username}
                                    name={userData.name}
                                    ticketNumber={userData.ticketNumber}
                                    sharePage={sharePage}
                                />
                            )}

                        </div>
                    </div>
                    <div className={cn(style.artwork, styleUtils.appear, styleUtils['appear-second'])}/>
                </div>
            </Layout>
        </ConfDataContext.Provider>
    );
}
