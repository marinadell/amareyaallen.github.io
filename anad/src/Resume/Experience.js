import React from 'react';

function Experience() {
  return (
      <div>
          <h3>Experience</h3>
          <div className="experience">
          <h4>Prime Digital Academy- <p className="position">Software Development Student</p></h4>
          <p className="date">JANUARY  2019 - PRESENT</p>
          <ul className="description">
            <li>Solo Project: Sole Check <a href="https://github.com/marinadell/sole-check" className="link-tags">Github Link</a></li>
                <ul>
                    <li>This app was created for sneakerhead to be able to catalog their shoes and update when they wore the shoe.</li>
                    <li>On this app the user has the ability to upload new shoes, view all their shoes, update the date it was worn and delete the shoe if removed from their collection.</li>
                    <li>Node, Express, React, Redux, React-redux, Redux-logger, Redux-saga, react-router-dom, Postgresql,  AWS S3, Moment.js, Material UI, Sweet Alert, Passport</li>
                </ul>
          </ul>
          <h4>Lutheran Social Services- <p className="position">Direct Support Professional</p></h4>
          <p className="date">JANUARY  2019 - PRESENT</p>
          <ul className="description">
            <li>Provide guidance and encouragement, through relationship building and direct interaction with vulnerable adults.</li>
            <li>Advocate for individuals in all aspects on life, and support individuals in essential living skills.</li>
          </ul>
          <h4>UPS- <p className="position">Package Unloader</p></h4>
          <p className="date">NOVEMBER 2018 - JANUARY 2019</p>
          <ul className="description">
            <li>Unload freight off of trucks to be transported to a different location.</li>
            <li>Maintain workflow at 100 packages an hour.</li>
          </ul>
          <h4>CoreLogic- <p className="position">Customer Service Representative</p></h4>
          <p className="date">APRIL  2018 - NOVEMBER  2018</p>
          <ul className="description">
            <li>Assist external customers with property appraisal concerns and inquiries.</li>
            <li>Utilized multiple systems and technologies.</li>
            <li>Maintain individual performance relative to inbound calls and outbound calls.</li>
          </ul>
          <h4>Foot Locker- <p className="position">Store Manager</p></h4>
          <p className="date">NOVEMBER 2014 -APRIL 2018</p>
          <ul className="description">
            <li>Coach and lead a team in delivering a quality in-store experience</li>
            <li>Lead the team in day to day store operations, training and employee management.</li>
            <li>Maximize profit goals and drive sales.</li>
            <li>Learn all updates to our register’s operating system and train managers on new updates.</li>
          </ul>
          <h4>Radio Shack- <p className="position">Store Manager</p></h4>
          <p className="date">JULY  2013 -AUGUST  2014</p>
          <ul className="description">
            <li>Complete store readiness requirements.</li>
            <li>Maintain store staff by coaching, counseling and disciplining employees as needed.</li>
            <li>Achieve financial obligations by preparing an annual budget, scheduling expenditures and analyzing variances.</li>
          </ul>
          </div>
      </div>
  );
}

export default Experience;