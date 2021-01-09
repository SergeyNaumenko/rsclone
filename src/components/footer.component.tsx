import React from 'react';

type gitHubDataArray = { link: string, name: string }[];

export const Footer: React.FC = () => {
    const gitHubData:gitHubDataArray = [
      {
        link: 'https://github.com/KrasovskyAlexander',
        name: 'Alexander Krasovsky',
      },{
        link: 'https://github.com/vitalibury',
        name: 'Vitali Bury',
      },{
        link: 'https://github.com/SergeyNaumenko',
        name: 'Sergey Naumenko',
      },
    ];
    return (
      <footer className="page-footer teal">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Authors</h5>
              <ul>
                { gitHubData.map((item) => {
                  return(
                    <li><a className="grey-text text-lighten-3" href="{item.link}">{item.name}</a></li>
                  );
                })}
              </ul>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
          © 2021
          <a 
            className="grey-text text-lighten-4 right"
            href="https://rs.school/js/"
            target="_blank"
            rel="noreferrer">
            <img className="footer-logo" src="https://rs.school/images/rs_school_js.svg" alt="RS School logo"/>
          </a>
          </div>
        </div>
      </footer>
    )
}