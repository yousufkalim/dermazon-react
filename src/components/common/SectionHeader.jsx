import React from 'react';
import { Divider } from '@mui/material';
import { motion } from 'framer-motion';
// import { useTranslation } from 'react-i18next';
export default function SectionHeader(props) {
  //   const { i18n, t } = useTranslation();

  return (
    {props.WorkProcess? (
        
        <motion.div className={props.LeftSectionHeader ? 'LeftSectionHeader' : 'SectionHeaderTypo'}>
          <h4
            className="SectionHeaderDesp"
            style={{ color: props.colorDesp ? props.colorDesp : '#fff' }}
          >
            {props.decription}
          </h4>
          <Divider
            // className='SectionHeaderDivider'
            className={props.SectionHeaderMargin ? 'SectionHeaderMargin' : 'SectionHeaderDivider'}
            width={props.width || '10%'}
            sx={{
              backgroundColor: '#42C2FF',
            }}
          />
          <p
            className="SectionHeaderH1_WP"
            style={{
              color: props.colorH1 ? props.colorH1 : '#fff',
              width: '30%',
              fontWeight: '600',
              fontSize: '1.5rem',
            }}
          >
            {props.h1}
          </p>

          <h2
            className="SectionHeaderH2"
            style={{ color: props.colorH2 ? props.colorH2 : '#003B7E' }}
          >
            {props.h2}
          </h2>
        </motion.div>
      ) : (
        <div
          className={props.LeftSectionHeader ? 'LeftSectionHeader' : 'SectionHeaderTypo'}
           
        >
          <p className="SectionHeaderH1" color={props.colorH1 || '#42C2FF'}>
            {props.h1}
          </p>
          <Divider
            className={props.SectionHeaderMargin ? 'SectionHeaderMargin' : 'SectionHeaderDivider'}
            width={props.width || '10%'}
          />
          <h2
            className="SectionHeaderH2"
            style={{ color: props.colorH2 ? props.colorH2 : '#003B7E' }}
          >
            {props.h2}
          </h2>
          <h3
            className="SectionHeaderDesp"
            style={{ color: props.colorDesp ? props.colorDesp : '#404040B2' }}
            width={props.despWidth}
          >
            {props.decription}
          </h3>
        </div>
      )}
  );
}
