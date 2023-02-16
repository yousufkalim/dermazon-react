/* eslint-disable no-dupe-keys */
/* eslint-disable import/newline-after-import */
/* eslint-disable import/no-unresolved */
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // fallbackLng: ["fr", "en"],
    // we init with resources
    resources: {
      en: {
        translations: {
          // header
          'Follow us': 'Follow us',
          'PRE-OWNED LASERS': 'PRE-OWNED LASERS',
          Home: 'Home',
          'Buy A Pre-Owned Laser': 'Buy A Pre-Owned Laser',
          // home
          DERMAZON: 'DERMAZON',
          'is a worldwide marketplace': 'is a worldwide marketplace',
          'Based in Paris, for the sale and purchase of pre-owned laser and energy-based devices, used in dermatology and aesthetic medicine field.':
            'Based in Paris, for the sale and purchase of pre-owned laser and energy-based devices, used in dermatology and aesthetic medicine field.',
          'Client Testimonials': 'Client Testimonials',
          Our: 'Our',
          Services: 'Services',
          'Buy A Pre-Owned Laser': 'Buy A Pre-Owned Laser',
          'We sell high quality and brand premium pre-owned laser, they are checked and revised by independent and experienced service engineers. Find the right laser with us and save 50% on average compared to new.':
            'We sell high quality and brand premium pre-owned laser, they are checked and revised by independent and experienced service engineers. Find the right laser with us and save 50% on average compared to new.',
          'Buy A Laser': 'Buy A Laser',
          'Sell Your Laser': 'Sell Your Laser',
          'The process of selling your used medical laser is very easy. Fill the form below, and after review of your machine, we will either purpose you a purchase offer within 24 hours or we will list it on our marketplace and actively sell it with our partners and clients.':
            'The process of selling your used medical laser is very easy. Fill the form below, and after review of your machine, we will either purpose you a purchase offer within 24 hours or we will list it on our marketplace and actively sell it with our partners and clients.',
          'Contact us': 'Contact us',
          'Maintain Your Laser': 'Maintain Your Laser',
          'All medical laser equipment require a periodical preventive maintenance at least once a year, and this to avoid costly breakdowns and to guarantee good clinical functioning. For the moment we offer a laser repair and preventive maintenance with flashlamp change and handpieces refurbishment of certain brands. Do not hesitate to contact us for a quote or for more information':
            'All medical laser equipment require a periodical preventive maintenance at least once a year, and this to avoid costly breakdowns and to guarantee good clinical functioning. For the moment we offer a laser repair and preventive maintenance with flashlamp change and handpieces refurbishment of certain brands. Do not hesitate to contact us for a quote or for more information',
          'Rent a Laser': 'Rent a Laser',
          "Renting an equipment is an ideal step before buying one, it's also a way to avoid committing to an expensive investment without having visibility on your activity of aesthetic medicine. You can rent according to your needs with an option to buy. Contact us for a quote and to know the availability of the technology you are looking for.":
            "Renting an equipment is an ideal step before buying one, it's also a way to avoid committing to an expensive investment without having visibility on your activity of aesthetic medicine. You can rent according to your needs with an option to buy. Contact us for a quote and to know the availability of the technology you are looking for.",
          'Pick-up and Delivery': 'Pick-up and Delivery',
          'The transport of lasers requires special attention due to the optical alignment of the laser beams, which is why we take care of the transport ourselves under the right conditions. We are also available to manufacturers as a subcontractor':
            'The transport of lasers requires special attention due to the optical alignment of the laser beams, which is why we take care of the transport ourselves under the right conditions. We are also available to manufacturers as a subcontractor',
          // contact
          Contact: 'Contact',
          Us: 'Us',
          'Fill the form below and a technical sales representative will be happy to call you back to discuss your project with you.':
            'Fill the form below and a technical sales representative will be happy to call you back to discuss your project with you.',
          'Call us': 'Call us',
          'On WhatsApp': 'On WhatsApp',
          Email: 'Email',
          Name: 'Name',
          'Company Name': 'Company Name',
          Telephone: 'Telephone',
          Your: 'Request',
          Your: 'Message',
          'Add attachment': 'Add attachment',
          Send: 'Send',
          'Your Message': 'Your Message',
          'Legal Notice': 'Legal Notice',
          'Your Request': 'Your Request',
          'DERMAZON LASER': 'DERMAZON LASER',
          'All Rights Reserved.': 'All Rights Reserved.',
          // Buy Ad Laser
          'We are also laser hunters, you are looking for a particular laser which is not in the below list, get in touch with us and we will find it for you.':
            'We are also laser hunters, you are looking for a particular laser which is not in the below list, get in touch with us and we will find it for you.',
          Example: 'Example',
          Search: 'Search',
          Other: 'Other',
          'Maintain my Laser': 'Maintain my Laser',
          'Sell my Laser': 'Sell my Laser',
          // legel notice

          'Legal Notice': 'Legal Notice',
          'Effective as of 03/02/2023': 'Effective as of 03/02/2023',
          'In accordance with the provisions of Articles 6-III and 19 of Law No. 2004-575 of June 21, 2004 on Confidence in the digital economy, known as LCEN, it is brought to the attention of users and visitors, hereinafter the':
            'In accordance with the provisions of Articles 6-III and 19 of Law No. 2004-575 of June 21, 2004 on Confidence in the digital economy, known as LCEN, it is brought to the attention of users and visitors, hereinafter the',

          User: 'User',
          'of the site https://dermazon.fr, hereinafter the':
            'of the site https://dermazon.fr, hereinafter the',

          Site: 'Site',
          'these legal notices': 'these legal notices',
          'The connection and navigation on the Site by the User implies full and unreserved acceptance of these legal notices.':
            'The connection and navigation on the Site by the User implies full and unreserved acceptance of these legal notices.',
          'These are accessible on the Site under the heading':
            'These are accessible on the Site under the heading',
          'Legal notices': 'Legal notices',
          'ARTICLE 1 - THE EDITOR': 'ARTICLE 1 - THE EDITOR',
          'The edition of the Site is provided by DERMAZON (SASU) with a capital of 5000 euros, registered in the':
            'The edition of the Site is provided by DERMAZON (SASU) with a capital of 5000 euros, registered in the',
          'Trade and Companies Register of 123456789 under the number 123456789 whose head office ':
            'Trade and Companies Register of 123456789 under the number 123456789 whose head office ',

          'is located at 11 RUE DU BOIS DE PARIS 77700 CHESSY':
            'is located at 11 RUE DU BOIS DE PARIS 77700 CHESSY',

          'Phone number 0695120333': 'Phone number 0695120333',
          'Email address: contact@dermazon.fr': 'Email address: contact@dermazon.fr',
          'Intra-community VAT number: 123456789': 'Intra-community VAT number: 123456789',
          'The Director of publication is Mr. RAZZAQ Burhan':
            'The Director of publication is Mr. RAZZAQ Burhan',
          'below the': 'below the',
          Editor: 'Editor',
          'ARTICLE 2 - THE HOST': 'ARTICLE 2 - THE HOST',
          'The host of the Site is the company OVH Cloud, whose head office is located at the registered company':
            'The host of the Site is the company OVH Cloud, whose head office is located at the registered company',
          'at the Lille RCS under number 537 407 926 located at 2, rue Kellermann, 59100 Roubaix. ,before':
            'at the Lille RCS under number 537 407 926 located at 2, rue Kellermann, 59100 Roubaix. ,before',
          // 'and the': 'and the',
          'and the telephone number: 0972101007 + contact email address':
            'and the telephone number: 0972101007 + contact email address',
          'ARTICLE 3 - ACCESS TO THE SITE': 'ARTICLE 3 - ACCESS TO THE SITE',
          'The Site is accessible anywhere, 7 days a week, 24 hours a day, except in cases of force majeure, scheduled or unscheduled interruption and possibly resulting from a need for maintenance.':
            'The Site is accessible anywhere, 7 days a week, 24 hours a day, except in cases of force majeure, scheduled or unscheduled interruption and possibly resulting from a need for maintenance.',
          'In the event of modification, interruption or suspension of the Site, the Publisher cannot be held responsible.':
            'In the event of modification, interruption or suspension of the Site, the Publisher cannot be held responsible.',
          'ARTICLE 4 - DATA COLLECTION': 'ARTICLE 4 - DATA COLLECTION',
          'The Site provides the User with the collection and processing of personal information with respect for privacy in accordance with Law No. 78-17 of January 6, 1978 relating to data processing, files and freedoms. 1 Under the Data Protection Act, dated January 6, 1978, the User has a right to access, rectify, delete and oppose his personal data. The User exercises this right: via a contact form':
            'The Site provides the User with the collection and processing of personal information with respect for privacy in accordance with Law No. 78-17 of January 6, 1978 relating to data processing, files and freedoms. 1 Under the Data Protection Act, dated January 6, 1978, the User has a right to access, rectify, delete and oppose his personal data. The User exercises this right: via a contact form',
          "Any use, reproduction, distribution, marketing, modification of all or part of the Site, without the Publisher's authorization is prohibited and may result in legal action and prosecution as provided for in particular by the Intellectual Property Code and the Civil Code.":
            "Any use, reproduction, distribution, marketing, modification of all or part of the Site, without the Publisher's authorization is prohibited and may result in legal action and prosecution as provided for in particular by the Intellectual Property Code and the Civil Code.",
          'Written on http://legalplace.fr': 'Written on http://legalplace.fr',
          '': '',
          '': '',
          '': '',
          '': '',
          '': '',
          '': '',
          '': '',
          '': '',
          '': '',
          '': '',
          '': '',
          '': '',
        },
      },
      fr: {
        translations: {
          // header
          'Follow us': 'Suivez-nous',
          'PRE-OWNED LASERS': "LASERS D'OCCASION",
          Home: 'Accueil',
          'Buy A Pre-Owned Laser': "Acheter un laser d'occasion",
          // home
          DERMAZON: 'DERMAZON',
          'is a worldwide marketplace': 'est une plateforme',
          'Based in Paris, for the sale and purchase of pre-owned laser and energy-based devices, used in dermatology and aesthetic medicine field.':
            ' basée à Paris, spécialisé dans le rachat et la vente de lasers médical d’occasion, utilisé dans le domaine de la dermatologie et médecine esthétique.',
          'Client Testimonials': 'Témoignages clients',
          Our: 'Nos',
          Services: 'Services',
          'Buy A Pre-Owned Laser': 'Acheter un laser d’occasion',
          'We sell high quality and brand premium pre-owned laser, they are checked and revised by independent and experienced service engineers. Find the right laser with us and save 50% on average compared to new.':
            "Nous vendons des lasers d'occasion de qualité supérieure et de marque premium, ils sont complètement vérifiés et révisés par des ingénieurs de maintenance indépendants et expérimentés. Trouvez le bon laser avec nous et économisez en moyenne 50% comparée au neuf.",
          'Buy A Laser': 'Acheter un laser',
          'Sell Your Laser': 'Vendez votre laser',
          'The process of selling your used medical laser is very easy. Fill the form below, and after review of your machine, we will either purpose you a purchase offer within 24 hours or we will list it on our marketplace and actively sell it with our partners and clients.':
            'Le processus de vente de votre laser est très simple. Remplissez le formulaire ci-dessous, et après examen de votre machine, nous allons soit vous proposer une offre d’achat dans les 24 heure, soit nous publierons une annonce sur notre plateforme et la proposerons à nos différents partenaires et clients.',
          'Contact us': 'Contactez-nous',
          'Maintain Your Laser': 'Entretien et réparation de votre laser',
          'All medical laser equipment require a periodical preventive maintenance at least once a year, and this to avoid costly breakdowns and to guarantee good clinical functioning. For the moment we offer a laser repair and preventive maintenance with flashlamp change and handpieces refurbishment of certain brands. Do not hesitate to contact us for a quote or for more information':
            'Tout laser médical nécessite une maintenance préventive périodique au moins une fois par an, ceci pour garantir le bon fonctionnement clinique et éviter des pannes couteuses. Pour le moment nous proposons un service de réparation et révision des lasers avec changement de lampe flash et reconditionnement de pièces à main de certaines marques. Contactez nous pour un devis ou pour plus d’informations.',
          'Rent a Laser': 'Louer un laser',
          "Renting an equipment is an ideal step before buying one, it's also a way to avoid committing to an expensive investment without having visibility on your activity of aesthetic medicine. You can rent according to your needs with an option to buy. Contact us for a quote and to know the availability of the technology you are looking for.":
            "Louer un équipement est une étape idéale avant d'en acheter un, c'est aussi un moyen de ne pas s'engager dans un investissement coûteux sans avoir de visibilité sur votre activité de médecine esthétique. vous pouvez louer en fonction de vos besoins avec une option achat intéressante . Contactez-nous pour un devis et pour plus d’informations sur les technologie disponible",
          'Pick-up and Delivery': 'Enlèvement et livraison',
          'The transport of lasers requires special attention due to the optical alignment of the laser beams, which is why we take care of the transport ourselves under the right conditions. We are also available to manufacturers as a subcontractor':
            'Le transport des lasers requiert une attention spéciale en raison des alignements optiques par rapport aux faisceaux laser, c’est la raison pour laquelle nous nous occupons nous-mêmes du transport et ceci dans les règles de l’art des bonnes conditions. Nous sommes également disponibles pour les fabricants en sous-traitance.',
          // contact
          Contact: 'Contact',
          Us: 'Nous',
          'Fill the form below and a technical sales representative will be happy to call you back to discuss your project with you.':
            'Remplissez le formulaire ci-dessous et un technico-commercial sera heureux de vous rappeler pour discuter de votre projet.',
          'Call us': 'Appelez-nous',
          'On WhatsApp': 'Sur Whatsapp',
          Email: 'E-mail',
          Name: 'Nom',
          'Company Name': 'Entreprise Nom',
          Email: 'E-mail',
          Telephone: 'Téléphone',
          'Your Request': 'Votre demande',
          'Your Message': 'Votre message',
          'Add attachment': 'Ajoutez une pièce jointe',
          Send: 'Envoyer',
          'Legal Notice': 'Mentions légales',
          'DERMAZON LASER': 'LASER DERMAZONE',
          'All Rights Reserved.': 'Tous les droits sont réservés.',
          // Buy Ad Laser
          'We are also laser hunters, you are looking for a particular laser which is not in the below list, get in touch with us and we will find it for you.':
            'Nous sommes également des chasseurs de laser, vous recherchez un laser en particulier qui ne figure pas dans la liste ci-dessous, contactez-nous et nous le trouverons pour vous.',
          Example: 'Exemple',
          Search: 'Recherche',

          Other: 'Autre',
          'Maintain my Laser': 'Entretenir mon Laser',
          'Sell my Laser': 'Vendre mon Laser',
          // Legal Notice
          'Legal Notice': 'Mentions légales',
          'Effective as of 03/02/2023': 'En vigueur au 03/02/2023',
          'In accordance with the provisions of Articles 6-III and 19 of Law No. 2004-575 of June 21, 2004 on Confidence in the digital economy, known as LCEN, it is brought to the attention of users and visitors, hereinafter the':
            'Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique, dite L.C.E.N., il est porté à la connaissance des utilisateurs et visiteurs, ci-après l',

          User: 'Utilisateur',
          'of the site https://dermazon.fr, hereinafter the':
            'du site https://dermazon.fr , ci-après le',

          Site: 'Site',
          'these legal notices.': 'les présentes mentions légales.',
          'The connection and navigation on the Site by the User implies full and unreserved acceptance of these legal notices.':
            'La connexion et la navigation sur le Site par l’Utilisateur implique acceptation intégrale et sans réserve des présentes mentions légales.',
          'These are accessible on the Site under the heading':
            'Ces dernières sont accessibles sur le Site à la rubrique',
          'Legal notices': 'Mentions légales',
          'ARTICLE 1 - THE EDITOR': "ARTICLE 1 - L'EDITEUR",
          'The edition of the Site is provided by DERMAZON (SASU) with a capital of 5000 euros, registered in the':
            "L'édition du Site est assurée par DERMAZON (SASU) au capital de 5000 euros,immatriculée au",

          'Trade and Companies Register of 123456789 under the number 123456789 whose head office':
            'Registre du Commerce et des Sociétés de 123456789 sous le numéro 123456789 dont le siège social',

          'is located at 11 RUE DU BOIS DE PARIS 77700 CHESSY':
            'est situé au 11 RUE DU BOIS DE PARIS 77700 CHESSY,',

          'Phone number 0695120333': 'Numéro de téléphone 0695120333',
          'Email address: contact@dermazon.fr': 'Adresse e-mail : contact@dermazon.fr',
          'Intra-community VAT number: 123456789': 'N° de TVA intracommunautaire : 123456789',
          'The Director of publication is Mr. RAZZAQ Burhan':
            'Le Directeur de la publication est M RAZZAQ Burhan',
          'below the': 'ci-après l',
          Editor: 'Editeur',
          'ARTICLE 2 - THE HOST': "ARTICLE 2 - L'HEBERGEUR",
          'The host of the Site is the company OVH Cloud, whose head office is located at the registered company':
            "L'hébergeur du Site est la société OVH Cloud, dont le siège social est situé au société immatriculée",
          'at the Lille RCS under number 537 407 926 located at 2, rue Kellermann, 59100 Roubaix. ,before':
            'au RCS de Lille sous le numéro 537 407 926 sise 2, rue Kellermann, 59100 Roubaix. ,av',
          // 'and the': 'ec le',
          'and the telephone number: 0972101007 + contact email address':
            'ec le numéro de téléphone : 0972101007 + adresse mail de contact',
          'ARTICLE 3 - ACCESS TO THE SITE': 'ARTICLE 3 - ACCES AU SITE',
          'The Site is accessible anywhere, 7 days a week, 24 hours a day, except in cases of force majeure, scheduled or unscheduled interruption and possibly resulting from a need for maintenance.':
            'Le Site est accessible en tout endroit, 7 jours par semaine, 24 heures par jour, interruption programmée ou non et pouvant découlant d’une nécessité de maintenance',
          'In the event of modification, interruption or suspension of the Site, the Publisher cannot be held responsible.':
            "En cas de modification, interruption ou suspension du Site, l'Editeur ne saurait être tenu responsable.",
          'ARTICLE 4 - DATA COLLECTION': 'ARTICLE 4 - COLLECTE DES DONNEES',
          'The Site provides the User with the collection and processing of personal information with respect for privacy in accordance with Law No. 78-17 of January 6, 1978 relating to data processing, files and freedoms. 1 Under the Data Protection Act, dated January 6, 1978, the User has a right to access, rectify, delete and oppose his personal data. The User exercises this right: via a contact form':
            "Le Site assure à l'Utilisateur une collecte et un traitement d'informations personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés. 1 En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l'Utilisateur dispose d'un droit d'accès, de rectification, de suppression et d'opposition de ses données   personnelles. L'Utilisateur exerce ce droit : · via un formulaire de contact",
          "Any use, reproduction, distribution, marketing, modification of all or part of the Site, without the Publisher's authorization is prohibited and may result in legal action and prosecution as provided for in particular by the Intellectual Property Code and the Civil Code.":
            'Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du Site, sans autorisation de l’Editeur est prohibée et pourra entraînée des actions et poursuites judiciaires telles que notamment prévues par le Code de la propriété intellectuelle et le Code civil.',
          'Written on http://legalplace.fr': 'Rédigé sur http://legalplace.fr',
          '': '',
          '': '',
          '': '',
          '': '',
          '': '',
          '': '',
          '': '',
          '': '',
          '': '',
          '': '',
          '': '',
          '': '',
          '': '',
        },
      },
    },
    fallbackLng: 'en',
    debug: true,
    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false, // we use content as keys
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;
