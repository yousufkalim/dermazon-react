// import components and libraries

import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { InputBase, MenuItem, Select } from '@mui/material';
import { styled } from '@mui/material/styles';

// import icons and images

import phone from '../../assets/home/phone.svg';
import whatsApp from '../../assets/home/whatsApp.svg';
import email from '../../assets/home/email.svg';
import attachment from '../../assets/home/attachment.svg';

const useOutlinedInputStyles = makeStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: '1.1px solid #ffffff ',
        borderRadius: '100px',
      },
      '&:hover fieldset': {
        borderColor: '#ffffff',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#ffffff',
        border: '1.1px solid #ffffff ',
      },
    },
  },
});

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    backgroundColor: '#02225E',
    borderRadius: '100px',
    border: '1.1px solid #ffffff',
    fontSize: 16,
    color: 'white',
    padding: '1.3% 4%',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    '&:focus': {
      borderRadius: '100px',
      borderColor: '#ffffff',
    },
  },
}));
export default function ContactSection() {
  const outlinedInputStyles = useOutlinedInputStyles();

  return (
    <div className="contact">
      <div className="contact_top">
        <h1 className="contact_top_heading">
          Contact{' '}
          <span
            style={{
              color: '#B3881D',
            }}
          >
            Us
          </span>
        </h1>
        <p className="contact_top_text_p">
          A technical sales representative will be happy to <br /> discuss your project with you.
        </p>
      </div>
      <div className="contact_bottom">
        <div className="contact_bottom_left">
          <div className="contact_icons">
            <div className="contact_icon">
              <img className="contact_icon_img" src={phone} alt="phone" />
            </div>
            <div className="contact_info_text">
              <span className="contact_info">Call us</span>
              <span className="phone">+33 695 12 03 33</span>
            </div>
          </div>
          <div className="contact_icons">
            <div className="contact_icon">
              <img className="contact_icon_img" src={whatsApp} alt="phone" />
            </div>
            <div className="contact_info_text">
              <span className="contact_info">On WhatsApp</span>
              <span className="phone">+33 695 12 03 33</span>
            </div>
          </div>
          <div className="contact_icons">
            <div className="contact_icon">
              <img className="contact_icon_img" src={email} alt="phone" />
            </div>
            <div className="contact_info_text">
              <span className="contact_info">Email</span>
              <span className="phone">contact@Dermazon.fr</span>
            </div>
          </div>
        </div>
        <div className="contact_bottom_right">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={6}>
                <FormControl sx={{ mb: 1, mt: 0.5, width: '100%' }} variant="outlined">
                  <TextField
                    sx={{
                      input: {
                        color: 'white',
                        fontSize: '14px',
                        fontWeight: 400,
                        '&::placeholder': {
                          opacity: 1,
                          paddingLeft: '10px',
                        },
                      },
                    }}
                    autoComplete="off"
                    className="nameField"
                    id="outlined-name"
                    classes={outlinedInputStyles}
                    size="small"
                    placeholder="Name"
                    name="name"
                    InputProps={{ sx: { padding: 0.4 } }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} lg={6}>
                <FormControl sx={{ mb: 1, mt: 0.5, width: '100%' }} variant="outlined">
                  <TextField
                    sx={{
                      input: {
                        color: 'white',
                        fontSize: '14px',
                        fontWeight: 400,
                        '&::placeholder': {
                          opacity: 1,
                          paddingLeft: '10px',
                        },
                      },
                    }}
                    autoComplete="off"
                    className="companyField"
                    id="outlined-company"
                    classes={outlinedInputStyles}
                    size="small"
                    placeholder="Company Name"
                    name="company"
                    InputProps={{ sx: { padding: 0.4 } }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} lg={6}>
                <FormControl sx={{ mb: 1, width: '100%' }} variant="outlined">
                  <TextField
                    sx={{
                      input: {
                        color: 'white',
                        fontSize: '14px',
                        fontWeight: 400,
                        '&::placeholder': {
                          opacity: 1,
                          paddingLeft: '10px',
                        },
                      },
                    }}
                    autoComplete="off"
                    className="emailField"
                    id="outlined-email"
                    classes={outlinedInputStyles}
                    size="small"
                    placeholder="Email"
                    name="email"
                    InputProps={{ sx: { padding: 0.4 } }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} lg={6}>
                <FormControl sx={{ mb: 1, width: '100%' }} variant="outlined">
                  <TextField
                    sx={{
                      input: {
                        color: 'white',
                        fontSize: '14px',
                        fontWeight: 400,
                        '&::placeholder': {
                          opacity: 1,
                          paddingLeft: '10px',
                        },
                      },
                    }}
                    autoComplete="off"
                    className="phoneField"
                    id="outlined-phone"
                    classes={outlinedInputStyles}
                    size="small"
                    placeholder="Telephone"
                    name="phone"
                    InputProps={{ sx: { padding: 0.4 } }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} lg={12}>
                <FormControl sx={{ mb: 1, width: '100%' }}>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="request"
                    label="Your Request"
                    input={<BootstrapInput />}
                    displayEmpty
                  >
                    <MenuItem
                      style={{
                        color: '#B3881D',
                      }}
                    >
                      Your Request
                    </MenuItem>
                    <MenuItem value="Sell my Laser">Sell my Laser</MenuItem>
                    <MenuItem value="Maintain my Laser">Maintain my Laser</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} lg={12}>
                <FormControl sx={{ mb: 1, width: '100%' }} variant="outlined">
                  <TextField
                    sx={{
                      input: {
                        color: 'white',
                        fontSize: '14px',
                        fontWeight: 400,
                        '&::placeholder': {
                          opacity: 1,
                          paddingLeft: '10px',
                        },
                      },
                    }}
                    autoComplete="off"
                    className="messageField"
                    multiline
                    rows={4}
                    id="outlined-message"
                    size="small"
                    placeholder="Your Message"
                    name="message"
                    InputProps={{
                      sx: {
                        padding: 2,
                        border: '1px solid white',
                        borderRadius: '14px',
                        color: 'white',
                      },
                    }}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Box>
          <div className="contact_bottom_right_btn">
            <div className="attachment">
              <img src={attachment} alt="attachment" />
              <input className="hide_file" type="file" />
              <span
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                }}
              >
                Add Any Attachment
              </span>
            </div>
            <button className="contact-btn" type="submit">
              Send{' '}
              <ArrowRightAltIcon
                style={{
                  marginLeft: '5px',
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
