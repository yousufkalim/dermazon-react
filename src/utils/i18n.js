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
          'All medical laser equipment require a periodical preventive maintenance at least once a year, and this to avoid costly breakdowns and to guarantee good clinical functioning. For the moment we offer a laser repair and preventive maintenance with flashlamp change and handpieces refurbishment of certain brands. Do not hesitate to contact usfor a quote or for more information':
            'All medical laser equipment require a periodical preventive maintenance at least once a year, and this to avoid costly breakdowns and to guarantee good clinical functioning. For the moment we offer a laser repair and preventive maintenance with flashlamp change and handpieces refurbishment of certain brands. Do not hesitate to contact usfor a quote or for more information',
          'Rent a Laser': 'Rent a Laser',
          "Renting an equipment is an ideal step before buying one, it's also a way to avoid committing to an expensive investment without having visibility on your activity of aesthetic medicine. You can rent according to your needs with an option to buy. Contact us for a quote and to know the availability of the technology you are looking for.":
            "Renting an equipment is an ideal step before buying one, it's also a way to avoid committing to an expensive investment without having visibility on your activity of aesthetic medicine. You can rent according to your needs with an option to buy. Contact us for a quote and to know the availability of the technology you are looking for.",
          'Pick-up and Delivery': 'Pick-up and Delivery',
          'The transport of lasers requires special attention due to the optical alignment of the laser beams, which is why we take care of the transport ourselves under the right conditions. We are also available to manufacturers as a subcontractor':
            'The transport of lasers requires special attention due to the optical alignment of the laser beams, which is why we take care of the transport ourselves under the right conditions. We are also available to manufacturers as a subcontractor',
          // contact
          Contact: 'Contact',
          Us: 'Us',
          'A technical sales representative will be happy to discuss your project with you.':
            'A technical sales representative will be happy to discuss your project with you.',
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
          Our: 'Notre',
          Services: 'Prestations de service',
          'Buy A Pre-Owned Laser': 'Acheter un laser d’occasion',
          'We sell high quality and brand premium pre-owned laser, they are checked and revised by independent and experienced service engineers. Find the right laser with us and save 50% on average compared to new.':
            "Nous vendons des lasers d'occasion de qualité supérieure et de marque premium, ils sont complètement vérifiés et révisés par des ingénieurs de maintenance indépendants et expérimentés. Trouvez le bon laser avec nous et économisez en moyenne 50% comparée au neuf.",
          'Buy A Laser': 'Acheter un laser',
          'Sell Your Laser': 'Vendez votre laser',
          'The process of selling your used medical laser is very easy. Fill the form below, and after review of your machine, we will either purpose you a purchase offer within 24 hours or we will list it on our marketplace and actively sell it with our partners and clients.':
            'Le processus de vente de votre laser est très simple. Remplissez le formulaire ci-dessous, et après examen de votre machine, nous allons soit vous proposer une offre d’achat dans les 24 heure, soit nous publierons une annonce sur notre plateforme et la proposerons à nos différents partenaires et clients.',
          'Contact us': 'Contactez-nous',
          'Maintain Your Laser': 'Entretien et réparation de votre laser',
          'All medical laser equipment require a periodical preventive maintenance at least once a year, and this to avoid costly breakdowns and to guarantee good clinical functioning. For the moment we offer a laser repair and preventive maintenance with flashlamp change and handpieces refurbishment of certain brands. Do not hesitate to contact usfor a quote or for more information':
            'Tout laser médical nécessite une maintenance préventive périodique au moins une fois par an, ceci pour garantir le bon fonctionnement clinique et éviter des pannes couteuses. Pour le moment nous proposons un service de réparation et révision des lasers avec changement de lampe flash et reconditionnement de pièces à main de certaines marques. Contactez nous pour un devis ou pour plus d’informations.',
          'Rent a Laser': 'Louer un laser',
          "Renting an equipment is an ideal step before buying one, it's also a way to avoid committing to an expensive investment without having visibility on your activity of aesthetic medicine. You can rent according to your needs with an option to buy. Contact us for a quote and to know the availability of the technology you are looking for.":
            "Louer un équipement est une étape idéale avant d'en acheter un, c'est aussi un moyen de ne pas s'engager dans un investissement coûteux sans avoir de visibilité sur votre activité de médecine esthétique. vous pouvez louer en fonction de vos besoins avec une option achat intéressante . Contactez-nous pour un devis et pour plus d’informations sur les technologie disponible",
          'Pick-up and Delivery': 'Enlèvement et livraison',
          'The transport of lasers requires special attention due to the optical alignment of the laser beams, which is why we take care of the transport ourselves under the right conditions. We are also available to manufacturers as a subcontractor':
            'Le transport des lasers requiert une attention spéciale en raison des alignements optiques par rapport aux faisceaux laser, c’est la raison pourlaquelle nous nous occupons nous-mêmes du transport et ceci dans les règles de l’art des bonnes conditions. Nous sommes également disponibles pour les fabricants en sous-traitance.',
          // contact
          Contact: 'Contact',
          Us: 'Nous',
          'A technical sales representative will be happy to discuss your project with you.':
            'Un technico-commercial se fera un plaisir de discuter avec vous de votre projet.',
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

          '': '',
        },
      },
    },
    fallbackLng: 'fr',
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
