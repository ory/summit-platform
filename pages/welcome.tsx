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

 import Page from '@components/page';
 import Layout from '@components/layout';
 import Header from '@components/header';
 import ConfContainer from '@components/conf-container';
 import Textbox from '@components/textbox';
 
 export default function WelcomePage({ }) {
   const meta = {
     title: 'Ory Summit 2022 - Welcome'
   };
 
   return (
     <Page meta={meta}>
       <Layout>
         <ConfContainer>
           <Textbox>
           <h1>Welcome to Ory Summit 2022</h1>
               <p>
                 Ory Summit is a global, free and hybrid conference around identity
                 management focused on but not limited to authentication, authorization, access
                 control and security for the whole Ory Community - users, developers, maintainers,
                 contributors, and partners.
               </p>
               <h2>Explore the themes</h2>
               <ul>
                 <li>
                   <strong>Ory implementation -</strong> how to implemented Ory into an application/project
                 </li>
                 <li>
                   <strong>Ecosystem & Integration -</strong> how to use Ory with third
                   party solutions
                 </li>
                 <li>
                   <strong>Community Talks -</strong> learn from Ory Community members
                 </li>
                 <li>
                   <strong>Teams & Workflow -</strong> how Ory is making software teams more effective
                 </li>
                 <li>
                   <strong>Concept Talks -</strong> authorization & authentication, open source, cloud architecture & security, and more.
                 </li>
               </ul>
               <br/>
 
               <div className="quote">
                 <h2><u><a href="https://sessionize.com/ory-summit/" rel="nofollow">
                 Click here to present at Ory Summit 2022!
                     </a></u></h2>
               </div>
               <br/>
               <h2>Attend Ory Summit</h2>
               <ul>
                 <li>Code examples and answers from the experts</li>
                 <li>Expand your network</li>
                 <li>Learn about cloud security best practices</li>
                 <li>Get inspired by tech pioneers and industry leaders</li>
                 <li>Level up your skills by engaging in tech talks delivered by proven experts.</li>
               </ul>
               <p>
                 For all general inquiries, please contact:{' '}
                 <a href="mailto:office@ory.sh">office@ory.sh</a>
               </p>
           </Textbox>
         </ConfContainer>
       </Layout>
     </Page>
   );
 }