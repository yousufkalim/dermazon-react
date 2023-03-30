/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import TermsIcon from '../../assets/TermsIcon.svg';
import TermsText from '../Terms/TermsText';

// const termsContent = [
//   {
//     content:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
//   },
// ];

const textShow = [
  {
    id: 1,
    quiz: 'ARTICLE 1- THE EDITOR',
    // ans: 'The edition of the Site is provided by DERMAZON (SASU) with a capital of 5000 euros, registered in the',
    // ans2: 'Trade and Companies Register of 123456789 under the number 123456789 whose head office',
    // ans3: 'is located at 11 RUE DU BOIS DE PARIS 77700 CHESSY',
    ans3: 'The edition of the Site is provided by DERMAZON (simplified joint-stock company with a single partner) with a capital of 5000 euros, registered in the Trade and Companies Register of Meaux B 948 720 396, under number 948720396 whose head office is located at 11 rue du bois de paris 77700 Chessy.',
    ans4: 'Phone number 0695120333',
    ans5: 'Email address: contact@dermazon.fr',
    ans6: 'Intra-community VAT number: 123456789',
    // ans7: 'The Director of publication is RAZZAQ Burhan',
    // ans8: 'below the',
    ans8: 'The Director of publication is RAZZAQ Burhan hereinafter the Publisher.',
    // boldText: 'Editor',
  },
  {
    id: 2,
    quiz: 'ARTICLE 2 - THE HOST',
    // ans: 'The host of the Site is the company OVH Cloud, whose head office is located at the registered company',
    // ans2: 'at the Lille RCS under number 537 407 926 located at 2, rue Kellermann, 59100 Roubaix. ,before',
    ans3: 'The Site host is Ovhcloud, whose head office is located at 2 rue Kellermann – BP 80157 59053 ROUBAIX CEDEX 1, with the telephone number: 1007',
    // boldText: 'and the telephone number: 0972101007 + contact email address',
  },
  {
    id: 3,
    quiz: 'ARTICLE 3 - ACCESS TO THE SITE',
    ans: 'The Site is accessible anywhere, 7 days a week, 24 hours a day, except in cases of force majeure, scheduled or unscheduled interruption and possibly resulting from a need for maintenance.',
    ans2: 'In the event of modification, interruption or suspension of the Site, the Publisher cannot be held responsible.',
  },
  {
    id: 4,
    quiz: 'ARTICLE 4 - DATA COLLECTION',
    ans: 'The Site provides the User with the collection and processing of personal information with respect for privacy in accordance with Law No. 78-17 of January 6, 1978 relating to data processing, files and freedoms. 1 Under the Data Protection Act, dated January 6, 1978, the User has a right to access, rectify, delete and oppose his personal data. The User exercises this right: via a contact form',
    ans2: "Any use, reproduction, distribution, marketing, modification of all or part of the Site, without the Publisher's authorization is prohibited and may result in legal action and prosecution as provided for in particular by the Intellectual Property Code and the Civil Code.",
    ans3: 'Written on http://legalplace.fr',
    ans4: 'Any use, reproduction, distribution, marketing, modification of all or part of the Site, without authorization of the Publisher is prohibited and may result in legal action and prosecution as provided for in particular by the Intellectual Property Code and the Civil Code.',
  },
];

function Notice() {
  const { t } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({
      top: 11,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    scrollToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div className="terms">
        <div className="terms_center">
          <div className="terms_condition">
            <img src={TermsIcon} alt="" className="terms_icon" />
            <p className="terms_title">
              {t('Legal Notice')}
              <p className="Notices_title_p">{t('Effective as of 26-01-2023')}</p>
            </p>
          </div>
          <div className="terms_definition">
            <p className="definition_title">Définition</p>
            <p className="definition_content">
              <p className="notices_p">
                <p className="notices_p">
                  {t(
                    'In accordance with the provisions of Articles 6-III and 19 of Law No. 2004-575 of June 21, 2004 on Confidence in the digital economy, known as LCEN, it is brought to the attention of users and visitors, hereinafter the',
                  )}
                  .
                </p>

                <p className="notices_p">
                  {t(
                    'The connection and navigation on the Site by the User implies full and unreserved acceptance of these legal notices.',
                  )}
                </p>
                <p className="notices_p">
                  {t('These are accessible on the Site under the heading')} «{t('Legal notices')}
                  ».
                </p>
              </p>
            </p>
          </div>
          {textShow.map((val) => {
            return <TermsText val={val} />;
          })}
        </div>
      </div>
      {/* first Section */}
      {/* first Section */}
      {/* first Section */}
      {/* <div className="notices">
        <div className="notice_second"> */}
      {/* <div className="Notices_head">
            <p className="Notices_title">{t('Legal Notice')}</p>
            <p className="Notices_title_p">{t('Effective as of 03/02/2023')}</p>
          </div> */}
      {/* <p className="notices_p">
            {t(
              'In accordance with the provisions of Articles 6-III and 19 of Law No. 2004-575 of June 21, 2004 on Confidence in the digital economy, known as LCEN, it is brought to the attention of users and visitors, hereinafter the',
            )}
            ""<b>{t('User')}</b>", {t('of the site https://dermazon.fr, hereinafter the')}"
            <b>{t('Site')}</b>", {t('these legal notices.')}
          </p>
          <p className="notices_p">
            {t(
              'The connection and navigation on the Site by the User implies full and unreserved acceptance of these legal notices.',
            )}
          </p>
          <p className="notices_p">
            {t('These are accessible on the Site under the heading')} «{t('Legal notices')}
            ».
          </p> */}
      {/* <div className="article_div">
            <p className="art_title">{t('ARTICLE 1 - THE EDITOR')}</p>
            <p className="art_p">
              {t(
                'The edition of the Site is provided by DERMAZON (SASU) with a capital of 5000 euros, registered in the',
              )}
              <br />
              {t(
                'Trade and Companies Register of 123456789 under the number 123456789 whose head office',
              )}
              <br />
              {t('is located at 11 RUE DU BOIS DE PARIS 77700 CHESSY')},
              <br />
              {t('Phone number 0695120333')}
              <br />
              {t('Email address: contact@dermazon.fr.')}
              <br />
              {t('Intra-community VAT number: 123456789')},
              <br />
              {t('The Director of publication is Mr. RAZZAQ Burhan')}
              <br />
              {t('below the')}'"<b>{t('Editor.')}</b>"
            </p>
          </div> */}
      {/* <div className="article_div">
            <p className="art_title">{t('ARTICLE 2 - THE HOST')}</p>
            <p className="art_p">
              {t(
                'The host of the Site is the company OVH Cloud, whose head office is located at the registered company',
              )}
              <br />
              {t(
                'at the Lille RCS under number 537 407 926 located at 2, rue Kellermann, 59100 Roubaix. ,before',
              )}
              <b>
                {t('and the')}
                <br />
                {t('telephone number: 0972101007 + contact email address')}
              </b>
            </p>
          </div> */}
      {/* <div className="article_div">
            <p className="art_title">{t('ARTICLE 3 - ACCESS TO THE SITE')}</p>
            <p className="art_p">
              {t(
                'The Site is accessible anywhere, 7 days a week, 24 hours a day, except in cases of force majeure, scheduled or unscheduled interruption and possibly resulting from a need for maintenance.',
              )}
              <br />
              <br />
              {t(
                'In the event of modification, interruption or suspension of the Site, the Publisher cannot be held responsible.',
              )}
            </p>
          </div> */}
      {/* <div className="article_div">
            <p className="art_title">{t('ARTICLE 4 - DATA COLLECTION')}</p>
            <p className="art_p">
              {t(
                'The Site provides the User with the collection and processing of personal information with respect for privacy in accordance with Law No. 78-17 of January 6, 1978 relating to data processing, files and freedoms. 1 Under the Data Protection Act, dated January 6, 1978, the User has a right to access, rectify, delete and oppose his personal data. The User exercises this right: via a contact form',
              )}
              <br />
              <br />
              {t(
                "Any use, reproduction, distribution, marketing, modification of all or part of the Site, without the Publisher's authorization is prohibited and may result in legal action and prosecution as provided for in particular by the Intellectual Property Code and the Civil Code.",
              )}
              <br />
              <br />
              {t('Written on http://legalplace.fr')}
            </p>
          </div> */}
      {/* </div>
      </div> */}
    </div>
  );
}

export default Notice;
