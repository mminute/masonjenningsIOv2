import React from 'react';
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import navLinks from '../DATA/navLinks';
import { Box } from 'gestalt';

function Contact() {
  const moreAboutMe = {
    to: '/moreAbout/me/',
    txt: 'About Me',
    gatsbyLink: true,
  }

  const submitForm = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        window.location.replace('/thanks');
      } else {
        window.alert('Sorry! Something went wrong');
      }
    };
    xhr.send(data);
  }
  
  return (
    <Layout headerLinks={[moreAboutMe, navLinks.resume, navLinks.home]} stickyHeader stickyFooter>
      <SEO title="Contact" />
      <div className="container">
        <Box marginTop={12} padding={6}>
          <Box display="flex" justifyContent="center">
            <h2 className="montserrat" style={{ fontSize: '30px' }}>GET IN TOUCH</h2>
          </Box>

          <Box display="flex" justifyContent="center" marginTop={12}>
            <div className="inconsolata gray" style={{ fontSize: '12px' }}>
              I'D LOVE TO HEAR FROM YOU! I'LL GET BACK TO YOU SHORTLY.
            </div>
          </Box>
        </Box>

        <div style={{ marginBottom: '50px', marginTop: '50px' }}>
          <form
            action="https://formspree.io/f/xgepzvgy"
            method="POST"
            onSubmit={submitForm}
          >
            <Box display="flex" justifyContent="center">
              <Box display="flex" direction="column" column={6}>
                <Box paddingY={2}>
                  <input
                    aria-invalid="false"
                    className="form-control"
                    data-validation-required-message="Please enter your name."
                    name="name"
                    placeholder="Name"
                    required=""
                    type="text"
                    style={{ width: '100%' }}
                  />
                </Box>

                <Box paddingY={2}>
                  <input
                    className="form-control"
                    data-validation-required-message="Please enter your email address."
                    name="_replyto"
                    placeholder="Your E-mail"
                    required=""
                    type="email"
                    style={{ width: '100%' }}
                  />
                </Box>

                <Box paddingY={2}>
                  <textarea
                    className="form-control"
                    data-validation-required-message="Please enter your message."
                    name="message"
                    placeholder="Message"
                    required=""
                    rows="7"
                    style={{ width: '100%' }}
                  />
                </Box>

                <Box paddingY={2}>
                  <input
                    type="submit"
                    value="Send"
                    className="btn btn-round btn-g"
                  />
                </Box>
                
                <input
                  type="hidden"
                  name="_next"
                  value="//masonjennings.io/thanks"
                />
                <input
                  type="hidden"
                  name="_subject"
                  value="New contact @masonjennings.io"
                />
                <input
                  type="text"
                  name="_gotcha"
                  style={{ display: 'none' }}
                />
              </Box>
            </Box>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
