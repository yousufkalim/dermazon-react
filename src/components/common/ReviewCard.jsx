import React from 'react';
// import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Tooltip from '@mui/material/Tooltip';

export default function ReviewCard(props) {
  //   const { i18n, t } = useTranslation();
  const { data, dataIndex } = props;
  const { userName, comment, companyName } = data[dataIndex];
  console.log('userName', userName, comment, companyName);

  //   const [value, setValue] = React.useState(4);

  // let text = review;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0.5 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      viewport={{ once: true }}
      className="ReviewCard_Container"
    >
      <div className="ReviewCard">
        <h2
          className="Selection"
          id="h1tag"
          style={{
            marginTop: '4%',
            fontWeight: 600,
            fontSize: '1.5rem',
            fontFamily: 'Poppins',
            opacity: '1',
          }}
        >
          {userName}
        </h2>
        <h3
          className="Selection"
          id="h2tag"
          style={{
            // margin: '0',
            fontWeight: 400,
            fontSize: '1.2rem',
            opacity: '1',
            margin: '2% 0 5% 0',
          }}
        >
          {companyName}
        </h3>
        <Tooltip title={comment}>
          <p
            className="Selection"
            id="h3tag"
            style={{
              width: '80%',
              fontSize: '1rem',
              opacity: '1',
              fontWeight: '400',
            }}
          >
            {comment?.length > 100 ? `${comment?.slice(0, 100)}...` : comment}
            {/* {review} */}
          </p>
        </Tooltip>
        <h4
          className="Selection"
          style={{
            marginTop: '10%',
            fontWeight: '400',
            fontSize: '.8rem',
            fontStyle: 'italic',
            opacity: '1',
          }}
        >
          {/* {work} */}
        </h4>
      </div>
    </motion.div>
  );
}
