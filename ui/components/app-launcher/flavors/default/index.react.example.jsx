/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { Modal, ModalHeader, ModalContent } from 'ui/components/modals/flavors/base/index.react.example';
import { AppLauncherTile } from 'ui/components/app-launcher/flavors/tile/index.react.example';
import className from 'classnames';


//////////////////////////////////////////////
// Partial(s)
//////////////////////////////////////////////

let AppLauncherModal = props =>
  <Modal className="slds-modal--large slds-app-launcher" aria-labelledby="header43">
    <ModalHeader className="slds-app-launcher__header slds-grid slds-grid--align-spread slds-grid--vertical-align-center">
      <h2 id="header43" className="slds-text-heading--medium">App Launcher</h2>
      <div className="slds-app-launcher__header-search">
        <div className="slds-form-element">
          <label htmlFor="app-launcher-search" className="slds-form-element__label slds-assistive-text">Find an app</label>
          <div className="slds-form-element__control slds-input-has-icon slds-input-has-icon--left">
            <SvgIcon className="slds-input__icon" sprite="utility" symbol="search" />
            <input type="search" className="slds-input" id="app-launcher-search" placeholder="Find an app" />
          </div>
        </div>
      </div>
      <button className="slds-button slds-button--neutral">App Exchange</button>
    </ModalHeader>
    <ModalContent className="slds-app-launcher__content slds-p-around--medium">
      <div className="slds-section slds-is-open">
        <div className="slds-section__title">
          <button className="slds-button slds-button--icon slds-m-right--small">
            <SvgIcon className="slds-button__icon" sprite="utility" symbol="switch" />
            <span className="slds-assistive-text">Toggle visibility of section</span>
          </button>
          <h3>All Apps</h3>
        </div>
        <div className="slds-section__content">
          <ul className="slds-grid slds-grid--pull-padded slds-wrap">
            <li className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-3">
              <AppLauncherTile objectInitials="SC" figureClass="slds-icon-custom-27" draggable>
                <span className="slds-text-link">Sales Cloud</span>
                <p>The primary internal Salesforce org. Used to run our...<span className="slds-text-link">More</span></p>
              </AppLauncherTile>
            </li>
            <li className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-3">
              <AppLauncherTile objectInitials="MC" figureClass="slds-icon-custom-59" draggable>
                <span className="slds-text-link">Marketing Cloud</span>
                <p>Salesforce Marketing Cloud lets businesses of any size...<span className="slds-text-link">More</span></p>
              </AppLauncherTile>
            </li>
            <li className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-3">
              <AppLauncherTile objectInitials="HR" figureClass="slds-icon-custom-10" draggable>
                <span className="slds-text-link">HR Concierge</span>
                <p>Community for managing employee benefits and time off.</p>
              </AppLauncherTile>
            </li>
            <li className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-3">
              <AppLauncherTile objectInitials="MM" figureClass="slds-icon-custom-6" draggable>
                <span className="slds-text-link">My Money</span>
                <p>Manage your finances across multiple financial platforms...<span className="slds-text-link">More</span></p>
              </AppLauncherTile>
            </li>
            <li className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-3">
              <AppLauncherTile objectInitials="CC" figureClass="slds-icon-custom-91" draggable>
                <span className="slds-text-link">Call Center</span>
                <p>The key to call center and contact center management is more...<span className="slds-text-link">More</span></p>
              </AppLauncherTile>
            </li>
            <li className="slds-p-horizontal--small slds-size--1-of-1 slds-medium-size--1-of-3">
              <AppLauncherTile objectInitials="CS" figureClass="slds-icon-custom-50" draggable>
                <span className="slds-text-link">Customer Support Communitiy</span>
                <p>Areas of Focus are used to track customer support for your...<span className="slds-text-link">More</span></p>
              </AppLauncherTile>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="slds-section slds-is-open">
        <div className="slds-section__title">
          <button className="slds-button slds-button--icon slds-m-right--small">
            <SvgIcon className="slds-button__icon" sprite="utility" symbol="switch" />
            <span className="slds-assistive-text">Toggle visibility of section</span>
          </button>
          <h3>All Items</h3>
        </div>
        <div className="slds-section__content">
        <ul className="slds-grid slds-grid--pull-padded slds-wrap">
          <li className="slds-p-horizontal--small slds-size--xx-small">
            <AppLauncherTile flavor="small" symbol="account">
              <p className="slds-truncate slds-text-link" title="Accounts">Accounts</p>
            </AppLauncherTile>
          </li>
          <li className="slds-p-horizontal--small slds-size--xx-small">
            <AppLauncherTile flavor="small" symbol="announcement">
              <p className="slds-truncate slds-text-link" title="Announcements">Announcements</p>
            </AppLauncherTile>
          </li>
          <li className="slds-p-horizontal--small slds-size--xx-small">
            <AppLauncherTile flavor="small" symbol="approval">
              <p className="slds-truncate slds-text-link" title="Approvals">Approvals</p>
            </AppLauncherTile>
          </li>
          <li className="slds-p-horizontal--small slds-size--xx-small">
            <AppLauncherTile flavor="small" symbol="campaign">
              <p className="slds-truncate slds-text-link" title="Campaigns">Campaigns</p>
            </AppLauncherTile>
          </li>
          <li className="slds-p-horizontal--small slds-size--xx-small">
            <AppLauncherTile flavor="small" symbol="case">
              <p className="slds-truncate slds-text-link" title="Cases">Cases</p>
            </AppLauncherTile>
          </li>
          <li className="slds-p-horizontal--small slds-size--xx-small">
            <AppLauncherTile flavor="small" symbol="coaching">
              <p className="slds-truncate slds-text-link" title="Coaching">Coaching</p>
            </AppLauncherTile>
          </li>
          <li className="slds-p-horizontal--small slds-size--xx-small">
            <AppLauncherTile flavor="small" symbol="contact">
              <p className="slds-truncate slds-text-link" title="Contacts">Contacts</p>
            </AppLauncherTile>
          </li>
        </ul>
        </div>
      </div>
    </ModalContent>
  </Modal>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export default (
  <div className="demo-only" style={{ height: '800px' }}>
    <AppLauncherModal />
    <div className="slds-backdrop slds-backdrop--open" />
  </div>
);
